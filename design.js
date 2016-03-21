var h1=0;
var h2=0;
var h3=0;
var h4=0;
var i1;
var i2;

$(document).ready(function(){
	$("#but1").hover(function(){
		document.getElementById("but1").style.top = "16%";
		document.getElementById("but1").style.left = "81%";
    }, function(){
		document.getElementById("but1").style.top = "15%";
		document.getElementById("but1").style.left = "80%";
	});
	$("#but2").hover(function(){
		document.getElementById("but2").style.top = "24%";
		document.getElementById("but2").style.left = "81%";
	}, function(){
		document.getElementById("but2").style.top = "23%";
		document.getElementById("but2").style.left = "80%";
	});
	$("#but3").hover(function(){
		document.getElementById("but3").style.top = "32%";
		document.getElementById("but3").style.left = "81%";
	}, function(){
		document.getElementById("but3").style.top = "31%";
		document.getElementById("but3").style.left = "80%";
	});
	
	$("#h1").click(function(){
		if(h1==0){
			document.getElementById("h2").style.backgroundImage = "url('picture/h2.png')"; 
			$("#h2").animate({left: '380px'}); 
			h1=1;
		}else{
			left(2);
			if(h2==1){
				left(3);
				h2=0;
			}
			if(h3==1){
				left(4);
				h3=0;
			}
			if(h4==1){
				left(5);
				h4=0;
			}
			h1=0;
		}
	});
	$("#h2").click(function(){
		if(h2==0){
			document.getElementById("h3").style.backgroundImage = "url('picture/h3.png')"; 
			$("#h3").animate({left: '530px'}); 
			h2=1;
		}else{
			left(3);
			if(h3==1){
				left(4);
				h3=0;
			}
			if(h4==1){
				left(5);
				h4=0;
			}
			h2=0;
		}
	});
	$("#h3").click(function(){
		if(h3==0){
			document.getElementById("h4").style.backgroundImage = "url('picture/h4.png')"; 
			$("#h4").animate({left: '680px'}); 
			h3=1;
		}else{
			left(4);
			if(h4==1){
				left(5);
				h4=0;
			}
			h3=0;
		}
	});
	$("#h4").click(function(){
		if(h4==0){
			document.getElementById("h5").style.backgroundImage = "url('picture/h5.png')"; 
			$("#h5").animate({left: '830px'}); 
			h4=1;
		}else{
			left(5);
			h4=0;
		}
	});
	
	$("#build1").hover(function(){
		document.getElementById("build1").style.backgroundImage = "url(picture/build1.png)"; 
		document.getElementById("fm").style.backgroundImage = "url(picture/fish.png)"; 
	}, function(){
		document.getElementById("build1").style.backgroundImage = "none"; 
	});
	
	$("#build2").hover(function(){
		document.getElementById("build2").style.backgroundImage = "url(picture/build2.png)"; 
		document.getElementById("fm").style.backgroundImage = "url(picture/meat.png)"; 
	}, function(){
		document.getElementById("build2").style.backgroundImage = "none"; 
	});
});
function left(index){
	$("#hide"+index.toString()).animate({width: '120px'});
		i1=index*150+230;
		$("#h"+index.toString()).animate({left: i1+"px"},function(){
			document.getElementById("h"+index.toString()).style.backgroundImage = "none"; 
			i2=index*150-70;
			$("#h"+index.toString()).animate({left: i2+"px"},function(){
				$("#hide"+index.toString()).animate({width: '0'});
		});
	});
}
/*
function sleep(s) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > s){
      break;
    }
  }
}
alert("Hello!");
*/