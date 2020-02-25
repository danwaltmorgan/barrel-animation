const lid = document.querySelector('.top');
const arm = document.querySelector('#right-arm');
const forearm = document.querySelector("#lower-right-arm");
const trash = document.querySelector("#trash");
const barrel = document.querySelector(".barrel")

function swing() {
  barrel.style.left = "0vw"
  setTimeout(tip => {
    barrel.style.transform = "rotate(0deg)"
  }, 100)
  // setTimeout(tip => {
    // barrel.style.transform = "rotate(0deg)"
  // }, 500)
  if (!lid.classList.contains('open')) {
    setTimeout(open => {
      grabTrash();
      lid.classList.add('open')
    }, 1000)
    setTimeout(move => {
      arm.style.transform = "rotate(-150deg)"
      forearm.style.transform = "rotate(-90deg)"
    }, 1700)

    setTimeout(fall => {
      trash.style.right = "-8vw";
      setTimeout(disapear => {
        trash.style.opacity = "0"
      }, 1000)
    }, 2000)

  } else {
    lid.classList.remove('open')
    arm.style.transform = "rotate(-45deg)"
    forearm.style.transform = "rotate(45deg)"
    trash.style.right = "2vw"
  }
}

function grabTrash() {
  forearm.appendChild(trash)
  trash.style.top = "10vw"
  trash.style.right = "2vw"
}
