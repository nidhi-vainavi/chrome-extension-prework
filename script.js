document.addEventListener('DOMContentLoaded', function(){
document.querySelector('button').addEventListener("click", onClick, false)
function onClick(){
    var text = document/getElementById('text').value
    chrome.tabs.query({currentWindow:true, active:true}, function(tab){
    chrome.tabs.sendMessage(tabs[0].id,text)

    })

}
},false)