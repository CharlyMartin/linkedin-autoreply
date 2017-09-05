const invitePage = "https://www.linkedin.com/mynetwork/invitation-manager";
const messagePage = "https://www.linkedin.com/messaging/compose/?after=mynetwork";


function match(tab, page) {
  return tab.url.includes(page);
};

function goTo(Linkedin) {
  chrome.tabs.create({ url: Linkedin });
};


chrome.browserAction.onClicked.addListener((tab) => {

  // if (!match(tab, invitePage) || !match(tab, messagePage)) {
  //   goTo(invitePage);
  // };

  if (match(tab, invitePage)) {
    chrome.tabs.executeScript(tab.id, {
      file: 'scripts/accept-invite.js'
    });
   }

  if (match(tab, messagePage)) {
    chrome.tabs.executeScript(tab.id, {
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
