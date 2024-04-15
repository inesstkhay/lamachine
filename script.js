// Function to save changes to GitHub
function saveChanges() {
    var title = document.getElementById("editableTitle").innerText;
    var content = document.getElementById("editableContent").innerText;

    // Save drawing as image data
    var canvas = document.getElementById('drawingCanvas');
    var drawingData = canvas.toDataURL();

    // Call GitHub API to commit changes
    // This part would typically require authentication and authorization
    // For simplicity, I'll omit those steps here

    // Example GitHub API endpoint
    var githubEndpoint = 'https://api.github.com/repos/inesstkhay/lamachine/contents/index.html';

    // Example commit data
    var commitData = {
        message: 'Update content via web page',
        content: btoa(unescape(encodeURIComponent('<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<title>Editable Web Page with Drawing</title>\n</head>\n<body>\n<h1>' + title + '</h1>\n<div>\n<p>' + content + '</p>\n</div>\n<img src="' + drawingData + '" alt="Drawing">\n</body>\n</html>'))),
        sha: '164e356f996a56101cc2b13b21580ed296ff2fa8' // Replace with the current SHA of the file
    };

    // Send a PUT request to update the file
    fetch(githubEndpoint, {
        method: 'PUT',
        headers: {
            'Authorization': 'token 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',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(commitData)
    }).then(response => {
        if (response.ok) {
            alert('Changes saved successfully!');
        } else {
            alert('Failed to save changes.');
        }
    }).catch(error => {
        console.error('Error:', error);
    });
}

// JavaScript for drawing on canvas
var canvas = document.getElementById('drawingCanvas');
var ctx = canvas.getContext('2d');
var isDrawing = false;

canvas.addEventListener('mousedown', function (e) {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
});

canvas.addEventListener('mousemove', function (e) {
    if (isDrawing) {
        ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        ctx.stroke();
    }
});

canvas.addEventListener('mouseup', function () {
    isDrawing = false;
});

canvas.addEventListener('mouseleave', function () {
    isDrawing = false;
});