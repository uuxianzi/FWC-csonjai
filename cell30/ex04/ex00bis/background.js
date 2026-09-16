$(document).ready(function() {
    
    function getRandomColour() {
        const x = '0123456789ABCDEF';
        let color = '#';

        for (let i = 0; i < 6; i++) {
            color += x[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    $('#btn').on('click', function() {
        $('body').css('background-color', getRandomColour());
    });

});