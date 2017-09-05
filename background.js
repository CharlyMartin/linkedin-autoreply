const invitePage = "https://www.linkedin.com/mynetwork/invitation-manager/";
const messagePage = "https://www.linkedin.com/messaging/compose/?after=mynetwork";


function invitePageMatches(tab) {
  return tab.url.includes(invitePage)
};

function messagePageMatches(tab) {
  return tab.url.includes(messagePage)
};


chrome.browserAction.onClicked.addListener((activeTab) => {

  if (!invitePageMatches(activeTab) || !messagePageMatches(activeTab)) {
    chrome.tabs.create({ url: inviteManager });
  }

  if (invitePageMatches(activeTab)) {
    chrome.tabs.executeScript(activeTab.id, {
      file: 'scripts/accept-invite.js'
    });
   }

  if (messagePageMatches(activeTab)) {
    chrome.tabs.executeScript(activeTab.id, {
      file: 'scripts/send-message.js'
    });
   }

});



// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//   alert(changeInfo)
//    if (tab.url == inviteManager) {
//     chrome.tabs.executeScript(tab.ib, {
//       file: 'scripts/accept-invite.js'
//     });
//    };

//    if (tab.url == messageComposer) {
//     chrome.tabs.executeScript(tab.ib, {
//       file: 'scripts/send-message.js.js'
//     });
//    }
// });

// chrome.browserAction.onClicked.addListener(function (tab) {
//   // for the current tab, inject the "inject.js" file & execute it
//
// });
