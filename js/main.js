function submit(){
	
	var description=document.getElementById('description').value;
	var title=document.getElementById('name').value;
	var rental_period_unit=document.getElementById('rentalduration').value;
	var price1=document.getElementById('price1').value;
	var price2=document.getElementById('price2').value;
	var price3=document.getElementById('price3').value;
	var security=document.getElementById('security').value;
	var availability=document.getElementById('availability').value;
	var merchant=document.getElementById('merchant').value;
	var coordinates=document.getElementById('latlongval').innerHTML;
	var address=document.getElementById('street_number').value+" "+document.getElementById('route').value;
	var city=document.getElementById('locality').value;
	var state=document.getElementById('administrative_area_level_1').value;
	var country=document.getElementById('country').value;
	var pin=document.getElementById('postal_code').value;
	var image_url=document.getElementById('imgurl').innerHTML;
	var essentials=document.getElementById('essentials').value;
	var wib=document.getElementById('box').value;
	
	var category=document.getElementById("category").innerHTML;
	
	var payload={};
	
				payload["title"]=title;
				payload["description"]=description;
				payload["category"]=category;
				payload["price1"]=price1;
				payload["price2"]=price2;
				payload["price3"]=price3;
				payload["security_deposit"]=security;
				payload["merchant_name"]=merchant;
				payload["image_url"]=image_url;
				payload["location_coordinates"]=coordinates;
				payload["address"]=address;
				payload["city"]=city;
				payload["state"]=state;
				payload["country"]=country;
				payload["pincode"]=pin;
				payload["essentials"]=essentials;
				payload["inthebox"]=wib;
				payload["rental_period_unit"]=rental_period_unit;
				payload["availability"]=availability;
				
	var fields = $('#specstable tr:has(td)').map(function(i, v) {
    
	var $td =  $('td', this);
	
	return $td.eq(1).text()+"----"+$td.eq(2).text()

	}).get();
    
	var jsonData = {};

for(var i=0; i < fields.length; i++) {

	jsonData[fields[i].split('----')[0]]=fields[i].split('----')[1];

	}

var specs=jsonData;
				payload["specs"]=specs;
console.log(payload);
	if(description==""||title==""||rental_period_unit==""||category==""||price1==""||price2==""||price3==""||security==""||availability==""||merchant==""||coordinates==""||address==""||city==""||pin==""||country==""||state==""||essentials==""||wib==""){
	  
	    swal("Oops...", "All fields are necessary!", "error");
		
	}else{
		var url="http://127.0.0.1:8080/svcProject/product/addListing";
	
		var xmlhttp;

		if (window.XMLHttpRequest)
  
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  
  xmlhttp=new XMLHttpRequest();
  
  }

  else
  
  {// code for IE6, IE5
  
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  
  }
 
  xmlhttp.onreadystatechange=function()
  
  {
  
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
		if(xmlhttp.responseText=="success"){
		//	alert("Thanks for your response. We'll get back to you over email right away!")
			 swal("Win", "Details uploaded to the server successfully!", "success");
		}
  
  //document.getElementById("myDiv").innerHTML=xmlhttp.responseText;

  }

  }
 
  xmlhttp.open("POST",url,true);
 xmlhttp.setRequestHeader("Authorization", "Basic YWRtaW46YWRtaW4=");

  xmlhttp.setRequestHeader("Content-type", "application/json");

  xmlhttp.setRequestHeader("Accept", "application/json");
 
  xmlhttp.send(JSON.stringify(payload));

  }
}