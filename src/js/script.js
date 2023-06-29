// callback popup

const callbackButton = document.querySelector(".header__contact")
const callbackPopup = document.querySelector(".callback")
const callbackPopupClose = document.querySelector(".callback__close-btn")

callbackButton.addEventListener("click", function () {
 callbackPopup.classList.add("callback--active")
 document.body.classList.add("no-scroll")
 document.callbackForm.username.focus()
})
callbackButton.addEventListener("keydown", function (e) {
 if (e.keyCode === 13) {
  callbackPopup.classList.add("callback--active")
  document.body.classList.add("no-scroll")
  document.callbackForm.username.focus()
 }
})
callbackPopupClose.addEventListener("click", function () {
 callbackPopup.classList.remove("callback--active")
 document.body.classList.remove("no-scroll")
})
window.addEventListener("keydown", function (e) {
 if (e.keyCode === 27) {
  callbackPopup.classList.remove("callback--active")
  document.body.classList.remove("no-scroll")
 }
})
window.addEventListener("click", function (e) {
 if (e.target === callbackPopup) {
  callbackPopup.classList.remove("callback--active")
  document.body.classList.remove("no-scroll")
 }
})


//
// menu toggle
//

const navBtn = document.querySelector(".header__toggle")

navBtn.addEventListener("click", function () {
 navBtn.classList.toggle("header__toggle--active")
})

window.addEventListener("scroll", function () {
 navBtn.classList.remove("header__toggle--active")
})
