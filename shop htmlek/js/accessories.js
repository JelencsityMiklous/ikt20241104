function megszerezAdat(productSzam) { 
    window.open(`ruhadarab.html?id=${productSzam}`, '_blank'); 
}

/* Objektum a termékekről */

let termekek = [
	{
		name:"Karl Lagerfeld Táska",
		price:85,
		gender:"women",
		discount:false,
		discount_price:"",
		img:"../../kepek/accessories/karl_lagerfeld_taska.png"
	},
	{
		name:"Furla Táska",
		price:290,
		gender:"women",
		discount:true,
		discount_price:"350",
		img:"../../kepek/accessories/furla_taska.png"
	},
	{
		name:"Vanzetti Öv",
		price:153,
		gender:"men",
		discount:false,
		discount_price:"",
		img:"../../kepek/accessories/vanzetti_ov.png"
	},
	{
		name:"Nike Hátitáska",
		price:40,
		gender:"men",
		discount:false,
		discount_price:"",
		img:"../../kepek/accessories/nike_hatitaska.png"
	},
	{
		name:"Expatrie Övtáska",
		price:30,
		gender:"women",
		discount:true,
		discount_price:"",
		img:"../../kepek/accessories/expatrie_ovtaska.png"
	},
	{
		name:"Alpha Industries Sapka",
		price:20,
		gender:"men",
		discount:false,
		discount_price:"35",
		img:"../../kepek/accessories/alpha_industries_sapka.png"
	}
]


let eredeti_termekek = [
	{
		name:"Karl Lagerfeld Táska",
		price:85,
		gender:"women",
		discount:false,
		discount_price:"",
		img:"../../kepek/accessories/karl_lagerfeld_taska.png"
	},
	{
		name:"Furla Táska",
		price:290,
		gender:"women",
		discount:true,
		discount_price:"350",
		img:"../../kepek/accessories/furla_taska.png"
	},
	{
		name:"Vanzetti Öv",
		price:153,
		gender:"men",
		discount:false,
		discount_price:"",
		img:"../../kepek/accessories/vanzetti_ov.png"
	},
	{
		name:"Nike Hátitáska",
		price:40,
		gender:"men",
		discount:false,
		discount_price:"",
		img:"../../kepek/accessories/nike_hatitaska.png"
	},
	{
		name:"Expatrie Övtáska",
		price:30,
		gender:"women",
		discount:true,
		discount_price:"",
		img:"../../kepek/accessories/expatrie_ovtaska.png"
	},
	{
		name:"Alpha Industries Sapka",
		price:20,
		gender:"men",
		discount:false,
		discount_price:"35",
		img:"../../kepek/accessories/alpha_industries_sapka.png"
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
			document.getElementById("elsoar").innerHTML=`<span class="learazott">$${eredeti_termekek[0].discount_price}.00</span> $${eredeti_termekek[0].price}.00`
		}
		if(eredeti_termekek[1].discount_price==""){
			document.getElementById("masodikar").innerHTML=`$${eredeti_termekek[1].price}.00`
		}
		else{
			document.getElementById("masodikar").innerHTML=`<span class="learazott">$${eredeti_termekek[1].discount_price}.00</span> $${eredeti_termekek[1].price}.00`
		}
		if(eredeti_termekek[2].discount_price==""){
			document.getElementById("harmadikar").innerHTML=`$${eredeti_termekek[2].price}.00`
		}
		else{
			document.getElementById("harmadikar").innerHTML=`<span class="learazott">$${eredeti_termekek[2].discount_price}.00</span> $${eredeti_termekek[2].price}.00`
		}
		if(eredeti_termekek[3].discount_price==""){
			document.getElementById("negyedikar").innerHTML=`$${eredeti_termekek[3].price}.00`
		}
		else{
			document.getElementById("negyedikar").innerHTML=`<span class="learazott">$${eredeti_termekek[3].discount_price}.00</span> $${eredeti_termekek[3].price}.00`
		}
		if(eredeti_termekek[4].discount_price==""){
			document.getElementById("otodikar").innerHTML=`$${eredeti_termekek[4].price}.00`
		}
		else{
			document.getElementById("otodikar").innerHTML=`<span class="learazott">$${eredeti_termekek[4].discount_price}.00</span> $${eredeti_termekek[4].price}.00`
		}
		if(eredeti_termekek[5].discount_price==""){
			document.getElementById("hatodikar").innerHTML=`$${eredeti_termekek[5].price}.00`
		}
		else{
			document.getElementById("hatodikar").innerHTML=`<span class="learazott">$${eredeti_termekek[5].discount_price}.00</span> $${eredeti_termekek[5].price}.00`
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
			document.getElementById("elsoar").innerHTML=`<span class="learazott">$${termekek[0].discount_price}.00</span> $${termekek[0].price}.00`
		}
		if(termekek[1].discount_price==""){
			document.getElementById("masodikar").innerHTML=`$${termekek[1].price}.00`
		}
		else{
			document.getElementById("masodikar").innerHTML=`<span class="learazott">$${termekek[1].discount_price}.00</span> $${termekek[1].price}.00`
		}
		if(termekek[2].discount_price==""){
			document.getElementById("harmadikar").innerHTML=`$${termekek[2].price}.00`
		}
		else{
			document.getElementById("harmadikar").innerHTML=`<span class="learazott">$${termekek[2].discount_price}.00</span> $${termekek[2].price}.00`
		}
		if(termekek[3].discount_price==""){
			document.getElementById("negyedikar").innerHTML=`$${termekek[3].price}.00`
		}
		else{
			document.getElementById("negyedikar").innerHTML=`<span class="learazott">$${termekek[3].discount_price}.00</span> $${termekek[3].price}.00`
		}
		if(termekek[4].discount_price==""){
			document.getElementById("otodikar").innerHTML=`$${termekek[4].price}.00`
		}
		else{
			document.getElementById("otodikar").innerHTML=`<span class="learazott">$${termekek[4].discount_price}.00</span> $${termekek[4].price}.00`
		}
		if(termekek[5].discount_price==""){
			document.getElementById("hatodikar").innerHTML=`$${termekek[5].price}.00`
		}
		else{
			document.getElementById("hatodikar").innerHTML=`<span class="learazott">$${termekek[5].discount_price}.00</span> $${termekek[5].price}.00`
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
			document.getElementById("elsoar").innerHTML=`<span class="learazott">$${termekek[0].discount_price}.00</span> $${termekek[0].price}.00`
		}
		if(termekek[1].discount_price==""){
			document.getElementById("masodikar").innerHTML=`$${termekek[1].price}.00`
		}
		else{
			document.getElementById("masodikar").innerHTML=`<span class="learazott">$${termekek[1].discount_price}.00</span> $${termekek[1].price}.00`
		}
		if(termekek[2].discount_price==""){
			document.getElementById("harmadikar").innerHTML=`$${termekek[2].price}.00`
		}
		else{
			document.getElementById("harmadikar").innerHTML=`<span class="learazott">$${termekek[2].discount_price}.00</span> $${termekek[2].price}.00`
		}
		if(termekek[3].discount_price==""){
			document.getElementById("negyedikar").innerHTML=`$${termekek[3].price}.00`
		}
		else{
			document.getElementById("negyedikar").innerHTML=`<span class="learazott">$${termekek[3].discount_price}.00</span> $${termekek[3].price}.00`
		}
		if(termekek[4].discount_price==""){
			document.getElementById("otodikar").innerHTML=`$${termekek[4].price}.00`
		}
		else{
			document.getElementById("otodikar").innerHTML=`<span class="learazott">$${termekek[4].discount_price}.00</span> $${termekek[4].price}.00`
		}
		if(termekek[5].discount_price==""){
			document.getElementById("hatodikar").innerHTML=`$${termekek[5].price}.00`
		}
		else{
			document.getElementById("hatodikar").innerHTML=`<span class="learazott">$${termekek[5].discount_price}.00</span> $${termekek[5].price}.00`
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
