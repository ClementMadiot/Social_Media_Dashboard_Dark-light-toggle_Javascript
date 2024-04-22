/* 
The first time the page is loaded, the color mode set on the preference 
is used and set as 'default' in the local storage. 
Changing the default preferences works the same way as changing the 
color mode using the buttons, if the page is loaded.
When the page is reloaded, whatever is the value set on the local storage
has precedence over the values in the preference. If the preference
changed after the page was visited - and the page is not loaded - 
the last value saved on the local storage is loaded. 
*/

const darkButton = document.getElementById('dark')
const lightButton = document.getElementById('light')

// Add class from color.scss
const setDarkMode = () => {
  document.querySelector('body').classList = 'dark'
}
const setLightMode = () => {
  document.querySelector('body').classList = 'light'
}

//Get the color mode at localStorage
const colorModeFromLocalStorage = () => {
  return localStorage.getItem('colorMode')
}

// Check window mode color
const colorModeFromWindow = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light' // If preference is set or does not match anything (light is default)
}

// Toggle button on click
const setColorMode = () => {
  if (localStorage.getItem('colorMode') == 'dark') {
    setDarkMode()
    darkButton.click()
  } else if (localStorage.getItem('colorMode') == 'light') {
    setLightMode()
    lightButton.click()
  }
}

setColorMode()

// when the inputs are clicked, check which radio button is checked and change the color
const radioBtn = document.querySelectorAll('.toggle_wrapper input')
for (let i = 0; i < radioBtn.length; i++) {
  radioBtn[i].addEventListener('click', (e) => {
    if (darkButton.checked) {
      setDarkMode()
      localStorage.setItem('colorMode', 'dark')
    } else {
      localStorage.setItem('colorMode', 'light')
      setLightMode()
    }
  })
}

// when the prefers-color-scheme changes, this event will be emitted
// event reflects the media query, if it matches, the new color is dark, else it is light
window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', (event) => {
    event.matches ? darkButton.click() : lightButton.click()
  })

// Load the right color on startup - localStorage has precedence
loadAndUpdateColor()
