JAVA
// Modal functionality
const modal = document.getElementById("projectModal");
const closeModal = document.querySelector(".close");
const projectImage = document.getElementById("projectImage");
const projectDescription = document.getElementById("projectDescription");

// Close the modal
closeModal.onclick = function() {
    modal.style.display = "none";
}

// When user clicks outside the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Add event listeners to each "View Project" link
document.querySelectorAll('.view-project').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const project = event.target.dataset.project;

        // Set the content based on the clicked project
        if (project === "project1") {
            projectImage.src = "path_to_image_project1.jpg"; // Replace with actual image path
            projectDescription.innerText = "This is a brief description of Project One.";
        } else if (project === "project2") {
            projectImage.src = "path_to_image_project2.jpg";
            projectDescription.innerText = "This is a brief description of Project Two.";
        } else if (project === "project3") {
            projectImage.src = "path_to_image_project3.jpg";
            projectDescription.innerText = "This is a brief description of Project Three.";
        }

        modal.style.display = "flex"; // Show the modal
    });
});