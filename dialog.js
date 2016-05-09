$(document).ready(function(){	
	$.ajax({
	    method: "POST",//HTTP method for request
	    url: "dialog.php",
	    dataType: 'text',
	    data: {call: DialogID,actions: "fetchdialog"}
	    }).done(function(data){
		if(data.charAt(0)=="{")
	    {	       	   
	       	DialogSet = data;
			
			
			var para = document.createElement("P");
			var t = document.createTextNode(JSON.parse(DialogSet)[DialogID].Content);
			para.appendChild(t);
			document.getElementById("all").appendChild(para);
			
			/*for(var i = 1;JSON.parse(DialogSet)[DialogID].Next["Next"+i.toString()];i++)//幾個選項就顯示幾個
			{					
				$( "#dia"+i.toString() ).show();
				if(JSON.parse(DialogSet)[DialogID].Next["Next"+i.toString()].Txt!="CONTINUE")document.getElementById("diastring"+i.toString()).innerHTML = ">"+JSON.parse(DialogSet)[DialogID].Next["Next"+i.toString()].Txt;
				else document.getElementById("diastring"+i.toString()).innerHTML = "▼Next▼";
			}*/
	    }
	    else window.alert(data);
	});
});
$("#all").click(function(){
	DialogID = JSON.parse(DialogSet)[DialogID].Next["Next"+index.toString()].ID;
	$.ajax({
	    method: "POST",//HTTP method for request
	    url: "dialog.php",
	    dataType: 'text',
	    data: {call: DialogID,actions: "fetchdialog"}
	    }).done(function(data){
		if(data.charAt(0)=="{")
	    {	       	   
	       	DialogSet = data;
			
			
			var para = document.createElement("P");
			var t = document.createTextNode(JSON.parse(DialogSet)[DialogID].Content);
			para.appendChild(t);
			document.getElementById("all").appendChild(para);
			
			/*for(var i = 1;JSON.parse(DialogSet)[DialogID].Next["Next"+i.toString()];i++)//幾個選項就顯示幾個
			{					
				$( "#dia"+i.toString() ).show();
				if(JSON.parse(DialogSet)[DialogID].Next["Next"+i.toString()].Txt!="CONTINUE")document.getElementById("diastring"+i.toString()).innerHTML = ">"+JSON.parse(DialogSet)[DialogID].Next["Next"+i.toString()].Txt;
				else document.getElementById("diastring"+i.toString()).innerHTML = "▼Next▼";
			}*/
	    }
	    else window.alert(data);
	});
});
   


