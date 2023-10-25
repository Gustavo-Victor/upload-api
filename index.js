import express from 'express';
import cors from 'cors';
import fileRoute from "./routes/fileRoute.js";
import "./db.js";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/public', express.static(process.cwd() + '/public'));
app.use("/api/fileanalyse", fileRoute);

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});


const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Your app is listening on port ' + port)
});
