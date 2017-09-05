const inviteManager = "https://www.linkedin.com/mynetwork/invitation-manager/"
const messageComposer = "https://www.linkedin.com/messaging/compose/?after=mynetwork*"

chrome.browserAction.onClicked.addListener((activeTab) => {
  if (activeTab.url !== inviteManager) {
    chrome.tabs.create({ url: inviteManager });
  }
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  alert(changeInfo)
   // if (tab.url == inviteManager) {
   //  chrome.tabs.executeScript(tab.ib, {
   //    file: 'scripts/accept-invite.js'
   //  });
   // };

   // if (tab.url == messageComposer) {
   //  chrome.tabs.executeScript(tab.ib, {
   //    file: 'scripts/send-message.js.js'
   //  });
   // }
});

// chrome.browserAction.onClicked.addListener(function (tab) {
//   // for the current tab, inject the "inject.js" file & execute it
//
// });
