// _______________________________________
// NAVIGATING TO MESSAGE PAGE
// _______________________________________

// Extract the name of the dude (in the recipient input)
const name = document.querySelector(".msg-connections-lookup__recipient-name").innerText
const firstName = name.split[0]
const lastName = name.split[-1]


// Fill the text area with given text
document.querySelector("textarea.msg-compose-form__message-text").value = "Text to paste"


// Send the message
document.querySelector("button.msg-compose-form__send-button").click()
