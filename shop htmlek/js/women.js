/* Objektum a termékekről */

let termekek = [
	{
		name:"Denim Jeans",
		price:35,
		gender:"women",
		discount:false,
		discount_price:"",
		img:"../kepek/woman kepek/NoiFarmerNadrag.png"
	},
	{
		name:"Knitted Top",
		price:49,
		gender:"women",
		discount:false,
		discount_price:"",
		img:"../kepek/woman kepek/NoiFeherKotottFelso.png"
	},
	{
		name:"White vest",
		price:15,
		gender:"women",
		discount:true,
		discount_price:"26",
		img:"../kepek/woman kepek/NoiFeherMelleny.png"
	},
	{
		name:"White Jeans",
		price:45,
		gender:"women",
		discount:true,
		discount_price:"80",
		img:"../kepek/woman kepek/NoiFeherNadrag.png"
	},
	{
		name:"White Shirt",
		price:35,
		gender:"women",
		discount:false,
		discount_price:"",
		img:"../kepek/woman kepek/NoiFeherPolo.png"
	},
	{
		name:"Flower Dress",
		price:15,
		gender:"women",
		discount:false,
		discount_price:"",
		img:"../kepek/woman kepek/NoiViragosRuha.png"
	}
]

let eredeti_termekek = [
	{
		name:"Denim Jeans",
		price:35,
		gender:"women",
		discount:false,
		discount_price:"",
		img:"../kepek/woman kepek/NoiFarmerNadrag.png"
	},
	{
		name:"Knitted Top",
		price:49,
		gender:"women",
		discount:false,
		discount_price:"",
		img:"../kepek/woman kepek/NoiFeherKotottFelso.png"
	},
	{
		name:"White vest",
		price:15,
		gender:"women",
		discount:true,
		discount_price:"26",
		img:"../kepek/woman kepek/NoiFeherMelleny.png"
	},
	{
		name:"White Jeans",
		price:45,
		gender:"women",
		discount:true,
		discount_price:"80",
		img:"../kepek/woman kepek/NoiFeherNadrag.png"
	},
	{
		name:"White Shirt",
		price:35,
		gender:"women",
		discount:false,
		discount_price:"",
		img:"../kepek/woman kepek/NoiFeherPolo.png"
	},
	{
		name:"Flower Dress",
		price:15,
		gender:"women",
		discount:false,
		discount_price:"",
		img:"../kepek/woman kepek/NoiViragosRuha.png"
	}
]




function Sorting(){

	let def_sort = document.getElementById("def_sorting");
	let def_value = def_sort.value;

	let hightolow = document.getElementById("hightolow");
	let highvalue = hightolow.value;

	let lowtohigh = document.getElementById("lowtohigh");
	let lowvalue = lowtohigh.value;

	let sortingdropdown = document.getElementById("sortingdropdown");
	let sortingdropdownvalue = sortingdropdown.value 


	if(sortingdropdownvalue==1){

		/* Képek */
		document.getElementById("elsocardkep").src=`${eredeti_termekek[0].img}`
		document.getElementById("masodikcardkep").src=`${eredeti_termekek[1].img}`
		document.getElementById("harmadikcardkep").src=`${eredeti_termekek[2].img}`
		document.getElementById("negyedikcardkep").src=`${eredeti_termekek[3].img}`
		document.getElementById("otodikcardkep").src=`${eredeti_termekek[4].img}`
		document.getElementById("hatodikcardkep").src=`${eredeti_termekek[5].img}`

		/* Árak */

		if(eredeti_termekek[0].discount_price==""){
			document.getElementById("elsoar").innerHTML=`$${eredeti_termekek[0].price}.00`
		}
		else{
			document.getElementById("elsoar").innerHTML=`$${eredeti_termekek[0].discount_price}.00 $${eredeti_termekek[0].price}.00`
		}
		if(eredeti_termekek[1].discount_price==""){
			document.getElementById("masodikar").innerHTML=`$${eredeti_termekek[1].price}.00`
		}
		else{
			document.getElementById("masodikar").innerHTML=`$${eredeti_termekek[1].discount_price}.00 $${eredeti_termekek[1].price}.00`
		}
		if(eredeti_termekek[2].discount_price==""){
			document.getElementById("harmadikar").innerHTML=`$${eredeti_termekek[2].price}.00`
		}
		else{
			document.getElementById("harmadikar").innerHTML=`$${eredeti_termekek[2].discount_price}.00 $${eredeti_termekek[2].price}.00`
		}
		if(eredeti_termekek[3].discount_price==""){
			document.getElementById("negyedikar").innerHTML=`$${eredeti_termekek[3].price}.00`
		}
		else{
			document.getElementById("negyedikar").innerHTML=`$${eredeti_termekek[3].discount_price}.00 $${eredeti_termekek[3].price}.00`
		}
		if(eredeti_termekek[4].discount_price==""){
			document.getElementById("otodikar").innerHTML=`$${eredeti_termekek[4].price}.00`
		}
		else{
			document.getElementById("otodikar").innerHTML=`$${eredeti_termekek[4].discount_price}.00 $${eredeti_termekek[4].price}.00`
		}
		if(eredeti_termekek[5].discount_price==""){
			document.getElementById("hatodikar").innerHTML=`$${eredeti_termekek[5].price}.00`
		}
		else{
			document.getElementById("hatodikar").innerHTML=`$${eredeti_termekek[5].discount_price}.00 $${eredeti_termekek[5].price}.00`
		}
		
		
		/*Terméknév*/

		document.getElementById("termeknev1").innerHTML=`${eredeti_termekek[0].name}`
		document.getElementById("termeknev2").innerHTML=`${eredeti_termekek[1].name}`
		document.getElementById("termeknev3").innerHTML=`${eredeti_termekek[2].name}`
		document.getElementById("termeknev4").innerHTML=`${eredeti_termekek[3].name}`
		document.getElementById("termeknev5").innerHTML=`${eredeti_termekek[4].name}`
		document.getElementById("termeknev6").innerHTML=`${eredeti_termekek[5].name}`
		


	}
	else if (sortingdropdownvalue==2){
		termekek.sort((a,b) => b.price - a.price);
		

		/* Képek */
		document.getElementById("elsocardkep").src=`${termekek[0].img}`
		document.getElementById("masodikcardkep").src=`${termekek[1].img}`
		document.getElementById("harmadikcardkep").src=`${termekek[2].img}`
		document.getElementById("negyedikcardkep").src=`${termekek[3].img}`
		document.getElementById("otodikcardkep").src=`${termekek[4].img}`
		document.getElementById("hatodikcardkep").src=`${termekek[5].img}`

		/* Árak */

		if(termekek[0].discount_price==""){
			document.getElementById("elsoar").innerHTML=`$${termekek[0].price}.00`
		}
		else{
			document.getElementById("elsoar").innerHTML=`$${termekek[0].discount_price}.00 $${termekek[0].price}.00`
		}
		if(termekek[1].discount_price==""){
			document.getElementById("masodikar").innerHTML=`$${termekek[1].price}.00`
		}
		else{
			document.getElementById("masodikar").innerHTML=`$${termekek[1].discount_price}.00 $${termekek[1].price}.00`
		}
		if(termekek[2].discount_price==""){
			document.getElementById("harmadikar").innerHTML=`$${termekek[2].price}.00`
		}
		else{
			document.getElementById("harmadikar").innerHTML=`$${termekek[2].discount_price}.00 $${termekek[2].price}.00`
		}
		if(termekek[3].discount_price==""){
			document.getElementById("negyedikar").innerHTML=`$${termekek[3].price}.00`
		}
		else{
			document.getElementById("negyedikar").innerHTML=`$${termekek[3].discount_price}.00 $${termekek[3].price}.00`
		}
		if(termekek[4].discount_price==""){
			document.getElementById("otodikar").innerHTML=`$${termekek[4].price}.00`
		}
		else{
			document.getElementById("otodikar").innerHTML=`$${termekek[4].discount_price}.00 $${termekek[4].price}.00`
		}
		if(termekek[5].discount_price==""){
			document.getElementById("hatodikar").innerHTML=`$${termekek[5].price}.00`
		}
		else{
			document.getElementById("hatodikar").innerHTML=`$${termekek[5].discount_price}.00 $${termekek[5].price}.00`
		}
		
		/*Terméknév*/

		document.getElementById("termeknev1").innerHTML=`${termekek[0].name}`
		document.getElementById("termeknev2").innerHTML=`${termekek[1].name}`
		document.getElementById("termeknev3").innerHTML=`${termekek[2].name}`
		document.getElementById("termeknev4").innerHTML=`${termekek[3].name}`
		document.getElementById("termeknev5").innerHTML=`${termekek[4].name}`
		document.getElementById("termeknev6").innerHTML=`${termekek[5].name}`
		
		

	}

	else if (sortingdropdownvalue==3){
		termekek.sort((a,b) => a.price - b.price);
		


		/* Képek */
		
		document.getElementById("elsocardkep").src=`${termekek[0].img}`
		document.getElementById("masodikcardkep").src=`${termekek[1].img}`
		document.getElementById("harmadikcardkep").src=`${termekek[2].img}`
		document.getElementById("negyedikcardkep").src=`${termekek[3].img}`
		document.getElementById("otodikcardkep").src=`${termekek[4].img}`
		document.getElementById("hatodikcardkep").src=`${termekek[5].img}`

		/* Árak */

		
		if(termekek[0].discount_price==""){
			document.getElementById("elsoar").innerHTML=`$${termekek[0].price}.00`
		}
		else{
			document.getElementById("elsoar").innerHTML=`$${termekek[0].discount_price}.00 $${termekek[0].price}.00`
		}
		if(termekek[1].discount_price==""){
			document.getElementById("masodikar").innerHTML=`$${termekek[1].price}.00`
		}
		else{
			document.getElementById("masodikar").innerHTML=`$${termekek[1].discount_price}.00 $${termekek[1].price}.00`
		}
		if(termekek[2].discount_price==""){
			document.getElementById("harmadikar").innerHTML=`$${termekek[2].price}.00`
		}
		else{
			document.getElementById("harmadikar").innerHTML=`$${termekek[2].discount_price}.00 $${termekek[2].price}.00`
		}
		if(termekek[3].discount_price==""){
			document.getElementById("negyedikar").innerHTML=`$${termekek[3].price}.00`
		}
		else{
			document.getElementById("negyedikar").innerHTML=`$${termekek[3].discount_price}.00 $${termekek[3].price}.00`
		}
		if(termekek[4].discount_price==""){
			document.getElementById("otodikar").innerHTML=`$${termekek[4].price}.00`
		}
		else{
			document.getElementById("otodikar").innerHTML=`$${termekek[4].discount_price}.00 $${termekek[4].price}.00`
		}
		if(termekek[5].discount_price==""){
			document.getElementById("hatodikar").innerHTML=`$${termekek[5].price}.00`
		}
		else{
			document.getElementById("hatodikar").innerHTML=`$${termekek[5].discount_price}.00 $${termekek[5].price}.00`
		}


		/*Terméknév*/

		document.getElementById("termeknev1").innerHTML=`${termekek[0].name}`
		document.getElementById("termeknev2").innerHTML=`${termekek[1].name}`
		document.getElementById("termeknev3").innerHTML=`${termekek[2].name}`
		document.getElementById("termeknev4").innerHTML=`${termekek[3].name}`
		document.getElementById("termeknev5").innerHTML=`${termekek[4].name}`
		document.getElementById("termeknev6").innerHTML=`${termekek[5].name}`

}
}
