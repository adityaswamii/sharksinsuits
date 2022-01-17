
document.addEventListener('DOMContentLoaded', () => {

// DARK-MODE

    const checkbox= document.getElementById('dark-mode-checkbox');

    checkbox.addEventListener('change', () => {
      document.body.classList.toggle('dark-mode');
    });


// SIDEBAR

    const sideBar= document.getElementById('sidebar');
    const sideBarOpen = document.getElementById('sidebar-button-open');
    const sideBarClose = document.getElementById('sidebar-button-close');
    const sidebarbutton= document.getElementById('sidebar-checkbox');

    sidebarbutton.addEventListener('change', () => {
      sideBar.classList.toggle('collapse');
    });

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
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" activecar", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " activecar";
      setTimeout(showSlides, 4000);
    }

});
