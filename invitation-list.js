// Variables
const inviteList = document.querySelector('ul.mn-invitation-list')
const acceptBtn = inviteList.querySelector('li:first-child button[data-control-name="accept"]')

// Functions
function pending() {
  if (inviteList) {
    return true
  } else {
    return false
  }
};

function acceptInvite() {
  acceptBtn.click()
};

function run(argument) {
  acceptInvite if pending
}

// Events
document.addEventListener('pageContentLoaded', run)

// ...
