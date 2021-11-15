// 파일에서 읽어서 동적으로 처리 - 모듈화
const http = require('http');
const url = require('url');
const fs = require('fs');
const qs = require('querystring');
const template = require('./view/template');

const app = http.createServer(function(req, res) {
    let pathname = url.parse(req.url, true).pathname;
    let query = url.parse(req.url, true).query;

    if (pathname === '/') {
        if (query.title === undefined) {
            fs.readdir('./data', (err, files) => {
                let list = template.list(files);
                let navBar = template.navMain();
                let html = template.html(list, navBar, template.HOME_TITLE, template.HOME_DESC);
                res.writeHead(200);             
                res.end(html);
            });
        } else {                            
            let title = query.title;
            fs.readdir('./data', (err, files) => {
                let list = template.list(files);
                let navBar = template.navList(title);
                fs.readFile(`./data/${title}.txt`, 'utf8', (error, desc) => {
                    let html = template.html(list, navBar, title, desc);
                    res.writeHead(200);             
                    res.end(html);
                });
            });
        }
    } else if (pathname === '/create') {
        fs.readdir('./data', (err, files) => {
            let list = template.list(files);
            let navBar = template.navOp();
            let view = require('./view/create');
            let html = view.create(list, navBar);
            res.writeHead(200);             
            res.end(html);
        });
    } else if (pathname === '/create_proc') {
        let body = '';
        req.on('data', (data) => {
            body += data;
        });
        req.on('end', () => {
            let post = qs.parse(body);
            let title = post.title;
            let desc = post.desc;
            fs.writeFile(`./data/${title}.txt`, desc, 'utf8', (err) => {
                res.writeHead(302, {Location: `/?title=${title}`});      // redirection
                res.end();
            });
        });
    } else if (pathname === '/update') {
        let title = query.title;
        let navBar = template.navOp();
        fs.readdir('./data', (err, files) => {
            let list = template.list(files);
            fs.readFile(`./data/${title}.txt`, 'utf8', (error, desc) => {
                let view = require('./view/update');
                let html = view.update(list, navBar, title, desc);
                res.writeHead(200);             
                res.end(html);
            });
        });
    } else if (pathname === '/update_proc') {
        let body = '';
        req.on('data', (data) => {
            body += data;
        });
        req.on('end', () => {
            let post = qs.parse(body);
            let oldTitle = post.oldTitle;
            let title = post.title;
            let desc = post.desc;
            fs.rename(`./data/${oldTitle}.txt`, `./data/${title}.txt`, () => {
                fs.writeFile(`./data/${title}.txt`, desc, 'utf8', (err) => {
                    res.writeHead(302, {Location: `/?title=${title}`});      // redirection
                    res.end();
                });
            });
        });
    } else if (pathname === '/delete') {
        let title = query.title;
        fs.readdir('./data', (err, files) => {
            let list = template.list(files);
            let navBar = template.navOp();
            fs.readFile(`./data/${title}.txt`, 'utf8', (error, desc) => {
                let view = require('./view/delete');
                let html = view.delete(list, navBar, title);
                res.writeHead(200);             
                res.end(html);
            });
        });
    } else if (pathname === '/delete_proc') {
        let body = '';
        req.on('data', (data) => {
            body += data;
        });
        req.on('end', () => {
            let post = qs.parse(body);
            let title = post.title;
            fs.unlink(`./data/${title}.txt`, (err) => {
                res.writeHead(302, {Location: `/`});      // redirection
                res.end();
            });
        });
    } else if (pathname === '/favicon.ico') {
        fs.readFile('nodejs.png', (error, data) => {
            res.statusCode = 200;
            res.setHeader('Content-type', 'image/png');
            res.end(data);
        });
    } else {
        res.writeHead(404);
        res.end('Not found!!!');
    }
});
app.listen(3000);