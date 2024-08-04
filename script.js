let secondHeader = document.querySelector('.mainNavBar');
window.onscroll = function() {
    if (window.pageYOffset >= 30) {
        secondHeader.classList.add('fixed');
    } else {
        secondHeader.classList.remove('fixed');
    }
  };