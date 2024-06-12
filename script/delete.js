document.addEventListener('DOMContentLoaded', function() {
    const FORM = document.getElementById("deleteForm");
    FORM.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Form submitted");
        window.location.pathname = "goodbye.html";
    })
});