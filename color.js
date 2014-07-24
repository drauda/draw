$(document).ready(function()
{
	console.log("Adding color picker");
    var picker = $("#colorPicker1").tinycolorpicker();

   	picker.bind("change", function(e, color, rgbcolor) {
   		changeColorTo(color);
   	});
});


$('#sendMessage').click(function(e) {
    var $form = $('#tellafriend_form');
    $.post($form.get(0).action, $form.serialize(), function(data){
          //something on success
    })
    $("#tellfriend").fadeToggle('fast');
});

/*function onSave(){
var img =canvas.toDataURL(“image/jpg”);
document.write(‘<img src””+img+ ‘“/>);*/