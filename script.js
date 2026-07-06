// Welcome message
console.log("Welcome to AWS Elastic Beanstalk!");

// Run when the page is fully loaded
window.onload = function () {

    // Change the browser tab title
    document.title = "AWS Elastic Beanstalk Demo";

    // Get the heading element
    const heading = document.querySelector("h1");

    if (heading) {

        // Change heading color
        heading.style.color = "#FFFFFF";

        // Mouse hover effect
        heading.addEventListener("mouseover", function () {
            heading.style.color = "#FFD700";
        });

        // Mouse out effect
        heading.addEventListener("mouseout", function () {
            heading.style.color = "#FFFFFF";
        });

        // Click event
        heading.addEventListener("click", function () {
            alert("Welcome to AWS Elastic Beanstalk!");
        });
    }

    console.log("Application Loaded Successfully");
};