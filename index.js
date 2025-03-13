require("dotenv").config()
let http_module = require("http")
let { exec } = require("child_process");
let port_no = process.env.PORT


http_module.createServer(function (req, res) {

    if (req.url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(`<h1>Home Page</h1>
                    <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/services">Services</a>
                </li>
                <li>
                    <a href="/about">About Us</a>
                </li>
                <li>
                    <a href="/impressum">Impressum</a>
                </li>
            </ul>
        `);
    } else if (req.url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(`<h1>About Us</h1>
                    <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/services">Services</a>
                </li>
                <li>
                    <a href="/about">About Us</a>
                </li>
                <li>
                    <a href="/impressum">Impressum</a>
                </li>
            </ul>
        `);
    } else if (req.url === '/services') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(`<h1>Services</h1>
                    <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/services">Services</a>
                </li>
                <li>
                    <a href="/about">About Us</a>
                </li>
                <li>
                    <a href="/impressum">Impressum</a>
                </li>
            </ul>
        `);
    } else if (req.url === '/impressum') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(`<h1>Contact Us</h1>
                    <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/services">Services</a>
                </li>
                <li>
                    <a href="/about">About Us</a>
                </li>
                <li>
                    <a href="/impressum">Impressum</a>
                </li>
            </ul>
        `);
    }else{
        res.writeHead(404, { 'content-type': 'text/html' });
        res.write(`<h1 style=''>404 Not Found</h1>`);

    }




}).listen(port_no, () => {
    console.log(`Server started at http://localhost:${port_no}`)
    let e = `Server is live @ http://localhost:${port_no}`;
    if (process.platform === 'win32') {
        exec(`start ${e}`)
    }
})

// npm i nodemon dotenv
// npm init -y

