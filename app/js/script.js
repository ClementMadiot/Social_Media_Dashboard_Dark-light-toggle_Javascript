const radioBtn = document.querySelectorAll('.toggle_wrapper input')
for (let i = 0; i < radioBtn.length; i++) {
radioBtn[i].addEventListener('click', event =>{
  console.log('click')
  document.getElementById('dark').checked
    ? (document.querySelector('body').classList = 'dark')
    : (document.querySelector('body').classList = 'light')
})
}

