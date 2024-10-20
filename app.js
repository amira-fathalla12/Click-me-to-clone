function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.getElementById('originalDiv').addEventListener('click', function() {
  
    let newDiv = this.cloneNode(true);
    newDiv.style.backgroundColor = getRandomColor();
    document.body.appendChild(newDiv);
});