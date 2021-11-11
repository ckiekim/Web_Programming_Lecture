// Hyperlink 추가하고, 하이퍼링크를 클릭했을 때 화면이 바뀌도록 변경
const http = require('http');
const url = require('url');
const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Static Web</title>
    </head>
    <body>
        <h1><a href="/">Web 프로그래밍 기술</a></h1>
        <h3><ul>
            <li><a href="/?title=HTML5">HTML5</a></li>
            <li><a href="/?title=CSS3">CSS3</a></li>
            <li><a href="/?title=JavaScript">JavaScript</a></li>
        </ul></h3>
        <hr>
        <p>웹(World Wide Web)의 개방성은 웹사이트나 온라인 애플리케이션을 제작하려는 사람들에게 많은 기회를
            제공합니다. 하지만 그 사용 방법을 알아야 웹 기술을 잘 활용할 수 있습니다. 아래의 링크들을 확인하여
            다양한 웹 기술을 배워보세요.</p>
    </body>
    </html>
`;
const contents = [
    {title:'HTML5', desc:'HyperText Markup Language version 5 is ...'},
    {title:'CSS3', desc:'Cascading Style Sheet version 3 is ...'},
    {title:'JavaScript', desc:'JavaScript is ...'}
];

const app = http.createServer(function(req, res) {
    //console.log(req.url);
    let pathname = url.parse(req.url, true).pathname;
    let query = url.parse(req.url, true).query;
    console.log(pathname, query);

    if (pathname === '/') {
        if (query.title === undefined) {
            res.writeHead(200);             // It's OK
            res.end(html);
        } else {                            // localhost:3000/title=xxx
            let title = query.title;
            let desc = 'Not registered yet.';
            for (let content of contents) {
                if (content.title === title)
                    desc = content.desc;
            }
            let html = `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Static Web</title>
                </head>
                <body>
                    <h1><a href="/">Web 프로그래밍 기술</a></h1>
                    <h3><ul>
                        <li><a href="/?title=HTML5">HTML5</a></li>
                        <li><a href="/?title=CSS3">CSS3</a></li>
                        <li><a href="/?title=JavaScript">JavaScript</a></li>
                    </ul></h3>
                    <hr>
                    <h2>${title}</h2>
                    <p>${desc}</p>
                </body>
                </html>
            `;
            res.writeHead(200);             // It's OK
            res.end(html);
        }
    } else if (pathname === '/favicon') {

    } else {
        res.writeHead(404);
        res.end('Not found!!!');
    }
});
app.listen(3000);