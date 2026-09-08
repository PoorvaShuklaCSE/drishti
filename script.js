// DRISHTI WEBSITE JAVASCRIPT


// Navigation button interaction

const navButtons = document.querySelectorAll(".nav-item");

navButtons.forEach((button) => {

    button.addEventListener("click", function () {

        navButtons.forEach((item) => {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});


// Refresh data button

const refreshButton = document.getElementById("refreshButton");

refreshButton.addEventListener("click", function () {

    this.innerHTML = "✓ Data Updated";

    setTimeout(() => {
        this.innerHTML = "↻ Refresh Data";
    }, 1500);

});


// View Road button

const viewRoadButton = document.getElementById("viewRoadButton");

viewRoadButton.addEventListener("click", function () {

    alert(
        "Sector 18 Main Road\n\n" +
        "Safety Score: 34/100\n" +
        "Risk Level: HIGH\n" +
        "Potholes: 17\n" +
        "Waterlogging: 3\n\n" +
        "Recommended Speed: 30 km/h"
    );

});


// Console message

console.log("DRISHTI Road Intelligence System Loaded");
