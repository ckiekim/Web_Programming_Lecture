module.exports.delete = function(list, navBar, title) {
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
            <h2>글 삭제하기</h2>
            <form action="/delete_proc" method="post">
                <input type="hidden" name="title" value=${title}>
                <p>${title} 글을 삭제하시겠습니까?</p>
                <p><input type="submit" value="확인"></p>
            </form>
        </body>
        </html>
    `;
}