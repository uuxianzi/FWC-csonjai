$(document).ready(function() {
    const $balloon = $('#balloon');
    const colors = ['red', 'green', 'blue'];
    let colorIndex = 0;
    let currentSize = 200; 

    $balloon.on('click', function() {
        currentSize += 10;

        if (currentSize > 420) {
            currentSize = 200;
        }

        colorIndex = (colorIndex + 1) % colors.length;
        updateBalloon();
    });

    $balloon.on('mouseleave', function() {
        if (currentSize > 200) {
            currentSize -= 5;
            if (currentSize < 200) {
                currentSize = 200;
            }
        }

        colorIndex = (colorIndex - 1 + colors.length) % colors.length;
        updateBalloon();
    });

    function updateBalloon() {
        $balloon.css({
            'width': currentSize + 'px',
            'height': currentSize + 'px',
            'background-color': colors[colorIndex]
        });
    }
});