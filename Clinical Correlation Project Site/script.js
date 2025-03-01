document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a");
    const toggle = document.createElement("button");
    toggle.innerText = "Toggle Dark Mode";
    toggle.style.margin = "10px";
    toggle.classList.add("dark-toggle");

    // Append the button only if it doesn't exist already
    if (!document.querySelector(".dark-toggle")) {
        document.querySelector("nav").appendChild(toggle);
    }

    // Function to set dark mode based on localStorage
    function applyDarkMode() {
        if (localStorage.getItem("darkMode") === "enabled") {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }

    // Apply dark mode immediately on page load
    applyDarkMode();

    // Toggle Dark Mode on button click
    toggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        // Store the preference in localStorage
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
    });

    // Smooth Page Transitions
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            let target = this.getAttribute("href");

            document.body.style.animation = "fadeOut 0.5s forwards";

            setTimeout(() => {
                window.location.href = target;
            }, 500);
        });
    });

    document.body.style.animation = "fadeIn 1s forwards";
});
