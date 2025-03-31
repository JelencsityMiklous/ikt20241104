let mybutton = document.getElementById("topgomb");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	}
	else {
		mybutton.style.display = "none";
	}
}

function topFunction() {
	document.body.scrollTop = 0; // Safari
	document.documentElement.scrollTop = 0; // Chrome, Firefox, IE, Opera
}




let productSzam = sessionStorage.getItem("productszam");
console.log(productSzam)
/*window.onload = console.log(localStorage.getItem(productSzam));*/

function feltoltAdat(productSzam) {
	if (productSzam == '6') {
		document.getElementsByClassName("product_nev").innerHTML = `${accessories_termekek[0].nev}`;
	}
}


let accessories_termekek = [
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

feltoltAdat();