// Add a click event listener to the toggle button
document.getElementById("menuToggle").addEventListener("click", function () {
  // Get the sliding menu and the toggle icon
  const menu = document.getElementById("slidingMenu");
  const toggleIcon = this;

  // Toggle the 'active' class on the menu
  menu.classList.toggle("active");

  // Check if the menu is currently active
  const isActive = menu.classList.contains("active");

  // Define styles based on the active state of the menu
  const iconStyles = {
    icon: isActive ? "&#10006;" : "&#9776;", // Change icon based on state
    color: isActive ? "#eeeeee" : "#111111", // Change text color
    backgroundColor: isActive ? "#333333" : "#99a3a3", // Change background color
    position: isActive ? "fixed" : "absolute", // Change position
    defaultColor: isActive ? "#333333" : "#99a3a3", // Default background color
    hoverColor: isActive ? "#444444" : "#788b8b ", // Change hover background color
  };

  // Apply the defined styles to the toggle icon
  toggleIcon.innerHTML = iconStyles.icon; // Update icon
  toggleIcon.style.color = iconStyles.color; // Update text color
  toggleIcon.style.backgroundColor = iconStyles.backgroundColor; // Update background color
  toggleIcon.style.position = iconStyles.position; // Update position
  toggleIcon.style.transition = "background-color 0.3s"; // Smooth transition

  // Add event listener for mouseover to change background color
  toggleIcon.addEventListener("mouseover", function () {
    this.style.backgroundColor = iconStyles.hoverColor; // Change to hover background color
  });

  // Add event listener for mouseout to revert background color
  toggleIcon.addEventListener("mouseout", function () {
    this.style.backgroundColor = iconStyles.defaultColor; // Revert to default background color
  });
});
