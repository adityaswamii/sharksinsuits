
document.addEventListener('DOMContentLoaded', () => {

// DISCLAIMER DIALOG

    
    // const discDialogButton= document.getElementById('disclaimerButton');
    // const discDialog = document.getElementById('disclaimerDialog');
    // const discDialogClose = document.getElementById('disclaimerClose');

    // discDialogButton.addEventListener('click', () => {
    //   discDialog.classList.add(' active');
    // });
    // discDialogClose.addEventListener('click', () => {
    //   discDialog.classList.remove(' active');
    // });

// DARK-MODE

    var x=1;
    const checkbox= document.getElementById('dark-mode-checkbox');
    const elementSideBar = document.getElementById('sidebar');
    const elementHeader= document.getElementById('header');
    const elementFooter= document.getElementById('footer');
    const elementContent = document.getElementById('content');
    const elementSideBarClose = document.getElementById('sidebar-button-close-img');
    const elementSideBarOpen = document.getElementById('sidebar-button-open-img');

    checkbox.addEventListener('change', () => {
      document.body.classList.toggle('darkmode');
      elementSideBar.classList.toggle('darkmode');
      elementHeader.classList.toggle('dark-mode');
      elementFooter.classList.toggle('dark-mode');
      elementContent.classList.toggle('dark-mode');
      x++;
      if (x%2==0) {
        elementSideBarClose.src="/images/buttonw.png";
        elementSideBarOpen.src="/images/button2w.png";
      }
      else {
        elementSideBarClose.src="/images/button.png";
        elementSideBarOpen.src="/images/button2.png";        
      }
    });


// SIDEBAR

    const sideBar= document.getElementById('sidebar');
    const sideBarOpen = document.getElementById('sidebar-button-open');
    const sideBarClose = document.getElementById('sidebar-button-close');

    sideBarOpen.addEventListener('click', () => {
      sideBar.classList.toggle('collapse');
    });
    sideBarClose.addEventListener('click', () => {
      sideBar.classList.toggle('collapse');
    });

    
// CAROUSEL

    var slideIndex = 0;
    showSlides();
    
    function showSlides() {
      var i;
      var slides = document.getElementsByClassName('mySlides');
      var dots = document.getElementsByClassName('dot');
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' activecar', '');
      }
      slides[slideIndex-1].style.display = 'block';  
      dots[slideIndex-1].className += ' activecar';
      setTimeout(showSlides, 4000);
    }

});
