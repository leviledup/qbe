const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeDrawer');
const drawer = document.getElementById('toolDrawer');

menuBtn.addEventListener('click', () => drawer.classList.add('active'));
closeBtn.addEventListener('click', () => drawer.classList.remove('active'));

function openTool(toolName) {
    console.log("Opening tool: " + toolName);
    // future logic: This will swap the content of the drawer 
    // to show the specific tool interface.
    alert("Opening " + toolName + " tool...");
}
