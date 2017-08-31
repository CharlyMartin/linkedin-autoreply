// Start on LinkedIn Home Page

// if ul.mn-invitation-list is null, then it means all the invitations have been
// accepted, so stop. If not, starts.


// //Open /mynetwork on a new tab || /mynetwork/invitation-manager/
// "ul.mn-invitation-list":first-child -> first list item
// Click on accept "button[data-control-name="accept"]"

// //Button of the first item of the list
// var acceptBtn = document.querySelector('ul.mn-invitation-list > li:first-child button[data-control-name="accept"]')
// acceptBtn.click();
// // Pop-up container
// // div#ember887.ember-view

// // Card with name and button
// #ember1610 > div > div

// // Button "Message" (thing to click)
// #ember1610 > div > div > p > button

// #ember1657 > div > div > p > button

// function pending() {
//   if (inviteList) {
//     return true
//   } else {
//     return false
//   }
// };

function init() {
  console.log("Hello world!");
  // Navigate to /mynetwork/invitation-manager/
  // call pending() -> Check if any pending invitations
  // return if no invite
  //
  // inject Accept invite script
  // When message page loaded -> inject second script
  // When back to /mynetwork/invitation-manager/ -> inject Accept invite script again...
};

// chrome.BrowserAction.onClicked.addListener(run)
//
chrome.browserAction.onClicked.addListener(function(tab) {console.log(tab)});
