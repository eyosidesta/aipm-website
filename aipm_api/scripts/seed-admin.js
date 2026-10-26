// One-time CLI script to create the first admin account, since /auth/signup
// now requires an existing admin to be logged in.
//
// Usage:
//   SEED_ADMIN_EMAIL=you@example.com SEED_ADMIN_PASSWORD=change-me-now SEED_ADMIN_NAME="Your Name" node scripts/seed-admin.js
//
// Requires aipm_api/config/database.js to exist and be configured.

require('dotenv').config();
const bcrypt = require('bcrypt');
const db = require('../config/database');
const Admin = require('../models/Admin');

async function main() {
  const email = process.env.SEED_ADMIN_EMAIL;
  const password = process.env.SEED_ADMIN_PASSWORD;
  const fullName = process.env.SEED_ADMIN_NAME || 'Admin';

  if (!email || !password) {
    console.error('SEED_ADMIN_EMAIL and SEED_ADMIN_PASSWORD env vars are required.');
    process.exit(1);
  }
  if (password.length < 8) {
    console.error('SEED_ADMIN_PASSWORD must be at least 8 characters.');
    process.exit(1);
  }

  await db.authenticate();

  const existing = await Admin.findAll({ where: { email } });
  if (existing.length > 0) {
    console.error(`An admin with email ${email} already exists.`);
    process.exit(1);
  }

  const hashedPassword = await bcrypt.hash(password, await bcrypt.genSalt());
  await Admin.create({ fullName, email, password: hashedPassword });

  console.log(`Admin created: ${email}`);
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
