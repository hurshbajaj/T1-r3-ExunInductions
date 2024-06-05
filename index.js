const http = require("https");

const url = "https://gist.githubusercontent.com/GarvJain03/11979012b1f07395794148f9f7ab4b1c/raw/3431d292387c87aeb2175d8e1d44066ee5029068/example.txt";

const argu = process.argv[2].toString();

let HTTP = http.get(url, response => {
    let data = '';
    response.on('data', (chunk) => {data += chunk});

    response.on('end', () => check(data));
    
})

HTTP.on('error', (err) => console.log("something went wrong: ", err.message));

function check(DATA){

    if(DATA.includes(argu)){
        console.log("true");
    }
    else{
        console.log("false");
    }
}
