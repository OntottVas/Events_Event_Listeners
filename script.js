$('#first').click (() => {
    console.log('Yeah, you clicked on IT!');
});

$('#second').click(() => {
    $('#first').text('Clicked on the second button');
});

$('#third').click(() => {
    $('#first').css('background-color', 'green'),
    $('#second').css('background-color', 'blue'),
    $('#third').css('background-color', 'yellow');
});