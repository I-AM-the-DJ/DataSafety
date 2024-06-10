document.addEventListener('DOMContentLoaded', function() {
    const DELETE_BTN = document.getElementById("deleteButton");
    DELETE_BTN.addEventListener("click", function(event) {
        alert("You clicked the delete button!");
    });
});