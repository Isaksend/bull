document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".links a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            
            const targetId = this.getAttribute("href").substring(1); // Remove the "#" character
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth" // Add a smooth scrolling behavior
                });
            }
        });
    });
});
window.addEventListener("scroll", function() {
    const blocks = document.querySelectorAll(".scroll-triggered-animation");
    const screenHeight = window.innerHeight;
  
    blocks.forEach(function(block) {
      const blockTop = block.getBoundingClientRect().top;
      
      if (blockTop < screenHeight * 1) {
        block.classList.add("animate");
      }
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    const textToCopy = document.getElementById("textToCopy");
    const copyButton = document.getElementById("copyButton");
  
    copyButton.addEventListener("click", function() {
      // Create a textarea element to temporarily hold the text
      const textarea = document.createElement("textarea");
      textarea.value = textToCopy.textContent;
  
      // Append the textarea to the document
      document.body.appendChild(textarea);
  
      // Select the text within the textarea
      textarea.select();
  
      // Copy the selected text to the clipboard
      document.execCommand("copy");
  
      // Remove the textarea
      document.body.removeChild(textarea);
  
      // Provide feedback to the user (optional)
      copyButton.textContent = "Copied!";
    });
  });
  

  // Add a click event listener to the button
  document.addEventListener("DOMContentLoaded", function() {
    const inf = document.querySelector(".inf");
    const layer = document.querySelector(".layer");
    const links = document.querySelector(".links");
    const toggleButton = document.querySelector(".burger");
  toggleButton.addEventListener("click", function() {
    // Toggle the visibility of block2
    const currentSrc = toggleButton.getAttribute("src");
    if (currentSrc == "src/burger.png") {
        links.style.display = "flex";
        layer.style.display = "block";
        inf.style.display = "none";
        toggleButton.setAttribute("src", "src/close.png");
    } else {
        links.style.display = "none";
        layer.style.display = "none";
        inf.style.display = "block";
        toggleButton.setAttribute("src", "src/burger.png");
    }
  });
});