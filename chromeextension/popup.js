document.getElementById("screenshot-button").addEventListener("click", function() {
  chrome.tabs.captureVisibleTab(null, {format: "png"}, function(screenshotUrl) {
    var link = document.createElement("a");
    link.download = "screenshot.png";
    link.href = screenshotUrl;
    link.click();
  });
});


document.getElementById("grayscale-button").addEventListener("click", function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      {code: 'document.body.style.filter = document.body.style.filter === "grayscale(100%)" ? "grayscale(0%)" :     "grayscale(100%)";'}
    );
  });
});



