//Initialize
$(document).ready(function(){

	prettyPrint();

	$("nav select").change(function() {
	  window.location = $(this).find("option:selected").val();
	});

	//Other stuff
	var oCon = document.getElementById('mcon');
	if(oCon ){
		var oLink = document.createElement('a');
		var oText = document.createTextNode("My email.");
		var sParts = ['ma','ilto:wie','ringen','@gm','ail.com'];
		oLink.href = sParts[0]+sParts[1]+sParts[2]+sParts[3]+sParts[4];
		oCon.appendChild(oLink);
		oLink.appendChild(oText);
	}
});