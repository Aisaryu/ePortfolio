// Smooth Scroll to Section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  }
  
  // Form Validation
  document.getElementById("contact-form").addEventListener("submit", function (event) {
    const email = document.querySelector('input[name="email"]').value;
    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      event.preventDefault();
    }
  });
  
  