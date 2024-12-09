import express from "express";
import fileDb from "../fileDb";
import {MessageWithoutId} from "../types";

interface bodyContext {
    message: string;
    author: string;
}

const messagesRouter = express.Router();

messagesRouter.get("/",  async (req, res) => {
    try {
        const messages = await fileDb.getMessages();
        const queryDate = req.query.dateTime as string;

        if (queryDate) {
            console.log("Received date:", queryDate);

            const date = new Date(queryDate);
            if (isNaN(date.getTime())) {
                 res.status(400).send('Invalid date format');

            } else {
                const filteredMessages = messages.filter(msg => new Date(msg.dateTime) > date);
                 res.status(200).send(filteredMessages.slice(-30));
            }
        }

        res.status(200).send(messages);

    } catch (e) {
        res.status(500).send('Error :(');
    }

});


messagesRouter.post("/", async (req, res) => {
    const { message, author } = req.body as bodyContext;

    if (!message || !author) {
        res.status(400).send('Author and message must be present and non-empty');
        return;
    }

    const fullMessage: MessageWithoutId = {
        message: req.body.message,
        author: req.body.author,
        dateTime: req.body.dateTime,
    };

    const savedMessage = await fileDb.addMessage(fullMessage);

    console.log(req.body);

    res.status(200).send(savedMessage);
})


export default messagesRouter;