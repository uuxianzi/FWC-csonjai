const button = document.getElementById('btn');

function getRandomColour() {
    const x = '0123456789ABCDEF';
    let color = '#';

    for (let i=0; i<6; i++) {
        color += x[Math.floor(Math.random()*16)];
    }
    return color;
}

button.addEventListener('click', function() {
    document.body.style.backgroundColor = getRandomColour();
});