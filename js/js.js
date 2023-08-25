document.addEventListener("DOMContentLoaded", function () {
  // Reference to the div and the button
  var captureDiv = document.getElementById("Invoice");
  var captureButton = document.getElementById("get");
  var downloadLink = document.getElementById("download-link");
  // Add click event listener to the button
  captureButton.addEventListener("click", function () {
    // Use html2canvas to capture the div
    html2canvas(captureDiv).then(function (canvas) {
      // Convert the canvas to an image URL
      var imgDataUrl = canvas.toDataURL("image/png");
      
    });
  });
});
