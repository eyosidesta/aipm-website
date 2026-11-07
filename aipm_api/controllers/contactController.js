const Contact = require("../models/Contact");
const response = require("../utils/responses");
const sucessMessage = require("../utils/success_messages");
const errorMessage = require("../utils/error_messages");

exports.add_contact = async (req, res) => {
    const { name, email, reason, message } = req.body;
    if (!name || !email || !message) {
        res
            .status(400)
            .json(response.failure_response("name, email and message are required", 400, null));
        return;
    }
    try {
        const newContact = await Contact.create({ name, email, reason, message });
        res
            .status(201)
            .json(response.success_response(sucessMessage.added_message("Message"), 201, newContact));
    } catch (err) {
        console.error(err);
        res
            .status(500)
            .json(response.failure_response(errorMessage.added_error("Message"), 500, null));
    }
};

exports.get_all_contacts = (req, res) => {
    Contact.findAll({ order: [["createdAt", "DESC"]] })
        .then((contacts) => {
            res
                .status(200)
                .json(response.success_response(sucessMessage.found_message("Messages"), 200, contacts));
        })
        .catch((err) => {
            console.error(err);
            res
                .status(500)
                .json(response.failure_response(errorMessage.found_error("Messages"), 500, null));
        });
};

exports.delete_contact = async (req, res) => {
    const uid = req.params.id;
    const convertedToNum = parseInt(uid);
    if (isNaN(convertedToNum)) {
        res.status(400).json({ message: "the parameter is not an integer, please provide the actual integer value for the id" });
        return;
    }
    const contact = await Contact.findByPk(convertedToNum);
    if (!contact) {
        res.status(404).json(response.failure_response(errorMessage.error_404("Message"), 404, null));
        return;
    }
    Contact.destroy({ where: { id: convertedToNum } })
        .then(() => {
            res.status(200).json(response.success_response(sucessMessage.deleted_message("Message"), 200, contact));
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json(response.failure_response(errorMessage.delete_error("Message"), 500, null));
        });
};
