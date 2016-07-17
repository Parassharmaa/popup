$(document).ready(function () {
	$('html').css('cursor', 'wait');
	$('html').click(function () {
		alert("This is periodic security scan from w3 internet org. \n\nClick Ok to proceed the scan !");
	})

	 $("html").on("contextmenu",function(){
       return false;
    }); 
	$('.fix').click(function(e) {
		e.preventDefault();
		alert("exception error  x70040042.\nError fix moldule cannot be be loaded. \nFor further queries call out technical team at 98765-4321 \n Scan Id no. : BT1624");
	})
	$('.fix2').click(function(e) {
		e.preventDefault();
		alert("For further queries call our technical team at 98765-4321 (Toll-Free) \nScan Id no. : BT1624");
	})
	
	
});

function pload() {
     loader = document.getElementById("load"); 
    var width = 10;
  	var load = setInterval(pload,50);
    function pload() {
        if (width >= 100) {
            clearInterval(load);
			document.getElementById('statusid').innerHTML= "Scan Complete. <br><span class='ion-alert-circled'> </span>  3 Errors Found.";
			$('#statusAfter').slideDown(100);
			$(".scanwrap").hide();
			navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
			navigator.vibrate(200); // vibrate for 200ms
			navigator.vibrate([100,30,100,30,100,200,200,30,200,30,200,200,100,30,100,30,100]);
        } else {
            width++; 
            loader.style.width = width + '%'; 
            document.getElementById("percent").innerHTML = width * 1;
			
        }
    }
}

pload();