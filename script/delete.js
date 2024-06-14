document.addEventListener('DOMContentLoaded', function() {
    const FORM = document.getElementById("deleteForm");
    if(!FORM) return;
    FORM.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Form submitted");
        window.location.pathname = "goodbye.html";
    })
});