import express from "express"
import bodyParser from "body-parser"

//create app
const app = express()

//add bpdyparser to app
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send("Hi...")
})

app.post("/add", (req, res) => {
    console.log(req.body);
    res.send("Added..")
})

app.listen(5000, () => {
    console.log("Server Started..");
})