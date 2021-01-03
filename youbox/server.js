const express = require('express')
const bodyParser = require('body-parser')
const ytdl = require('ytdl-core')
const path = require('path')
const fs = require('fs')

const app = express()
app.use(express.static(path.join(__dirname, 'build')))

app.get('/ping', function (req, res) {
    return res.send('pong');
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/download_video', function (req, res) {
    const url = req.query.url
    const title = req.query.title
    console.log('----------------------------------------------------------')
    console.log(new Date())
    console.log('request accepted')
    console.log('#URL#', url)
    console.log('#TITLE#', title)
    console.log('----------------------------------------------------------')
    res.header("Content-Disposition", `attachment;\  filename=${title}.mp4`);
    ytdl(url, { format: 'mp4', quality: 'highestvideo' }).pipe(res)
})

app.listen(process.env.PORT || 8080);
