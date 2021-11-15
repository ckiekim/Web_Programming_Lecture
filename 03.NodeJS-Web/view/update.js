module.exports.update = function(list, navBar, title, desc) {
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
            <h2>글 수정하기</h2>
            <form action="/update_proc" method="post">
                <input type="hidden" name="oldTitle" value=${title}>
                <p><input type="text" name="title" size="58" value=${title}></p>
                <p><textarea name="desc" cols="60" rows="5">${desc}</textarea></p>
                <p><input type="submit" value="제출"></p>
            </form>
        </body>
        </html>
    `;
}