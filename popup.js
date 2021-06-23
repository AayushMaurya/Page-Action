$(document).ready(function(){
    var color = $('#fontColor').val();
    $('#btnChange').click(function(){
        var color = $('#fontColor').val();
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {todo: "changeColor", selectedColor: color});
        })
    });
});