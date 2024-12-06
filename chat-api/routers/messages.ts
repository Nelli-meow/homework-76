import express from "express";

interface bodyContext {
    message: string;
    author: string;
}

const messagesRouter = express.Router();

messagesRouter.get("/", (req, res) => {
    res.status(200).send('Страничка тута с сообщениями')
})


messagesRouter.get("/:id", (req, res) => {
    res.status(200).send('Страничка тута с сообщениями по дате')
})

messagesRouter.post("/", (req, res) => {
    const { message, author } = req.body as bodyContext;


    if (!message.trim() || !author.trim()) {
        res.status(400).send('Author and message must be present and non-empty');
        return;
    }

    console.log(req.body);
    res.status(200).send('Сообщения получаю')
})


export default messagesRouter;