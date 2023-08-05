// import { getActiveTab } from "./utils";


if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', afterLoaded);
} else {
    afterLoaded();
}

async function afterLoaded() {



    const tabs =await chrome.tabs.query({ active: true, lastFocusedWindow: true })
    const activeTab = tabs[0].url

    if ((activeTab.includes("leetcode.com/problems") || activeTab.includes("codingninjas.com/studio/problems"))) {


        const codingFonts = [
            "Anonymous Pro",
            "Consolas",
            "Courier New",
            "Droid Sans Mono",
            "Fira Code",
            "Hack",
            "Inconsolata",
            "Menlo",
            "MonoLisa",
            "Monaco",
            "Noto Mono",
            "Roboto Mono",
            "Source Code Pro",
            "Ubuntu Mono",
            "Cascadia Code",
            "Fantasque Sans Mono",
            "Iosevka",
            "JetBrains Mono",
            "Liberation Mono",
            "Meslo LG",
            "Oxygen Mono",
            "PragmataPro",
            "Space Mono",
            "Terminus",
            "Victor Mono",
            "Hackman",
            "Cutive Mono",
            "IBM Plex Mono",
            "IBM Plex Mono i",
            "Luculent",
            "Proggy Clean",
            "Share Tech Mono",
            "Fantasque Mono",
            "Monoid",
            "Hermit",
            "Envy Code R",
            "Code New Roman",
            "Sudo",
            "Go Mono",
            "Icomoon",
            "Operator Mono",
            "Input Mono",
            "IBM Plex Mono",
            "Mononoki",
            "Work Sans",
            "Cousine",
            "Input Mono",
            "Dank Mono",
            "Space Grotesk",
            // Add more font names here as needed
        ];


        const fontSelect = document.getElementById('fontSelect');

        codingFonts.forEach(font => {
            const option = document.createElement('option');
            option.textContent = font;
            option.value = font;
            fontSelect.appendChild(option);
        });

        

    document.getElementById('changeFont').addEventListener('click', () => {
        const fontName = document.getElementById('fontSelect').value;
        const letterSpacing = document.getElementById('letterSpacingInput').value;


        if (fontName) {
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                chrome.tabs.sendMessage(tabs[0].id, {
                    action: 'changeFont',
                    fontName: fontName,
                });
            });
        }

        if (letterSpacing && isNaN(letterSpacing) === false) {
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                chrome.tabs.sendMessage(tabs[0].id, {
                    action: 'changeLetterSpacing',
                    letterSpacing: letterSpacing,
                });
            });
        }
    });


    }
    else {
        const mainContainer = document.getElementById('mainContainer');
        mainContainer.innerHTML = "Please open a leetcode or coding ninjas problem to use this extension"
    }
}


// window.addEventListener('load', () => {



    // const activeTab = window.location.href;
    // console.log('Current url ', currentUrl)
    // const activeTab = getActiveTab();
    // console.log(activeTab)

    // const tabs = chrome.tabs.query({ active: true, lastFocusedWindow: true })
    // const activeTab = tabs[0].url

    // if ((activeTab.includes("leetcode.com/problems") || activeTab.includes("codingninjas.com/studio/problems"))) {

    

    // }
    // else {
    //     const mainContainer = document.getElementById('mainContainer');
    //     mainContainer.innerHTML = "Please open a leetcode or coding ninjas problem to use this extension"
    // }
// })







