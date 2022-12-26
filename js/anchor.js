
function goToAnchor(){
    const url = new URL(document.URL)
    const anchor = document.querySelector(url.hash)
    anchor.scrollIntoView({block: "start", behavior: "smooth"})
    console.log(anchor)
}

document.addEventListener("DOMContentLoaded", function(e){
    scroll({top: 0})
    setTimeout( goToAnchor , 200)
});