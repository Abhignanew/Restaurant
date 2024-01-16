let menubar = document.querySelector('#menu-bar')
let nav = document.querySelector('.navbar')


menubar.onclick = () =>{
    menubar.classList.toggle('fa-times')
    nav.classList.toggle('active')
  
    
}

document.addEventListener("DOMContentLoaded", function() {
  const ratingInputs = document.querySelectorAll('input[name="rating"]');
  const feedbackMessage = document.getElementById('feedbackMessage');
  
  ratingInputs.forEach(input => {
      input.addEventListener('change', function() {
          const selectedRating = this.value;
          feedbackMessage.textContent = `You rated ${selectedRating} star(s),Thank you!!.`;
      });
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const allBranches = document.querySelectorAll('.branch');

  allBranches.forEach(branch => {
    branch.addEventListener('click', function() {
      const randomMovement = (Math.random() - 0.5) * 100; // Random value for movement
      this.style.transform = `translate(${randomMovement}px, -5px)`;
      setTimeout(() => {
        this.style.transform = 'translate(0, -5px)';
      }, 1000); // Reset the movement after 1 second
    });
  });
});
document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();
  // Add your form submission logic here
  alert('Form submitted!');
});





const sr = ScrollReveal ({
    distance : '45px',
    duration : 2700,
    reset : true,
  })

  sr.reveal('.myimageabout',{ delay:350, origin:'left' })
  sr.reveal('.about-text-content',{ delay:350, origin:'right' })
  sr.reveal('.home-image',{ delay:350, origin:'left' })
  sr.reveal('.home-text-content',{ delay:350, origin:'right' })

  sr.reveal('.quality-content',{ delay:350, origin:'left' })
  sr.reveal('.qulity-image',{ delay:350, origin:'right' })
  sr.reveal('.gallery-image',{ delay:350, origin:'top' })
  sr.reveal('.menu-food-content',{ delay:350, origin:'top' })
  sr.reveal('.menu-food-text',{ delay:350, origin:'bottom' })
  sr.reveal('.food-main-content',{ delay:350, origin:'bottom' })
  sr.reveal('.before',{ delay:350, origin:'bottom' })
  sr.reveal('.footer-logo',{ delay:350, origin:'bottom' })
  
  






















































// let menubar = document.querySelector('#menubar');
// let mynav = document.querySelector('.navbar');



// menubar.onclick = () =>{
//     menubar.classList.toggle('fa-times')
//     mynav.classList.toggle('active')
// }

// document.querySelector('#loginbtn').onclick = () =>{
//     document.querySelector('.login-form').classList.toggle('active');
//   }
//   document.querySelector('#closeloginform').onclick = () =>{
//     document.querySelector('.login-form').classList.remove('active');
//   }