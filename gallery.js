const toggleButtons = document.querySelectorAll('.toggle-btn');

toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling; 
    content.classList.toggle('visible'); 
  });
}); // second task


//task cetri
document.addEventListener('DOMContentLoaded', function() {
  const accordions = document.querySelectorAll('.accordion');
  
  accordions.forEach(function(accordion) {
    accordion.addEventListener('click', function() {
      const panel = this.nextElementSibling;
      

      if (panel.style.display === 'block') {
        panel.style.display = 'none';
      } else {
        panel.style.display = 'block';
      }


      accordions.forEach(function(otherAccordion) {
        const otherPanel = otherAccordion.nextElementSibling;
        if (otherAccordion !== accordion && otherPanel.style.display === 'block') {
          otherPanel.style.display = 'none';
        }
      });
    });
  });
}); 
