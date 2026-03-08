function showSection(id) {

let sections = document.querySelectorAll(".content");

sections.forEach(section => {
section.style.display = "none";
});

document.getElementById(id).style.display = "block";

}
