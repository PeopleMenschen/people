
 // Get all the accordion buttons
 var acc = document.getElementsByClassName("accordion");

 // Add click event listeners to each accordion button
 for (var i = 0; i < acc.length; i++) {
   acc[i].addEventListener("click", function() {
     // Toggle the active class on the clicked button
     this.classList.toggle("active");

     // Get the panel associated with the button
     var panel = this.nextElementSibling;

     // If the panel is currently open, close it. Otherwise, open it.
     if (panel.style.maxHeight) {
       panel.style.maxHeight = null;
     } else {
       // Close all panels first
       for (var j = 0; j < acc.length; j++) {
         var otherPanel = acc[j].nextElementSibling;
         otherPanel.style.maxHeight = null;
         acc[j].classList.remove("active");
       }
       // Open the clicked panel
       panel.style.maxHeight = panel.scrollHeight + "px";
     }
   });
 }

// Scroll to top button
 var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  // Show the button when user scrolls down 20px from the top of the document
  window.onscroll = function() {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  }
  // When the button is clicked, scroll to the top of the document
  scrollToTopBtn.addEventListener("click", function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  });
