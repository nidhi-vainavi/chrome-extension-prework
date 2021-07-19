chrome.runtime.onMessage.addEventListener(function(request){
addText(request)
})

function addText(request){
    document.body.innerText += request
}