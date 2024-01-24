$(document).ready(function() {
    $('#wish-input').keypress(function(e) {
        if (e.which === 13) {
            solidifyWish();
        }
    });
});

function solidifyWish() {
    var wishInput = document.getElementById("wish-input");
    var wishText = document.getElementById("wish-text");
    var enterButton = document.getElementById("enterButton");

    wishText.innerHTML = wishInput.value;
    wishInput.style.display = "none";
    wishText.style.display = "block";
    enterButton.style.display = "none";
    makeDraggable();
}

function makeDraggable() {
    $(".draggable").draggable({
        stop: function (event, ui) {
            checkDrop(ui.helper);
        }
    });
}

function checkDrop(draggableElement) {
    var wellImage = $("#well-image");
    var wellOffset = wellImage.offset();
    var wellWidth = wellImage.width();
    var wellHeight = wellImage.height();

    var draggableOffset = draggableElement.offset();
    var draggableWidth = draggableElement.width();
    var draggableHeight = draggableElement.height();

    if (
        draggableOffset.left >= wellOffset.left &&
        draggableOffset.top >= wellOffset.top &&
        draggableOffset.left + draggableWidth <= wellOffset.left + wellWidth &&
        draggableOffset.top + draggableHeight <= wellOffset.top + wellHeight
    ) {
      
        alert("Wish activated!");
        window.location.href = "https://example.com";
    }

}