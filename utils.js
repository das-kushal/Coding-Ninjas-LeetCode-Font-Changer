export async function getActiveTab() {
    const tabs = await chrome.tabs.query({ active: true, lastFocusedWindow: true })
    return tabs[0].url
}


