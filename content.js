

// console.log('Content script loaded.');

// // Check the current URL when the content script is executed
// const currentUrl = window.location.href;
// console.log('Current URL:', currentUrl);



if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', afterLoaded);
} else {
    afterLoaded();
}

function afterLoaded() {


    const storedFontName = localStorage.getItem('cl-fontName');
    const storedLetterSpacing = localStorage.getItem('cl-letterSpacing');
    if (storedFontName) {
        applyFont(storedFontName);
    }
    if (storedLetterSpacing) {
        applyLetterSpacing(storedLetterSpacing);
    }


    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (message.action === 'changeFont') {
            const fontName = message.fontName;
            applyFont(fontName);

            localStorage.setItem('cl-fontName', fontName);
        }

        if (message.action === 'changeLetterSpacing') {
            const letterSpacing = message.letterSpacing;
            applyLetterSpacing(letterSpacing);

            localStorage.setItem('cl-letterSpacing', letterSpacing);
        }
    });

    function applyFont(fontName) {
        const style = document.createElement('style');
        style.textContent = `.view-lines { font-family: ${fontName} !important; }`;
        document.head.appendChild(style);
    }

    function applyLetterSpacing(letterSpacing) {
        const style = document.createElement('style');
        style.textContent = `.view-lines { letter-spacing: ${letterSpacing}px !important; }`;
        document.head.appendChild(style);
    }



    
}

// document.addEventListener('DOMContentLoaded', () => {
    // chrome.tabs.onUpdated.addEventListener((tabId, tab) => {
    // if (tab.url && (tab.url.includes("leetcode.com/problems") || tab.url.includes("codingninjas.com/studio/problems"))) {
    // console.log(tab.url);
    // console.log('correct page!!')
    // console.log('window loaded!!')
    // const url = window.location.href;
    // if (url.includes("leetcode.com/problems") || url.includes("codingninjas.com/studio/problems")) {
    // console.log('url is ', url)

    // const currentUrl = window.location.href;
    // console.log('Current url ', currentUrl)

    // const tabs = chrome.tabs.query({ active: true, lastFocusedWindow: true })
    // const currentUrl = tabs[0].url

    // if (
    //     currentUrl.includes('leetcode.com/problems') ||
    //     currentUrl.includes('codingninjas.com/studio/problems')
    // ) {




    

    // } else {
    //     const mainContainer = document.getElementById('mainContainer');
    //     mainContainer.innerHTML = 'Please open a leetcode or coding ninjas problem to use this extension';
    // }



    // }
    // if (!url.includes("leetcode.com/problems") && !url.includes("codingninjas.com/studio/problems"))


// });
