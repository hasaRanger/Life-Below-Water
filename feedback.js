function toggleDropdown() {
    var updatesYesButton = document.getElementById('updatesYesButton');
    var dropdown = document.getElementById('dropdown');
    
    // Display the dropdown if "Yes" is checked; hide otherwise.
    if (updatesYesButton.checked){
        dropdown.style.maxHeight = "100px";
        dropdown.style.opacity = "1";
    }
    else{
        dropdown.style.maxHeight = "0";
        dropdown.style.opacity = "0";
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    function toggleUserReturnTable() {
        var userVisitNoButton = document.getElementById('userVisitNoButton');
        var tableContainer = document.getElementById('tableContainer');

        if (!tableContainer) {
            console.error("Error: 'tableContainer' element not found.");
            return;
        }

        if (userVisitNoButton.checked) {
            tableContainer.style.display = "block"; // Ensure it's visible
            setTimeout(() => {
                tableContainer.classList.add("show"); // Apply animation
            }, 10); // Short delay ensures smooth transition
        } else {
            tableContainer.classList.remove("show");
            setTimeout(() => {
                tableContainer.style.display = "none"; // Hide after animation
            }, 500); // Delay matches CSS animation duration
        }
    }

    // Attach event listener to radio button
    var userVisitYesButton = document.getElementById("userVisitYesButton");
    var userVisitNoButton = document.getElementById("userVisitNoButton");

    if (userVisitYesButton && userVisitNoButton) {
        userVisitYesButton.addEventListener("click", toggleUserReturnTable);
        userVisitNoButton.addEventListener("click", toggleUserReturnTable);
    }
});

function toggleOtherTextArea() {
    var OtherCheckbox = document.getElementById('otherCheckBox');
    var otherTextArea = document.getElementById('otherTextArea');
    
    // Display the dropdown if "Yes" is checked; hide otherwise.
    if (OtherCheckbox.checked){
        otherTextArea.style.maxHeight = "100px";
        otherTextArea.style.opacity = "1";
    }
    else{
        otherTextArea.style.maxHeight = "0";
        otherTextArea.style.opacity = "0";
    }
  }