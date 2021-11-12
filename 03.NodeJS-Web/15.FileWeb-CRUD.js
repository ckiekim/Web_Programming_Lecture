// 파일에서 읽어서 동적으로 처리
const http = require('http');
const url = require('url');
const fs = require('fs');
const qs = require('querystring');

const HOME_TITLE = 'Welcome to Web World';
const HOME_DESC = `
    웹(World Wide Web)의 개방성은 웹사이트나 온라인 애플리케이션을 제작하려는 사람들에게 많은 기회를
    제공합니다. 하지만 그 사용 방법을 알아야 웹 기술을 잘 활용할 수 있습니다. 아래의 링크들을 확인하여
    다양한 웹 기술을 배워보세요.`;

function templateHtml(list, navBar, title, desc) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>File Web - CRUD</title>
        </head>
        <body>
            <h1><a href="/">Web 프로그래밍 기술</a></h1>
            <h3>${list}</h3>
            <hr>
            ${navBar}
            <hr>
            <h2>${title}</h2>
            <p>${desc}</p>
        </body>
        </html>
    `;
}

function templateNavRead(title) {
    return `
        <a href="/"><button>홈으로</button></a>
        <a href="/create"><button>글쓰기</button></a>
        <a href="/update?title=${title}"><button>수정하기</button></a>
        <a href="/delete?title=${title}"><button>삭제하기</button></a>
    `
}

const templateNav = {
    home: `
            <a href="/"><button>홈으로</button></a>
            <a href="/create"><button>글쓰기</button></a>
    `,
    operate: '<a href="/"><button>홈으로</button></a>'
}

function templateList(filelist) {
    let list = '<ul>\n';
    for (let filename of filelist) {
        let item = filename.substring(0, filename.length-4);
        list += `<li><a href="/?title=${item}">${item}</a></li>\n`;
    }
    list += '</ul>\n';
    return list;
}

const app = http.createServer(function(req, res) {
    let pathname = url.parse(req.url, true).pathname;
    let query = url.parse(req.url, true).query;
    //console.log(pathname, query);

    if (pathname === '/') {
        if (query.title === undefined) {
            fs.readdir('./data', (err, files) => {
                let list = templateList(files);
                let html = templateHtml(list, templateNav.home, HOME_TITLE, HOME_DESC);
                res.writeHead(200);             
                res.end(html);
            });
        } else {                            
            let title = query.title;
            fs.readdir('./data', (err, files) => {
                let list = templateList(files);
                let navBar = templateNavRead(title);
                fs.readFile(`./data/${title}.txt`, 'utf8', (error, desc) => {
                    let html = templateHtml(list, navBar, title, desc);
                    res.writeHead(200);             
                    res.end(html);
                });
            });
        }
    } else if (pathname === '/create') {
        fs.readdir('./data', (err, files) => {
            let list = templateList(files);
            let html = `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>File Web - CRUD</title>
                </head>
                <body>
                    <h1><a href="/">Web 프로그래밍 기술</a></h1>
                    <h3>${list}</h3>
                    <hr>
                    ${templateNav.operate}
                    <hr>
                    <h2>글쓰기</h2>
                    <form action="/create_proc" method="post">
                        <p><input type="text" name="title" size="58" placeholder="제목"></p>
                        <p><textarea name="desc" cols="60" rows="5" placeholder="내용"></textarea></p>
                        <p><input type="submit" value="제출"></p>
                    </form>
                </body>
                </html>
            `;
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
            //console.log(title);
            //console.log(desc);
            fs.writeFile(`./data/${title}.txt`, desc, 'utf8', (err) => {
                res.writeHead(302, {Location: `/?title=${title}`});      // redirection
                res.end();
            });
        });
    } else if (pathname === '/update') {
        //console.log(pathname);
        //console.log(query);
        let title = query.title;
        fs.readdir('./data', (err, files) => {
            let list = templateList(files);
            fs.readFile(`./data/${title}.txt`, 'utf8', (error, desc) => {
                let html = `
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>File Web - CRUD</title>
                    </head>
                    <body>
                        <h1><a href="/">Web 프로그래밍 기술</a></h1>
                        <h3>${list}</h3>
                        <hr>
                        ${templateNav.operate}
                        <hr>
                        <h2>글 수정하기</h2>
                        <form action="/update_proc" method="post">
                            <input type="hidden" name="oldTitle" value=${title}>
                            <p><input type="text" name="title" size="58" value=${title}></p>
                            <p><textarea name="desc" cols="60" rows="5">${desc}</textarea></p>
                            <p><input type="submit" value="제출"></p>
                        </form>
                    </body>
                    </html>
                `
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
            //console.log(oldTitle);
            //console.log(title);
            //console.log(desc);
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
            let list = templateList(files);
            fs.readFile(`./data/${title}.txt`, 'utf8', (error, desc) => {
                let html = `
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>File Web - CRUD</title>
                    </head>
                    <body>
                        <h1><a href="/">Web 프로그래밍 기술</a></h1>
                        <h3>${list}</h3>
                        <hr>
                        ${templateNav.operate}
                        <hr>
                        <h2>글 삭제하기</h2>
                        <form action="/delete_proc" method="post">
                            <input type="hidden" name="title" value=${title}>
                            <p>${title} 글을 삭제하시겠습니까?</p>
                            <p><input type="submit" value="확인"></p>
                        </form>
                    </body>
                    </html>
                `
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