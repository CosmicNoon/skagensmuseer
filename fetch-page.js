
function getPage(page, lan, file="pages.json") {
    // fetch("pages.json").then(response => {
    fetch(file).then(response => {
        return response.json();
    }).then(response => {
        // console.table(response);
        for(let key of response) {
            // console.log(key.pagename);
            if(key.pagename === page) {
                // console.table(key.content);
                for(let item of key.content) {
                    // console.log(item.lan)
                    if(item.lan === lan) {
                        console.log(item);
                    }
                }
            }
        }
    
    }).catch(error => {
        console.error(error);
    });

    return lan;
}

function getNav(lan) {
    // fetch(file).then(response => {
    fetch("pages.json").then(response => {
        return response.json();
    }).then(response => {
        // console.table(response);
        let html = '<ul>';
        for(let key of response) {
            for(let item of key.content) {
                if(item.lan === lan) {
                    console.log(item.title)
                    // html += '<li><a onclick="getPage("'key.pagename + '","' + item.lan '")">' + item.title + '</li>';
                    html += "<li><a onclick=\"getPage('" + key.pagename + "','" + item.lan + "')\">" + item.title + "</a></li>";
                    
                }
            }
        }

        html += '</ul>';
        document.getElementById('nav').innerHTML = html;
        // document.getElementById('nav').style.cursor='pointer';
        document.querySelectorAll('nav li').forEach(li => {
            li.style.cursor='pointer';
        });

    }).catch(error => {
        console.error(error);
    });
}

// getNav('dk');
getNav(getPage('index', 'uk'));

// getPage('index', 'dk');