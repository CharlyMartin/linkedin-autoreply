Start on LinkedIn Home Page

if ul.mn-invitation-list is null, then it means all the invitations have been
accepted, so stop. If not, starts.


//Open /mynetwork on a new tab || /mynetwork/invitation-manager/
"ul.mn-invitation-list":first-child -> first list item
Click on accept "button[data-control-name="accept"]"

//Button of the first item of the list
var acceptBtn = document.querySelector('ul.mn-invitation-list > li:first-child button[data-control-name="accept"]')
acceptBtn.click();
// Pop-up container
// div#ember887.ember-view

// Card with name and button
#ember1610 > div > div

// Button "Message" (thing to click)
#ember1610 > div > div > p > button

_______________________________________
NAVIGATING TO MESSAGE PAGE
_______________________________________

// Extract the name of the dude (in the recipient input)
const name = document.querySelector(".msg-connections-lookup__recipient-name").innerText
const firstName = name.split[0]
const lastName = name.split[-1]


// Fill the text area with given text
document.querySelector("textarea.msg-compose-form__message-text").value = "Text to paste"


// Send the message
document.querySelector("button.msg-compose-form__send-button").click()
