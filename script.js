const lid = document.querySelector('.top');
const arm = document.querySelector('#right-arm');

function swing() {
  if (!lid.classList.contains('open')) {
    lid.classList.add('open')
    setTimeout(move => {
      arm.style.transform = "rotate(-120deg)"
    }, 700)
  } else {
    lid.classList.remove('open')
    arm.style.transform = "rotate(-45deg)"

  }
}
