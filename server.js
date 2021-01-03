const express = require('express')
const bodyParser = require('body-parser')
const ytdl = require('ytdl-core')
const path = require('path')
const fs = require('fs')
const readline = require('readline')
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path
var cors = require('cors')
const ffmpeg = require('fluent-ffmpeg')
ffmpeg.setFfmpegPath(ffmpegPath)

const app = express()
app.use(cors())
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
    console.log('video request accepted')
    console.log('#URL#', url)
    console.log('#TITLE#', title)
    console.log('----------------------------------------------------------')
    res.header("Content-Disposition", `attachment;\  filename=${title}.mp4`);
    ytdl(url, { format: 'mp4', quality: 'highestvideo', filter: 'audioandvideo' }).pipe(res)
})

app.get('/convert_audio', function(req, res) {
    const url = req.query.url
    const title = req.query.title
    console.log('----------------------------------------------------------')
    console.log(new Date())
    console.log('audio conversion request accepted')
    console.log('#URL#', url)
    console.log('#TITLE#', title)
    let stream = ytdl(url, { quality: 'highestaudio', filter: 'audioonly' })
    ffmpeg(stream)
    .audioBitrate(128)
    .save(`/tmp/${title}.mp3`)
    .on('progress', p => {
        readline.cursorTo(process.stdout, 0);
        process.stdout.write(`${p.targetSize}kb downloaded`);
    })
    .on('end', () => {
        console.log('conversion successfull')
        res.status(200)
        res.json({ msg: 'conversion successfull'})
        console.log('----------------------------------------------------------')
    })
})

app.get('/download_audio', function (req, res) {
    const url = req.query.url
    const title = req.query.title
    console.log('----------------------------------------------------------')
    console.log(new Date())
    console.log('audio request accepted')
    console.log('#URL#', url)
    console.log('#TITLE#', title)
    res.header("Content-Disposition", `attachment;\  filename=${title}.mp3`);
    console.log('')
    console.log(new Date())
    var readStream = fs.createReadStream(`/tmp/${title}.mp3`)
    readStream.pipe(res)
    res.on('finish', () => {
        fs.unlink(`/tmp/${title}.mp3`, (err) => {
            if(err) {
                console.error(err)
                return
            } else {
                console.log(`${title}.mp3`)
                console.log('file removed.')
            }
            console.log('----------------------------------------------------------')
        })
    })
})

app.listen(process.env.PORT || 8080, () => console.log('server started: ', new Date()));
