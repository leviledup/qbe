const canvas = document.getElementById('thumbCanvas');
const ctx = canvas.getContext('2d');
const imageLoader = document.getElementById('imageLoader');

function showEditor() {
    document.getElementById('landingPage').style.display = 'none';
    document.getElementById('editorPage').style.display = 'flex';
}

imageLoader.addEventListener('change', (e) => {
    const reader = new FileReader();
    reader.onload = (event) => {
        const img = new Image();
        img.onload = () => { ctx.drawImage(img, 0, 0, 1280, 720); };
        img.src = event.target.result;
    };
    reader.readAsDataURL(e.target.files[0]);
});

function addText() {
    const text = document.getElementById('textInput').value;
    ctx.fillStyle = "white";
    ctx.strokeStyle = "#89CFF0";
    ctx.lineWidth = 15;
    ctx.font = "bold 120px Inter";
    ctx.textAlign = "center";
    ctx.strokeText(text, 640, 360);
    ctx.fillText(text, 640, 360);
}

function downloadImage() {
    const link = document.createElement('a');
    link.download = 'qbe-thumb.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
}
