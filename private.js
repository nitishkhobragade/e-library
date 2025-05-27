import { wordOne } from './one.js';
    import { wordTwo } from './two.js';

    document.addEventListener("DOMContentLoaded", () => {
        const passwordInput = document.getElementById("passwordInput");
        const toggleBtn = document.getElementById("togglePassword");
        const checkBtn = document.getElementById("checkBtn");
        const superDiv = document.getElementById("superDiv");
        const unlockedDiv = document.getElementById("unlockedDiv");
  
        // Toggle password visibility
        toggleBtn.addEventListener("click", () => {
          if (passwordInput.type === "password") {
            passwordInput.type = "text";
            toggleBtn.textContent = "Hide Password";
          } else {
            passwordInput.type = "password";
            toggleBtn.textContent = "Show Password";
          }
        });
  
        // Password Check
        checkBtn.addEventListener("click", () => {
          const userInput = passwordInput.value.trim();
  
          // Decode the Base64 words
          let decoded1 = "", decoded2 = "";
          try {
            decoded1 = atob(wordOne);
            decoded2 = atob(wordTwo);
          } catch (err) {
            alert("Error decoding password.");
            return;
          }
  
          const actualPassword = `${decoded1} ${decoded2}`;
  
          if (userInput === actualPassword) {
            superDiv.style.display = "none";
            unlockedDiv.style.display = "block";
          } else {
            alert("❌ Wrong password entered.");
          }
        });
      });