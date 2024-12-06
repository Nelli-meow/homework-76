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
        res.status(200).send(messages);
    } catch (e) {
        res.status(500).send('Error :(');
    }

});

messagesRouter.get("/:id", (req, res) => {
    res.status(200).send('Страничка тута с сообщениями по дате')
});

messagesRouter.post("/", async (req, res) => {
    const { message, author } = req.body as bodyContext;

    if (!message.trim() || !author.trim()) {
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