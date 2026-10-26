require('dotenv').config()

const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const bodyParser = require("body-parser");
const db = require('./config/database');

const corsOrigin = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(',').map((origin) => origin.trim())
  : undefined;

app.use(helmet());
app.use(cors({ origin: corsOrigin }));
app.use(bodyParser.json());

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use('/auth', authLimiter);

db.authenticate().then(() => {
    console.log("db connected...");
}).catch(err => {
    console.log("Error: ", err);
})

const newsRoute = require('./routes/news');
const testimoniesRoute = require('./routes/testimonies');
const prayerMovementRoute = require('./routes/prayer.movement');
const staffMembersRoute = require('./routes/staff.members');
const authRoute = require('./routes/authentication');

app.get("/", (req, res) => {
    res.send("config get request")
});

app.use('/auth', authRoute);
app.use("/news", newsRoute);
app.use("/testimonies", testimoniesRoute);
app.use("/prayer", prayerMovementRoute);
app.use("/staffs", staffMembersRoute);
app.listen(3000);