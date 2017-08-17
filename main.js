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
