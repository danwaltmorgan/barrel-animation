const lid = document.querySelector('.top');
const arm = document.querySelector('#right-arm');
const forearm = document.querySelector("#lower-right-arm");
const trash = document.querySelector("#trash");
const barrel = document.querySelector(".barrel")

function swing() {
  if (!lid.classList.contains('open')) {
    trash.style.opacity = "1";
    lid.classList.add('open')
    setTimeout(move => {
      arm.style.transform = "rotate(-150deg)"
      forearm.style.transform = "rotate(-90deg)"
    }, 700)

    setTimeout(fall => {
      trash.style.right = "-7vw";
      setTimeout(disapear => {
        trash.style.opacity = "0"
      }, 500)
    }, 1000)
  } else {
    lid.classList.remove('open')
    arm.style.transform = "rotate(-45deg)"
    forearm.style.transform = "rotate(45deg)"
    trash.style.right = "2vw"
  }
}
