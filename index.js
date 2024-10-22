import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://evilinsult.com/generate_insult.php?lang=en&type=json"

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs", { content: "No hard feelings...Psyche!"})
})

app.get("/random", async (req, res) => {
    try {
        const response = await axios.get(API_URL);
        res.render("random.ejs", { content: response.data });
    } catch (error) {
        res.status(500).send("Failed to fetch activity. Please try again"); 
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});