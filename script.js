const hamburgerButton = document.querySelector(".nav-toggler")
const navigation = document.querySelector("nav")
const switchThemeBtn = document.querySelector('.changeTheme')
let toggleTheme = 0;

switchThemeBtn.addEventListener('click', () => {

  if(toggleTheme === 0){

    document.documentElement.style.setProperty('--ecriture', '#262626');
    document.documentElement.style.setProperty('--background', '#f1f1f1');
    toggleTheme++;
  } else {
    document.documentElement.style.setProperty('--ecriture', '#f1f1f1');
    document.documentElement.style.setProperty('--background', '#262626');
    toggleTheme--;
  }

}
)

hamburgerButton.addEventListener("click", toggleNav)

function toggleNav(){
  hamburgerButton.classList.toggle("active")
  navigation.classList.toggle("active")
}