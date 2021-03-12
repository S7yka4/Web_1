
function test1()
{
var request = new XMLHttpRequest();
    var url = "https://rickandmortyapi.com/api/character/";
 
    console.log(url + document.getElementById("Input").value);
    
    request.open('GET', url + document.getElementById("Input").value);
    request.responseType = 'json';
    request.send();


    request.onload = function()
    {

    	console.log(request.response); 

    	var Result = request.response;
    	
		document.getElementById("Image").src = Result.image;
        document.getElementById("Name").innerHTML = Result.name;
		document.getElementById("Species").innerHTML = Result.species;
		document.getElementById("Status").innerHTML = Result.status;
		document.getElementById("Gender").innerHTML = Result.gender;
		if (document.getElementById("Name").innerHTML!="undefined")
			document.getElementById("Card").style.display="block"
		else
		{
			document.getElementById("Card").style.display="none"
			document.getElementById("ErrorMessage").style.display="inline"
		}
        //randColor();
   
    }

//document.getElementById("display").style.display = "inline";
//document.getElementById("hello").style.display = "inline";
}

