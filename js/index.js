$(function () 
{
    $('#logo').hover(function()//on over
    {
        $('#logo').attr('src', 'images/home.png')
    },
    function()//on out
    { 
        $('#logo').attr('src', 'images/Fitz-Symbol.jpg');
    })
});