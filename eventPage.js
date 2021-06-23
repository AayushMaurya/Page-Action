// this code will run only if it gets some message from sender
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.todo == "show-page-action") {
        // here we will write code to highlight ad access our extension by chrome

        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {      // get all tabs with specify properties
            chrome.pageAction.show(tabs[0].id);                    // shows the pageAction to the selected tab 
        });

        sendResponse('Your request is accepted');
    }
})

// problem is it will run single time only and thats why the extension will be active for one tab only
// we can use setInterval function also