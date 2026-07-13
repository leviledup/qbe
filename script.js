/*
 * Project: Qbe
 * Copyright (c) 2026 leviledup
 * This project is licensed under the GNU GPLv3.
 */

const canvas = document.getElementById('thumbCanvas');
const ctx = canvas.getContext('2d');
const imageLoader = document.getElementById('imageLoader');

imageLoader.addEventListener('change', (e) => {
    const reader = new FileReader();
    reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        };
        img.src = event.target.result;
    };
    reader.readAsDataURL(e.target.files[0]);
});

function addText() {
    const text = document.getElementById('textInput').value;
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 10;
    ctx.font = "bold 100px sans-serif";
    ctx.textAlign = "center";
    
    ctx.strokeText(text, canvas.width / 2, canvas.height / 2);
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);
}

function downloadImage() {
    const link = document.createElement('a');
    link.download = 'qbe-thumbnail.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
}
