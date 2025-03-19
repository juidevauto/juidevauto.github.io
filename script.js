function toggleSection(sectionId) {
    // Hide all sections
    let sections = document.querySelectorAll(".section");
    sections.forEach(section => section.style.display = "none");

    // Show the selected section
    let selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = "block";
}
