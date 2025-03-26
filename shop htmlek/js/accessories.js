function megszerezAdat(productSzam) {
	if (productSzam == 1) {
		document.getElementsByClassName("product_nev")
		product_nev.innerHTML = ruhadaraboldal_termekek[0].nev
	}
}

let ruhadaraboldal_termekek = [
	{
		nev:"Black Karl Lagerfeld Shopper bag 'IKONIK'",
		price:"$85.00",

		dizajn_anyag_extrak1:"Logó nyomtatás",
		dizajn_anyag_extrak2:"Pamut",
		dizajn_anyag_extrak3:"Textil",

		meret_szabas1:"Öv- / fogantyú hossza: Hosszú vállpánt / crossbody",
		meret_szabas2:"Öv- / fogantyú hossza: Rövid vállpánt / fogantyú"
	},

	{
		nev:"Black FURLA Shopper bag 'GOCCIA'",
		real_price:"$350.00",
		sale_price:"$290.00",

		dizajn_anyag_extrak1:"Univerzális színek",
		dizajn_anyag_extrak2:"Bőr",
		dizajn_anyag_extrak3:"Tágas főrekesz",
		dizajn_anyag_extrak4:"Belső cipzár",
		dizajn_anyag_extrak5:"Címke",
		dizajn_anyag_extrak6:"Állvány lábazat",
		dizajn_anyag_extrak7:"Erős szövet",
		dizajn_anyag_extrak8:"Sima bőr",
		dizajn_anyag_extrak9:"Cipzár",

		meret_szabas1:"Öv- / fogantyú hossza: Rövid vállpánt / fogantyú",
		meret_szabas2:"Méret: Kicsi",
		meret_szabas3:"Szélesség: 44cm (méret Egy méret)",
		meret_szabas4:"Magasság: 29cm (méret Egy méret)",
		meret_szabas5:"Mélység: 14cm (méret Egy méret)"
	},

	{
		nev:"Black VANZETTI belt",
		price:"$53.00",

		dizajn_anyag_extrak1:"Bőr",
		dizajn_anyag_extrak2:"Fényes",
		dizajn_anyag_extrak3:"Ton inTon tűzések",
		dizajn_anyag_extrak4:"Állítható szélesség",
		dizajn_anyag_extrak5:"Sima bőr",
		dizajn_anyag_extrak6:"Tüskecsat",

		meret_szabas1:"Szélesség: 4,5cm (méret 75)"
	},

	{
		nev:"Black Nike Sportswear backpack 'Heritage",
		price:"$40.00",

		dizajn_anyag_extrak1:"Logó nyomtatás",
		dizajn_anyag_extrak2:"Tágas főrekesz",
		dizajn_anyag_extrak3:"Laptoptartó",
		dizajn_anyag_extrak4:"Külső cipzár",
		dizajn_anyag_extrak5:"Állítható szíj",
		dizajn_anyag_extrak6:"Erős szövet",
		dizajn_anyag_extrak7:"Címke nyomtatás",
		dizajn_anyag_extrak8:"Hordszíj",
		dizajn_anyag_extrak9:"Textil",
		dizajn_anyag_extrak10:"Cipzár",

		meret_szabas1:"Méret (terjedelem): Kicsi (< 25 l)",
		meret_szabas2:"Magasság: 47cm (méret Egy méret)",
		meret_szabas3:"Hossz: 30cm (méret Egy méret)",
		meret_szabas4:"Mélység: 16cm (méret Egy méret)"
	},

	{
		nev:"Brown Expatrié beltbag 'Alice Small'",
		price:"$30.00",

		dizajn_anyag_extrak1:"Tágas főrekesz",
		dizajn_anyag_extrak2:"Mobiltelefon-tartó zseb",
		dizajn_anyag_extrak3:"Külső cipzár",
		dizajn_anyag_extrak4:"Állítható hosszúság",
		dizajn_anyag_extrak5:"Ton inTon tűzések",
		dizajn_anyag_extrak6:"Sima szövet",
		dizajn_anyag_extrak7:"Műbőr",
		dizajn_anyag_extrak8:"Cipzár",

		meret_szabas1:"Méret (terjedelem): Kicsi (< 25 l)",
		meret_szabas2:"Öv- / fogantyú hossza: Hosszú vállpánt / crossbody",
		meret_szabas3:"Méret: Kicsi",
	},

	{
		nev:"Black ALPHA INDUSTRIES caps",
		real_price:"$35.00",
		sale_price:"$20.00",

		dizajn_anyag_extrak1:"Logó nyomtatás",
		dizajn_anyag_extrak2:"Címkedarab/címkezászló",
		dizajn_anyag_extrak3:"Ton inTon tűzések",
		dizajn_anyag_extrak4:"Erős szövet",
		dizajn_anyag_extrak5:"Snapback-zár",
		dizajn_anyag_extrak6:"Állítható szélesség",
		dizajn_anyag_extrak7:"Textil",
		dizajn_anyag_extrak8:"Baseball sapka",
		dizajn_anyag_extrak9:"Állítható pánt",

		meret_szabas1:"Állítható"
	},

]

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
		discount_price:"350.00",
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
		discount_price:"35.00",
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
			document.getElementById("elsoar").innerHTML=`$${eredeti_termekek[0].discount_price} $${eredeti_termekek[0].price}.00`
		}
		if(eredeti_termekek[1].discount_price==""){
			document.getElementById("masodikar").innerHTML=`$${eredeti_termekek[1].price}.00`
		}
		else{
			document.getElementById("masodikar").innerHTML=`$${eredeti_termekek[1].discount_price} $${eredeti_termekek[1].price}.00`
		}
		if(eredeti_termekek[2].discount_price==""){
			document.getElementById("harmadikar").innerHTML=`$${eredeti_termekek[2].price}.00`
		}
		else{
			document.getElementById("harmadikar").innerHTML=`$${eredeti_termekek[2].discount_price} $${eredeti_termekek[2].price}.00`
		}
		if(eredeti_termekek[3].discount_price==""){
			document.getElementById("negyedikar").innerHTML=`$${eredeti_termekek[3].price}.00`
		}
		else{
			document.getElementById("negyedikar").innerHTML=`$${eredeti_termekek[3].discount_price} $${eredeti_termekek[3].price}.00`
		}
		if(eredeti_termekek[4].discount_price==""){
			document.getElementById("otodikar").innerHTML=`$${eredeti_termekek[4].price}.00`
		}
		else{
			document.getElementById("otodikar").innerHTML=`$${eredeti_termekek[4].discount_price} $${eredeti_termekek[4].price}.00`
		}
		if(eredeti_termekek[5].discount_price==""){
			document.getElementById("hatodikar").innerHTML=`$${eredeti_termekek[5].price}.00`
		}
		else{
			document.getElementById("hatodikar").innerHTML=`$${eredeti_termekek[5].discount_price} $${eredeti_termekek[5].price}.00`
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
