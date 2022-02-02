var express = require("express"),
    app = express(),
    http = require("http").Server(app).listen(3100);
upload = require("express-fileupload");
app.use(upload());
console.log("Server started");

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
app.post("/", (req, res) => {
    if (req.files) {
        console.log(req.files);
        var file = req.files.filename,
            filename = file.name;
        file.mv("./uploadFiles/" + filename, (err) => {
            if (err) {
                console.log(err);
                res.send("Ooops! Something go wrong" + err);
            } else {
                res.send("Everything is ok!");
            }
        });
    }
});
