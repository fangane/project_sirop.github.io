

var preloader = document.getElementById("loading");
	function myFunction(){
		preloader.style.display = 'none';
	};

	$(document).ready(function(){
		setTimeout(function(){
			$('#popup').css('display','block'); }, 3000);
	
	});

	
	$('.close').click(function() {
		$('#popup').css('display','none');	
	});

let togg1 = document.getElementById("togg1");
let d1 = document.getElementById("d1");

function togg(){
  if(getComputedStyle(d1).display != "none"){
    d1.style.display = "none";
  } else {
    d1.style.display = "block";
  }
};
togg1.onclick = togg;


