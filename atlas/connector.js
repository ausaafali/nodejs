let mongodb = require('mongoose')
require('dotenv').config({ path: '../.env' });
let url = process.env.ATLAS_URL
console.log('Please wait while we connect you to: ' + url)
mongodb.connect(url)
    .then(() => {
        console.log('DB Connected')
    }).catch((e) => {
        console.error(e)
    })