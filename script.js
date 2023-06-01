// Sticky header
window.onscroll = function() {stickyHeader()};
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
function stickyHeader() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  } 
// Mancha
const mancha = document.getElementById("mancha");
document.body.onpointermove = event => {
  const {clientX, clientY} = event;
  mancha.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, {duration: 3000, fill: "forwards"});
}
