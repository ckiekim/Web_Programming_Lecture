module.exports.create = function(list, navBar) {
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
            <h2>글쓰기</h2>
            <form action="/create_proc" method="post">
                <p><input type="text" name="title" size="58" placeholder="제목"></p>
                <p><textarea name="desc" cols="60" rows="5" placeholder="내용"></textarea></p>
                <p><input type="submit" value="제출"></p>
            </form>
        </body>
        </html>
    `;
}