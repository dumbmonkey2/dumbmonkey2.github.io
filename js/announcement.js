document.addEventListener("DOMContentLoaded", function() {
    var announcementBanner = document.querySelector(".announcement-banner");
    var closeButton = document.querySelector(".announcement-banner .close-button");

    closeButton.addEventListener("click", function() {
        announcementBanner.style.display = "none";
    });

    fetch("announcement.txt").then(function(response) {
        return response.text();
    }).then(function(text) {
        announcementBanner.innerHTML = text;
        announcementBanner.style.display = "block";
    }).catch(function(error) {
        console.error("Error fetching announcement:", error);
    });
});