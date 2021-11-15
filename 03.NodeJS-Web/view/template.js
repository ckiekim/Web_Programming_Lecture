module.exports = {
    HOME_TITLE: 'Welcome to Web World',
    HOME_DESC: `
        웹(World Wide Web)의 개방성은 웹사이트나 온라인 애플리케이션을 제작하려는 사람들에게 많은 기회를
        제공합니다. 하지만 그 사용 방법을 알아야 웹 기술을 잘 활용할 수 있습니다. 아래의 링크들을 확인하여
        다양한 웹 기술을 배워보세요.`,

    html: function(list, navBar, title, desc) {
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
    },

    list: function(filelist) {
        let list = '<ul>\n';
        for (let filename of filelist) {
            let item = filename.substring(0, filename.length-4);
            list += `<li><a href="/?title=${item}">${item}</a></li>\n`;
        }
        list += '</ul>\n';
        return list;
    },

    navMain: function() {
        return `
            <a href="/"><button>홈으로</button></a>
            <a href="/create"><button>글쓰기</button></a>
        `;
    },
    navList: function(title) {
        return `
            <a href="/"><button>홈으로</button></a>
            <a href="/create"><button>글쓰기</button></a>
            <a href="/update?title=${title}"><button>수정하기</button></a>
            <a href="/delete?title=${title}"><button>삭제하기</button></a>
        `;
    },
    navOp: function() {
        return '<a href="/"><button>홈으로</button></a>';
    }
}