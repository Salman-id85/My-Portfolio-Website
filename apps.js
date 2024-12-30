(function () {
    // Handle button click events to toggle active classes
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            // Remove active-btn class from the previous active button
            document.querySelector(".active-btn").classList.remove("active-btn");
            // Add active-btn class to the clicked button
            this.classList.add("active-btn");
            // Remove active class from the previously active content
            document.querySelector(".active").classList.remove("active");
            // Add active class to the new content
            document.getElementById(button.dataset.id).classList.add("active");
        });
    });

    // Handle theme button click to toggle light mode
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });
})();
