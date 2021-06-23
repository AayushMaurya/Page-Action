chrome.runtime.sendMessage({todo: "show-page-action"}, function(response){
    console.log(response);
});

chrome.runtime.onMessage.addListener(function(message, sender, response){
    if(message.todo == "changeColor")
    {
        $('#main-content').css('color', message.selectedColor);
        console.log("now the font color is :", message.selectedColor);
    }
})