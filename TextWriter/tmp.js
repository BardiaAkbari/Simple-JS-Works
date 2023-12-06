let text = "Hi this is Bardia, hope you enjoy this content motha fucker :)";
let index = 0
let id = setInterval(write, 60);
function write(){
    document.body.innerText = text.slice(0, index);
    index++;
    if(index > text.length)
        clearInterval(id);
}
