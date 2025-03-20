let mongodb = require('mongoose')
require('dotenv').config()
let url = process.env.ATLAS_URL
console.log(url)
mongodb.connect('mongodb+srv://ausaafali:pbkljha*(&@cluster0.8ewy0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('DB Connected')
    }).catch((e) => {
        console.error(e)
    })