
$(document).ready(function(){
	
	$("#buscar").click(function(){
		
		var cadena="";
		
		$.ajax({
			
			url: 'https://demo4010019.mockable.io/products',
			type: 'GET',
			async: true,
			dataType: 'json',
			success: function (data){
				for(var i=0; i<data.length; i++){
					cadena += "<div class='cuadro'>";
					cadena += "<h2>"+ data[i].name + "</h2>";
					cadena += "<img src='"+ data[i].url + "' width='200px' heigth='200px'/>";
					cadena += "<h1>"+ data[i].price + "</h1>";
					cadena += "<input type='button' id='ver' value='VERMAS'>";
					cadena += "</div>";
									
				
				}
				
				$("#producto").html(cadena);			
			
			} 	
			
		});	
	
	});


});