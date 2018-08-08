 var tittle = document.createElement("h4");
 tittle.innerText = "Our Inventory";
 document.body.appendChild(tittle);
 tittle.style.textAlign = "center"

 function shoes(image,name,color,size,price){
 	this.image = image;
 	this.name = name;
 	this.color = color;
 	this.size = size;
 	this.price = price;
    
    var div = document.createElement("div");
 	var image = document.createElement("img");
 	var name = document.createElement("h6");
 	var color = document.createElement("p");
 	var size = document.createElement("p");
 	var price = document.createElement("p");

 	image.src = this.image;
 	name.innerText = this.name;
 	color.innerText = "color:"+this.color;
 	size.innerText = "size:"+this.size;
 	price.innerText =  "$" + this.price;


   div.className = "col-4 bg-secondary text-white text m-3" 
   div.style.boxshadow = "-10px 15px 10px black";
   div.style.display = "inline-block"


 	div.appendChild(image);
 	div.appendChild(name);
 	div.appendChild(color);
 	div.appendChild(size);
 	div.appendChild(price);
 	document.body.appendChild(div);

 	var colors = ["red","blue","green"];

 	for(var i = 0 ; i < colors.length; i++){
 		if(this.color == colors[i]){
 			name.style.color = colors[i]
 		}
 	}



 }

 new shoes("img/redT.jpg","Timberland classic jacquar","red","10.5",139.99)
 new shoes("img/blueT.jpg","Nubuck Leather Timberland Men","blue","9",79.99)