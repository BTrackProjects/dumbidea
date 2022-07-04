$('.your-mood').hide()
$('#square-button').click(function(){
    var random = Math.floor(Math.random() * $('.your-mood').length);
    $('.your-mood').hide().eq(random).show();
});
$('.').click(function(){
    $(this).hide();
});