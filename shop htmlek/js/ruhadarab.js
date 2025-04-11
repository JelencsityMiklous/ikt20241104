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


const params = new URLSearchParams(window.location.search);
const productSzam = params.get("id");

console.log("Product szám:", productSzam);



function feltoltAdat() {
	let oldalcim = document.getElementById("cim")
	let fejlec_cim = document.getElementById("fejleclec")

	let un_list_des = document.getElementById("design")
	let un_list_meret = document.getElementById("meret")

	let main_image = document.getElementById("mainkep")

	if (productSzam == 1) {
		document.title = "Karl Lagerfeld Bag";

		oldalcim.innerHTML = "Karl Lagerfeld Bag"
		fejlec_cim.innerHTML = "Home / Products / Accessories / Karl Lagerfeld Bag"

		document.getElementById("product_nev").innerHTML = accessories_termekek[0].nev;

		document.getElementById("product_ar").innerHTML = accessories_termekek[0].price;

		let list_item1 = document.createElement("li")
		list_item1.innerHTML = accessories_termekek[0].dizajn_anyag_extrak1
		let list_item2 = document.createElement("li")
		list_item2.innerHTML = accessories_termekek[0].dizajn_anyag_extrak2
		let list_item3 = document.createElement("li")
		list_item3.innerHTML = accessories_termekek[0].dizajn_anyag_extrak3

		un_list_des.appendChild(list_item1)
		un_list_des.appendChild(list_item2)
		un_list_des.appendChild(list_item3)

		let list_item10 = document.createElement("li")
		list_item10.innerHTML = accessories_termekek[0].meret_szabas1
		let list_item11 = document.createElement("li")
		list_item11.innerHTML = accessories_termekek[0].meret_szabas2

		un_list_meret.appendChild(list_item10)
		un_list_meret.appendChild(list_item11)

		main_image.src="../kepek/accessories/karl_lagerfeld_taska.png"
	}

	else if (productSzam == 2) {
		document.title = "Furla Bag";

		oldalcim.innerHTML = "Furla Bag"
		fejlec_cim.innerHTML = "Home / Products / Accessories / Furla Bag"

		document.getElementById("product_nev").innerHTML = accessories_termekek[1].nev;

		document.getElementById("product_ar").innerHTML = accessories_termekek[1].sale_price;
		document.getElementById("learazott").innerHTML = accessories_termekek[1].real_price;
		
		let list_item1 = document.createElement("li")
		list_item1.innerHTML = accessories_termekek[1].dizajn_anyag_extrak1
		let list_item2 = document.createElement("li")
		list_item2.innerHTML = accessories_termekek[1].dizajn_anyag_extrak2
		let list_item3 = document.createElement("li")
		list_item3.innerHTML = accessories_termekek[1].dizajn_anyag_extrak3
		let list_item4 = document.createElement("li")
		list_item4.innerHTML = accessories_termekek[1].dizajn_anyag_extrak4
		let list_item5 = document.createElement("li")
		list_item5.innerHTML = accessories_termekek[1].dizajn_anyag_extrak5
		let list_item6 = document.createElement("li")
		list_item6.innerHTML = accessories_termekek[1].dizajn_anyag_extrak6
		let list_item7 = document.createElement("li")
		list_item7.innerHTML = accessories_termekek[1].dizajn_anyag_extrak7
		let list_item8 = document.createElement("li")
		list_item8.innerHTML = accessories_termekek[1].dizajn_anyag_extrak8
		let list_item9 = document.createElement("li")
		list_item9.innerHTML = accessories_termekek[1].dizajn_anyag_extrak9

		un_list_des.appendChild(list_item1)
		un_list_des.appendChild(list_item2)
		un_list_des.appendChild(list_item3)
		un_list_des.appendChild(list_item4)
		un_list_des.appendChild(list_item5)
		un_list_des.appendChild(list_item6)
		un_list_des.appendChild(list_item7)
		un_list_des.appendChild(list_item8)
		un_list_des.appendChild(list_item9)

		let list_item10 = document.createElement("li")
		list_item10.innerHTML = accessories_termekek[1].meret_szabas1
		let list_item11 = document.createElement("li")
		list_item11.innerHTML = accessories_termekek[1].meret_szabas2
		let list_item12 = document.createElement("li")
		list_item12.innerHTML = accessories_termekek[1].meret_szabas3
		let list_item13 = document.createElement("li")
		list_item13.innerHTML = accessories_termekek[1].meret_szabas4
		let list_item14 = document.createElement("li")
		list_item14.innerHTML = accessories_termekek[1].meret_szabas5

		un_list_meret.appendChild(list_item10)
		un_list_meret.appendChild(list_item11)
		un_list_meret.appendChild(list_item12)
		un_list_meret.appendChild(list_item13)
		un_list_meret.appendChild(list_item14)

		main_image.src="../kepek/accessories/furla_taska.png"
	}

	else if (productSzam == 3) {
		document.title = "Vanzetti Belt";

		oldalcim.innerHTML = "Vanzetti Belt"
		fejlec_cim.innerHTML = "Home / Products / Accessories / Vanzetti Belt"

		document.getElementById("product_nev").innerHTML = accessories_termekek[2].nev;

		document.getElementById("product_ar").innerHTML = accessories_termekek[2].price;

		let list_item1 = document.createElement("li")
		list_item1.innerHTML = accessories_termekek[2].dizajn_anyag_extrak1
		let list_item2 = document.createElement("li")
		list_item2.innerHTML = accessories_termekek[2].dizajn_anyag_extrak2
		let list_item3 = document.createElement("li")
		list_item3.innerHTML = accessories_termekek[2].dizajn_anyag_extrak3
		let list_item4 = document.createElement("li")
		list_item4.innerHTML = accessories_termekek[2].dizajn_anyag_extrak4
		let list_item5 = document.createElement("li")
		list_item5.innerHTML = accessories_termekek[2].dizajn_anyag_extrak5
		let list_item6 = document.createElement("li")
		list_item6.innerHTML = accessories_termekek[2].dizajn_anyag_extrak6

		un_list_des.appendChild(list_item1)
		un_list_des.appendChild(list_item2)
		un_list_des.appendChild(list_item3)
		un_list_des.appendChild(list_item4)
		un_list_des.appendChild(list_item5)
		un_list_des.appendChild(list_item6)

		let list_item7 = document.createElement("li")
		list_item7.innerHTML = accessories_termekek[2].meret_szabas1

		un_list_meret.appendChild(list_item7)

		main_image.src="../kepek/accessories/vanzetti_ov.png"
	}

	else if (productSzam == 4) {
		document.title = "Nike Backpack";

		oldalcim.innerHTML = "Nike Backpack"
		fejlec_cim.innerHTML = "Home / Products / Accessories / Nike Backpack"

		document.getElementById("product_nev").innerHTML = accessories_termekek[3].nev;

		document.getElementById("product_ar").innerHTML = accessories_termekek[3].price;
		
		let list_item1 = document.createElement("li")
		list_item1.innerHTML = accessories_termekek[3].dizajn_anyag_extrak1
		let list_item2 = document.createElement("li")
		list_item2.innerHTML = accessories_termekek[3].dizajn_anyag_extrak2
		let list_item3 = document.createElement("li")
		list_item3.innerHTML = accessories_termekek[3].dizajn_anyag_extrak3
		let list_item4 = document.createElement("li")
		list_item4.innerHTML = accessories_termekek[3].dizajn_anyag_extrak4
		let list_item5 = document.createElement("li")
		list_item5.innerHTML = accessories_termekek[3].dizajn_anyag_extrak5
		let list_item6 = document.createElement("li")
		list_item6.innerHTML = accessories_termekek[3].dizajn_anyag_extrak6
		let list_item7 = document.createElement("li")
		list_item7.innerHTML = accessories_termekek[3].dizajn_anyag_extrak7
		let list_item8 = document.createElement("li")
		list_item8.innerHTML = accessories_termekek[3].dizajn_anyag_extrak8
		let list_item9 = document.createElement("li")
		list_item9.innerHTML = accessories_termekek[3].dizajn_anyag_extrak9
		let list_item10 = document.createElement("li")
		list_item10.innerHTML = accessories_termekek[3].dizajn_anyag_extrak10

		un_list_des.appendChild(list_item1)
		un_list_des.appendChild(list_item2)
		un_list_des.appendChild(list_item3)
		un_list_des.appendChild(list_item4)
		un_list_des.appendChild(list_item5)
		un_list_des.appendChild(list_item6)

		let list_item11 = document.createElement("li")
		list_item11.innerHTML = accessories_termekek[3].meret_szabas1
		let list_item12 = document.createElement("li")
		list_item12.innerHTML = accessories_termekek[3].meret_szabas2
		let list_item13 = document.createElement("li")
		list_item13.innerHTML = accessories_termekek[3].meret_szabas3
		let list_item14 = document.createElement("li")
		list_item14.innerHTML = accessories_termekek[3].meret_szabas4

		un_list_meret.appendChild(list_item11)
		un_list_meret.appendChild(list_item12)
		un_list_meret.appendChild(list_item13)
		un_list_meret.appendChild(list_item14)

		main_image.src="../kepek/accessories/nike_hatitaska.png"
	}

	else if (productSzam == 5) {
		document.title = "Expatrie Beltbag";

		oldalcim.innerHTML = "Expatrie Beltbag"
		fejlec_cim.innerHTML = "Home / Products / Accessories / Expatrie Beltbag"

		document.getElementById("product_nev").innerHTML = accessories_termekek[4].nev;

		document.getElementById("product_ar").innerHTML = accessories_termekek[4].price;
		
		let list_item1 = document.createElement("li")
		list_item1.innerHTML = accessories_termekek[4].dizajn_anyag_extrak1
		let list_item2 = document.createElement("li")
		list_item2.innerHTML = accessories_termekek[4].dizajn_anyag_extrak2
		let list_item3 = document.createElement("li")
		list_item3.innerHTML = accessories_termekek[4].dizajn_anyag_extrak3
		let list_item4 = document.createElement("li")
		list_item4.innerHTML = accessories_termekek[4].dizajn_anyag_extrak4
		let list_item5 = document.createElement("li")
		list_item5.innerHTML = accessories_termekek[4].dizajn_anyag_extrak5
		let list_item6 = document.createElement("li")
		list_item6.innerHTML = accessories_termekek[4].dizajn_anyag_extrak6
		let list_item7 = document.createElement("li")
		list_item7.innerHTML = accessories_termekek[4].dizajn_anyag_extrak7
		let list_item8 = document.createElement("li")
		list_item8.innerHTML = accessories_termekek[4].dizajn_anyag_extrak8

		un_list_des.appendChild(list_item1)
		un_list_des.appendChild(list_item2)
		un_list_des.appendChild(list_item3)
		un_list_des.appendChild(list_item4)
		un_list_des.appendChild(list_item5)
		un_list_des.appendChild(list_item6)
		un_list_des.appendChild(list_item7)
		un_list_des.appendChild(list_item8)

		let list_item9 = document.createElement("li")
		list_item9.innerHTML = accessories_termekek[4].meret_szabas1
		let list_item10 = document.createElement("li")
		list_item10.innerHTML = accessories_termekek[4].meret_szabas2
		let list_item11 = document.createElement("li")
		list_item11.innerHTML = accessories_termekek[4].meret_szabas3

		un_list_meret.appendChild(list_item9)
		un_list_meret.appendChild(list_item10)
		un_list_meret.appendChild(list_item11)

		main_image.src="../kepek/accessories/expatrie_ovtaska.png"
	}

	else if (productSzam == 6) {
		document.title = "Alpha Industries Hat";

		oldalcim.innerHTML = "Alpha Industries Hat"
		fejlec_cim.innerHTML = "Home / Products / Accessories / Alpha Industries Hat"

		document.getElementById("product_nev").innerHTML = accessories_termekek[5].nev;

		document.getElementById("product_ar").innerHTML = accessories_termekek[5].sale_price;
		document.getElementById("learazott").innerHTML = accessories_termekek[5].real_price;
		
		let list_item1 = document.createElement("li")
		list_item1.innerHTML = accessories_termekek[5].dizajn_anyag_extrak1
		let list_item2 = document.createElement("li")
		list_item2.innerHTML = accessories_termekek[5].dizajn_anyag_extrak2
		let list_item3 = document.createElement("li")
		list_item3.innerHTML = accessories_termekek[5].dizajn_anyag_extrak3
		let list_item4 = document.createElement("li")
		list_item4.innerHTML = accessories_termekek[5].dizajn_anyag_extrak4
		let list_item5 = document.createElement("li")
		list_item5.innerHTML = accessories_termekek[5].dizajn_anyag_extrak5
		let list_item6 = document.createElement("li")
		list_item6.innerHTML = accessories_termekek[5].dizajn_anyag_extrak6
		let list_item7 = document.createElement("li")
		list_item7.innerHTML = accessories_termekek[5].dizajn_anyag_extrak7
		let list_item8 = document.createElement("li")
		list_item8.innerHTML = accessories_termekek[5].dizajn_anyag_extrak8
		let list_item9 = document.createElement("li")
		list_item9.innerHTML = accessories_termekek[5].dizajn_anyag_extrak9

		un_list_des.appendChild(list_item1)
		un_list_des.appendChild(list_item2)
		un_list_des.appendChild(list_item3)
		un_list_des.appendChild(list_item4)
		un_list_des.appendChild(list_item5)
		un_list_des.appendChild(list_item6)
		un_list_des.appendChild(list_item7)
		un_list_des.appendChild(list_item8)
		un_list_des.appendChild(list_item9)

		let list_item10 = document.createElement("li")
		list_item10.innerHTML = accessories_termekek[5].meret_szabas1

		un_list_meret.appendChild(list_item10)

		main_image.src="../kepek/accessories/alpha_industries_sapka.png"
	}

	// CASUAL XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
	else if (productSzam == 7) {
		document.title = "Collar T-Shirt";

		oldalcim.innerHTML = "Collar T-Shirt"
		fejlec_cim.innerHTML = "Home / Products / Casual / Collar T-Shirt"

		document.getElementById("product_nev").innerHTML = casual_termekek[0].nev;

		document.getElementById("product_ar").innerHTML = casual_termekek[0].price;
		
		let list_item1 = document.createElement("li")
		list_item1.innerHTML = casual_termekek[0].dizajn_anyag_extrak1
		let list_item2 = document.createElement("li")
		list_item2.innerHTML = casual_termekek[0].dizajn_anyag_extrak2
		let list_item3 = document.createElement("li")
		list_item3.innerHTML = casual_termekek[0].dizajn_anyag_extrak3
		let list_item4 = document.createElement("li")
		list_item4.innerHTML = casual_termekek[0].dizajn_anyag_extrak4
		let list_item5 = document.createElement("li")
		list_item5.innerHTML = casual_termekek[0].dizajn_anyag_extrak5
		let list_item6 = document.createElement("li")
		list_item6.innerHTML = casual_termekek[0].dizajn_anyag_extrak6
		let list_item7 = document.createElement("li")
		list_item7.innerHTML = casual_termekek[0].dizajn_anyag_extrak7
		let list_item8 = document.createElement("li")
		list_item8.innerHTML = casual_termekek[0].dizajn_anyag_extrak8
		let list_item9 = document.createElement("li")
		list_item9.innerHTML = casual_termekek[0].dizajn_anyag_extrak9

		un_list_des.appendChild(list_item1)
		un_list_des.appendChild(list_item2)
		un_list_des.appendChild(list_item3)
		un_list_des.appendChild(list_item4)
		un_list_des.appendChild(list_item5)
		un_list_des.appendChild(list_item6)
		un_list_des.appendChild(list_item7)
		un_list_des.appendChild(list_item8)
		un_list_des.appendChild(list_item9)

		let list_item10 = document.createElement("li")
		list_item10.innerHTML = casual_termekek[0].meret_szabas1
		let list_item11 = document.createElement("li")
		list_item11.innerHTML = casual_termekek[0].meret_szabas2
		let list_item12 = document.createElement("li")
		list_item12.innerHTML = casual_termekek[0].meret_szabas3
		let list_item13 = document.createElement("li")
		list_item13.innerHTML = casual_termekek[0].meret_szabas4

		un_list_meret.appendChild(list_item10)
		un_list_meret.appendChild(list_item11)
		un_list_meret.appendChild(list_item12)
		un_list_meret.appendChild(list_item13)

		main_image.src="../kepek/collar-light-gray-t-m.png"
	}

	else if (productSzam == 8) {
		document.title = "Gents T-Shirt";

		oldalcim.innerHTML = "Gents T-Shirt"
		fejlec_cim.innerHTML = "Home / Products / Casual / Gents T-Shirt"

		document.getElementById("product_nev").innerHTML = casual_termekek[1].nev;

		document.getElementById("product_ar").innerHTML = casual_termekek[1].price;
		
		let list_item1 = document.createElement("li")
		list_item1.innerHTML = casual_termekek[1].dizajn_anyag_extrak1
		let list_item2 = document.createElement("li")
		list_item2.innerHTML = casual_termekek[1].dizajn_anyag_extrak2
		let list_item3 = document.createElement("li")
		list_item3.innerHTML = casual_termekek[1].dizajn_anyag_extrak3
		let list_item4 = document.createElement("li")
		list_item4.innerHTML = casual_termekek[1].dizajn_anyag_extrak4
		let list_item5 = document.createElement("li")
		list_item5.innerHTML = casual_termekek[1].dizajn_anyag_extrak5
		let list_item6 = document.createElement("li")
		list_item6.innerHTML = casual_termekek[1].dizajn_anyag_extrak6
		let list_item7 = document.createElement("li")
		list_item7.innerHTML = casual_termekek[1].dizajn_anyag_extrak7
		let list_item8 = document.createElement("li")
		list_item8.innerHTML = casual_termekek[1].dizajn_anyag_extrak8
		let list_item9 = document.createElement("li")
		list_item9.innerHTML = casual_termekek[1].dizajn_anyag_extrak9

		un_list_des.appendChild(list_item1)
		un_list_des.appendChild(list_item2)
		un_list_des.appendChild(list_item3)
		un_list_des.appendChild(list_item4)
		un_list_des.appendChild(list_item5)
		un_list_des.appendChild(list_item6)
		un_list_des.appendChild(list_item7)
		un_list_des.appendChild(list_item8)
		un_list_des.appendChild(list_item9)

		let list_item10 = document.createElement("li")
		list_item10.innerHTML = casual_termekek[1].meret_szabas1
		let list_item11 = document.createElement("li")
		list_item11.innerHTML = casual_termekek[1].meret_szabas2
		let list_item12 = document.createElement("li")
		list_item12.innerHTML = casual_termekek[1].meret_szabas3
		let list_item13 = document.createElement("li")
		list_item13.innerHTML = casual_termekek[1].meret_szabas4

		un_list_meret.appendChild(list_item10)
		un_list_meret.appendChild(list_item11)
		un_list_meret.appendChild(list_item12)
		un_list_meret.appendChild(list_item13)

		main_image.src="../kepek/white-t-m.png"
	}

	else if (productSzam == 9) {
		document.title = "Ladies Hat";

		oldalcim.innerHTML = "Ladies Hat"
		fejlec_cim.innerHTML = "Home / Products / Casual / Ladies Hat"

		document.getElementById("product_nev").innerHTML = casual_termekek[2].nev;

		document.getElementById("product_ar").innerHTML = casual_termekek[2].sale_price;
		document.getElementById("learazott").innerHTML = casual_termekek[2].real_price;
		
		let list_item1 = document.createElement("li")
		list_item1.innerHTML = casual_termekek[2].dizajn_anyag_extrak1
		let list_item2 = document.createElement("li")
		list_item2.innerHTML = casual_termekek[2].dizajn_anyag_extrak2
		let list_item3 = document.createElement("li")
		list_item3.innerHTML = casual_termekek[2].dizajn_anyag_extrak3

		un_list_des.appendChild(list_item1)
		un_list_des.appendChild(list_item2)
		un_list_des.appendChild(list_item3)

		let list_item4 = document.createElement("li")
		list_item4.innerHTML = casual_termekek[2].meret_szabas1

		un_list_meret.appendChild(list_item4)

		main_image.src="../kepek/hat-f.png"
	}

	else if (productSzam == 10) {
		document.title = "Collar T-Shirt";

		oldalcim.innerHTML = "Collar T-Shirt"
		fejlec_cim.innerHTML = "Home / Products / Casual / Collar T-Shirt"

		document.getElementById("product_nev").innerHTML = casual_termekek[3].nev;

		document.getElementById("product_ar").innerHTML = casual_termekek[3].sale_price;
		document.getElementById("learazott").innerHTML = casual_termekek[3].real_price;
		
		let list_item1 = document.createElement("li")
		list_item1.innerHTML = casual_termekek[3].dizajn_anyag_extrak1
		let list_item2 = document.createElement("li")
		list_item2.innerHTML = casual_termekek[3].dizajn_anyag_extrak2
		let list_item3 = document.createElement("li")
		list_item3.innerHTML = casual_termekek[3].dizajn_anyag_extrak3
		let list_item4 = document.createElement("li")
		list_item4.innerHTML = casual_termekek[3].dizajn_anyag_extrak4
		let list_item5 = document.createElement("li")
		list_item5.innerHTML = casual_termekek[3].dizajn_anyag_extrak5
		let list_item6 = document.createElement("li")
		list_item6.innerHTML = casual_termekek[3].dizajn_anyag_extrak6
		let list_item7 = document.createElement("li")
		list_item7.innerHTML = casual_termekek[3].dizajn_anyag_extrak7
		let list_item8 = document.createElement("li")
		list_item8.innerHTML = casual_termekek[3].dizajn_anyag_extrak8
		let list_item9 = document.createElement("li")
		list_item9.innerHTML = casual_termekek[3].dizajn_anyag_extrak9

		un_list_des.appendChild(list_item1)
		un_list_des.appendChild(list_item2)
		un_list_des.appendChild(list_item3)
		un_list_des.appendChild(list_item4)
		un_list_des.appendChild(list_item5)
		un_list_des.appendChild(list_item6)
		un_list_des.appendChild(list_item7)
		un_list_des.appendChild(list_item8)
		un_list_des.appendChild(list_item9)

		let list_item10 = document.createElement("li")
		list_item10.innerHTML = casual_termekek[3].meret_szabas1

		un_list_meret.appendChild(list_item10)

		main_image.src="../kepek/leather-jacket-m.png"
	}

	else if (productSzam == 11) {
		document.title = "Printed Tops";

		oldalcim.innerHTML = "Printed Tops"
		fejlec_cim.innerHTML = "Home / Products / Casual / Printed Tops"

		document.getElementById("product_nev").innerHTML = casual_termekek[4].nev;

		document.getElementById("product_ar").innerHTML = casual_termekek[4].price;
		
		let list_item1 = document.createElement("li")
		list_item1.innerHTML = casual_termekek[4].dizajn_anyag_extrak1
		let list_item2 = document.createElement("li")
		list_item2.innerHTML = casual_termekek[4].dizajn_anyag_extrak2
		let list_item3 = document.createElement("li")
		list_item3.innerHTML = casual_termekek[4].dizajn_anyag_extrak3
		let list_item4 = document.createElement("li")
		list_item4.innerHTML = casual_termekek[4].dizajn_anyag_extrak4
		let list_item5 = document.createElement("li")
		list_item5.innerHTML = casual_termekek[4].dizajn_anyag_extrak5
		let list_item6 = document.createElement("li")
		list_item6.innerHTML = casual_termekek[4].dizajn_anyag_extrak6
		let list_item7 = document.createElement("li")
		list_item7.innerHTML = casual_termekek[4].dizajn_anyag_extrak7
		let list_item8 = document.createElement("li")
		list_item8.innerHTML = casual_termekek[4].dizajn_anyag_extrak8
		let list_item9 = document.createElement("li")
		list_item9.innerHTML = casual_termekek[4].dizajn_anyag_extrak9

		un_list_des.appendChild(list_item1)
		un_list_des.appendChild(list_item2)
		un_list_des.appendChild(list_item3)
		un_list_des.appendChild(list_item4)
		un_list_des.appendChild(list_item5)
		un_list_des.appendChild(list_item6)
		un_list_des.appendChild(list_item7)
		un_list_des.appendChild(list_item8)
		un_list_des.appendChild(list_item9)

		let list_item10 = document.createElement("li")
		list_item10.innerHTML = casual_termekek[4].meret_szabas1
		let list_item11 = document.createElement("li")
		list_item11.innerHTML = casual_termekek[4].meret_szabas2
		let list_item12 = document.createElement("li")
		list_item12.innerHTML = casual_termekek[4].meret_szabas3
		let list_item13 = document.createElement("li")
		list_item13.innerHTML = casual_termekek[4].meret_szabas4

		un_list_meret.appendChild(list_item10)
		un_list_meret.appendChild(list_item11)
		un_list_meret.appendChild(list_item12)
		un_list_meret.appendChild(list_item13)

		main_image.src="../kepek/patterned-dress-f.png"
	}

	else if (productSzam == 12) {
		document.title = "Women Tops";

		oldalcim.innerHTML = "Women Tops"
		fejlec_cim.innerHTML = "Home / Products / Casual / Women Tops"

		document.getElementById("product_nev").innerHTML = casual_termekek[5].nev;

		document.getElementById("product_ar").innerHTML = casual_termekek[5].price;
		
		let list_item1 = document.createElement("li")
		list_item1.innerHTML = casual_termekek[5].dizajn_anyag_extrak1
		let list_item2 = document.createElement("li")
		list_item2.innerHTML = casual_termekek[5].dizajn_anyag_extrak2
		let list_item3 = document.createElement("li")
		list_item3.innerHTML = casual_termekek[5].dizajn_anyag_extrak3
		let list_item4 = document.createElement("li")
		list_item4.innerHTML = casual_termekek[5].dizajn_anyag_extrak4
		let list_item5 = document.createElement("li")
		list_item5.innerHTML = casual_termekek[5].dizajn_anyag_extrak5
		let list_item6 = document.createElement("li")
		list_item6.innerHTML = casual_termekek[5].dizajn_anyag_extrak6
		let list_item7 = document.createElement("li")
		list_item7.innerHTML = casual_termekek[5].dizajn_anyag_extrak7
		let list_item8 = document.createElement("li")
		list_item8.innerHTML = casual_termekek[5].dizajn_anyag_extrak8
		let list_item9 = document.createElement("li")
		list_item9.innerHTML = casual_termekek[5].dizajn_anyag_extrak9

		un_list_des.appendChild(list_item1)
		un_list_des.appendChild(list_item2)
		un_list_des.appendChild(list_item3)
		un_list_des.appendChild(list_item4)
		un_list_des.appendChild(list_item5)
		un_list_des.appendChild(list_item6)
		un_list_des.appendChild(list_item7)
		un_list_des.appendChild(list_item8)
		un_list_des.appendChild(list_item9)

		let list_item10 = document.createElement("li")
		list_item10.innerHTML = casual_termekek[5].meret_szabas1
		let list_item11 = document.createElement("li")
		list_item11.innerHTML = casual_termekek[5].meret_szabas2
		let list_item12 = document.createElement("li")
		list_item12.innerHTML = casual_termekek[5].meret_szabas3
		let list_item13 = document.createElement("li")
		list_item13.innerHTML = casual_termekek[5].meret_szabas4

		un_list_meret.appendChild(list_item10)
		un_list_meret.appendChild(list_item11)
		un_list_meret.appendChild(list_item12)
		un_list_meret.appendChild(list_item13)

		main_image.src="../kepek/black-dress-f.png"
	}

	// CLOTHING XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
	else if (productSzam == 13) {
		document.title = "Men adidas hoodie";

		oldalcim.innerHTML = "Men adidas hoodie"
		fejlec_cim.innerHTML = "Home / Products / Clothing / Men adidas hoodie"

		document.getElementById("product_nev").innerHTML = clothing_termekek[0].nev;

		document.getElementById("product_ar").innerHTML = clothing_termekek[0].sale_price;
		document.getElementById("learazott").innerHTML = clothing_termekek[0].real_price;
		
		let list_item1 = document.createElement("li")
		list_item1.innerHTML = clothing_termekek[0].dizajn_anyag_extrak1
		let list_item2 = document.createElement("li")
		list_item2.innerHTML = clothing_termekek[0].dizajn_anyag_extrak2
		let list_item3 = document.createElement("li")
		list_item3.innerHTML = clothing_termekek[0].dizajn_anyag_extrak3
		let list_item4 = document.createElement("li")
		list_item4.innerHTML = clothing_termekek[0].dizajn_anyag_extrak4
		let list_item5 = document.createElement("li")
		list_item5.innerHTML = clothing_termekek[0].dizajn_anyag_extrak5

		un_list_des.appendChild(list_item1)
		un_list_des.appendChild(list_item2)
		un_list_des.appendChild(list_item3)
		un_list_des.appendChild(list_item4)
		un_list_des.appendChild(list_item5)

		let list_item6 = document.createElement("li")
		list_item6.innerHTML = clothing_termekek[0].meret_szabas1
		let list_item7 = document.createElement("li")
		list_item7.innerHTML = clothing_termekek[0].meret_szabas2

		un_list_meret.appendChild(list_item6)
		un_list_meret.appendChild(list_item7)

		main_image.src="../kepek/clothing/FerfiAdidasKapucnisPulover.png"
	}

	else if (productSzam == 14) {
		document.title = "Woman Hugo T-Shirt";

		oldalcim.innerHTML = "Woman Hugo Shirt"
		fejlec_cim.innerHTML = "Home / Products / Clothing / Woman Hugo Shirt"

		document.getElementById("product_nev").innerHTML = clothing_termekek[1].nev;

		document.getElementById("product_ar").innerHTML = clothing_termekek[1].price;
		
		let list_item1 = document.createElement("li")
		list_item1.innerHTML = clothing_termekek[1].dizajn_anyag_extrak1
		let list_item2 = document.createElement("li")
		list_item2.innerHTML = clothing_termekek[1].dizajn_anyag_extrak2
		let list_item3 = document.createElement("li")
		list_item3.innerHTML = clothing_termekek[1].dizajn_anyag_extrak3
		let list_item4 = document.createElement("li")
		list_item4.innerHTML = clothing_termekek[1].dizajn_anyag_extrak4
		let list_item5 = document.createElement("li")
		list_item5.innerHTML = clothing_termekek[1].dizajn_anyag_extrak5

		un_list_des.appendChild(list_item1)
		un_list_des.appendChild(list_item2)
		un_list_des.appendChild(list_item3)
		un_list_des.appendChild(list_item4)
		un_list_des.appendChild(list_item5)

		let list_item6 = document.createElement("li")
		list_item6.innerHTML = clothing_termekek[1].meret_szabas1
		let list_item7 = document.createElement("li")
		list_item7.innerHTML = clothing_termekek[1].meret_szabas2
		let list_item8 = document.createElement("li")
		list_item8.innerHTML = clothing_termekek[1].meret_szabas3

		un_list_meret.appendChild(list_item6)
		un_list_meret.appendChild(list_item7)
		un_list_meret.appendChild(list_item8)

		main_image.src="../kepek/clothing/NoiHugoPolo.png"
	}

	else if (productSzam == 15) {
		document.title = "Woman Levis Hoodie";

		oldalcim.innerHTML = "Woman Levis Hoodie"
		fejlec_cim.innerHTML = "Home / Products / Clothing / Woman Levis Hoodie"

		document.getElementById("product_nev").innerHTML = clothing_termekek[2].nev;

		document.getElementById("product_ar").innerHTML = clothing_termekek[2].sale_price;
		document.getElementById("learazott").innerHTML = clothing_termekek[2].real_price;
		
		let list_item1 = document.createElement("li")
		list_item1.innerHTML = clothing_termekek[2].dizajn_anyag_extrak1
		let list_item2 = document.createElement("li")
		list_item2.innerHTML = clothing_termekek[2].dizajn_anyag_extrak2
		let list_item3 = document.createElement("li")
		list_item3.innerHTML = clothing_termekek[2].dizajn_anyag_extrak3
		let list_item4 = document.createElement("li")
		list_item4.innerHTML = clothing_termekek[2].dizajn_anyag_extrak4
		let list_item5 = document.createElement("li")
		list_item5.innerHTML = clothing_termekek[2].dizajn_anyag_extrak5
		let list_item6 = document.createElement("li")
		list_item5.innerHTML = clothing_termekek[2].dizajn_anyag_extrak6

		un_list_des.appendChild(list_item1)
		un_list_des.appendChild(list_item2)
		un_list_des.appendChild(list_item3)
		un_list_des.appendChild(list_item4)
		un_list_des.appendChild(list_item5)
		un_list_des.appendChild(list_item6)

		let list_item7 = document.createElement("li")
		list_item7.innerHTML = clothing_termekek[2].meret_szabas1
		let list_item8 = document.createElement("li")
		list_item8.innerHTML = clothing_termekek[2].meret_szabas2
		let list_item9 = document.createElement("li")
		list_item9.innerHTML = clothing_termekek[2].meret_szabas3

		un_list_meret.appendChild(list_item7)
		un_list_meret.appendChild(list_item8)
		un_list_meret.appendChild(list_item9)

		main_image.src="../kepek/clothing/NoiLevisKapucnisPulover.png"
	}

	else if (productSzam == 16) {
		document.title = "Men Jack&Jones Jeans";

		oldalcim.innerHTML = "Men Jack&Jones Jeans"
		fejlec_cim.innerHTML = "Home / Products / Clothing / Men Jack&Jones Jeans"

		document.getElementById("product_nev").innerHTML = clothing_termekek[3].nev;

		document.getElementById("product_ar").innerHTML = clothing_termekek[3].price;
		
		let list_item1 = document.createElement("li")
		list_item1.innerHTML = clothing_termekek[3].dizajn_anyag_extrak1
		let list_item2 = document.createElement("li")
		list_item2.innerHTML = clothing_termekek[3].dizajn_anyag_extrak2
		let list_item3 = document.createElement("li")
		list_item3.innerHTML = clothing_termekek[3].dizajn_anyag_extrak3
		let list_item4 = document.createElement("li")
		list_item4.innerHTML = clothing_termekek[3].dizajn_anyag_extrak4
		let list_item5 = document.createElement("li")
		list_item5.innerHTML = clothing_termekek[3].dizajn_anyag_extrak5
		let list_item6 = document.createElement("li")
		list_item6.innerHTML = clothing_termekek[3].dizajn_anyag_extrak6

		un_list_des.appendChild(list_item1)
		un_list_des.appendChild(list_item2)
		un_list_des.appendChild(list_item3)
		un_list_des.appendChild(list_item4)
		un_list_des.appendChild(list_item5)
		un_list_des.appendChild(list_item6)

		let list_item7 = document.createElement("li")
		list_item7.innerHTML = clothing_termekek[3].meret_szabas1
		let list_item8 = document.createElement("li")
		list_item8.innerHTML = clothing_termekek[3].meret_szabas2
		let list_item9 = document.createElement("li")
		list_item9.innerHTML = clothing_termekek[3].meret_szabas3

		un_list_meret.appendChild(list_item7)
		un_list_meret.appendChild(list_item8)
		un_list_meret.appendChild(list_item9)

		main_image.src="../kepek/clothing/FerfiJackAndJonesFarmer.png"
	}

	else if (productSzam == 17) {
		document.title = "Woman Only Blazer";

		oldalcim.innerHTML = "Woman Only Blazer"
		fejlec_cim.innerHTML = "Home / Products / Clothing / Woman Only Blazer"

		document.getElementById("product_nev").innerHTML = clothing_termekek[4].nev;

		document.getElementById("product_ar").innerHTML = clothing_termekek[4].price;
		
		let list_item1 = document.createElement("li")
		list_item1.innerHTML = clothing_termekek[4].dizajn_anyag_extrak1
		let list_item2 = document.createElement("li")
		list_item2.innerHTML = clothing_termekek[4].dizajn_anyag_extrak2
		let list_item3 = document.createElement("li")
		list_item3.innerHTML = clothing_termekek[4].dizajn_anyag_extrak3
		let list_item4 = document.createElement("li")
		list_item4.innerHTML = clothing_termekek[4].dizajn_anyag_extrak4
		let list_item5 = document.createElement("li")
		list_item5.innerHTML = clothing_termekek[4].dizajn_anyag_extrak5
		let list_item6 = document.createElement("li")
		list_item6.innerHTML = clothing_termekek[4].dizajn_anyag_extrak6

		un_list_des.appendChild(list_item1)
		un_list_des.appendChild(list_item2)
		un_list_des.appendChild(list_item3)
		un_list_des.appendChild(list_item4)
		un_list_des.appendChild(list_item5)
		un_list_des.appendChild(list_item6)

		let list_item7 = document.createElement("li")
		list_item7.innerHTML = clothing_termekek[4].meret_szabas1
		let list_item8 = document.createElement("li")
		list_item8.innerHTML = clothing_termekek[4].meret_szabas2
		let list_item9 = document.createElement("li")
		list_item9.innerHTML = clothing_termekek[4].meret_szabas3

		un_list_meret.appendChild(list_item7)
		un_list_meret.appendChild(list_item8)
		un_list_meret.appendChild(list_item9)

		main_image.src="../kepek/clothing/NoiOnlyBlezer.png"
	}

	else if (productSzam == 18) {
		document.title = "Men Karl Lagerfeld Shirt";

		oldalcim.innerHTML = "Men Karl Lagerfeld Shirt"
		fejlec_cim.innerHTML = "Home / Products / Clothing / Men Karl Lagerfeld Shirt"

		document.getElementById("product_nev").innerHTML = clothing_termekek[5].nev;

		document.getElementById("product_ar").innerHTML = clothing_termekek[5].price;
		
		let list_item1 = document.createElement("li")
		list_item1.innerHTML = clothing_termekek[5].dizajn_anyag_extrak1
		let list_item2 = document.createElement("li")
		list_item2.innerHTML = clothing_termekek[5].dizajn_anyag_extrak2
		let list_item3 = document.createElement("li")
		list_item3.innerHTML = clothing_termekek[5].dizajn_anyag_extrak3
		let list_item4 = document.createElement("li")
		list_item4.innerHTML = clothing_termekek[5].dizajn_anyag_extrak4
		let list_item5 = document.createElement("li")
		list_item5.innerHTML = clothing_termekek[5].dizajn_anyag_extrak5
		let list_item6 = document.createElement("li")
		list_item6.innerHTML = clothing_termekek[5].dizajn_anyag_extrak6

		un_list_des.appendChild(list_item1)
		un_list_des.appendChild(list_item2)
		un_list_des.appendChild(list_item3)
		un_list_des.appendChild(list_item4)
		un_list_des.appendChild(list_item5)
		un_list_des.appendChild(list_item6)

		let list_item7 = document.createElement("li")
		list_item7.innerHTML = clothing_termekek[5].meret_szabas1
		let list_item8 = document.createElement("li")
		list_item8.innerHTML = clothing_termekek[5].meret_szabas2
		let list_item9 = document.createElement("li")
		list_item9.innerHTML = clothing_termekek[5].meret_szabas3

		un_list_meret.appendChild(list_item7)
		un_list_meret.appendChild(list_item8)
		un_list_meret.appendChild(list_item9)

		main_image.src="../kepek/clothing/FerfiKarlLagerfeldPolo.png"
	}

	// MEN XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
	else if (productSzam == 19) {
		document.title = "Brown Hoodie";

		oldalcim.innerHTML = "Brown Hoodie"
		fejlec_cim.innerHTML = "Home / Products / Men / Brown Hoodie"

		document.getElementById("product_nev").innerHTML = men_termekek[0].nev;

		document.getElementById("product_ar").innerHTML = men_termekek[0].price;
		
		let list_item1 = document.createElement("li")
		list_item1.innerHTML = men_termekek[0].dizajn_anyag_extrak1
		let list_item2 = document.createElement("li")
		list_item2.innerHTML = men_termekek[0].dizajn_anyag_extrak2
		let list_item3 = document.createElement("li")
		list_item3.innerHTML = men_termekek[0].dizajn_anyag_extrak3
		let list_item4 = document.createElement("li")
		list_item4.innerHTML = men_termekek[0].dizajn_anyag_extrak4
		let list_item5 = document.createElement("li")
		list_item5.innerHTML = men_termekek[0].dizajn_anyag_extrak5
		let list_item6 = document.createElement("li")
		list_item6.innerHTML = men_termekek[0].dizajn_anyag_extrak6

		un_list_des.appendChild(list_item1)
		un_list_des.appendChild(list_item2)
		un_list_des.appendChild(list_item3)
		un_list_des.appendChild(list_item4)
		un_list_des.appendChild(list_item5)
		un_list_des.appendChild(list_item6)

		let list_item7 = document.createElement("li")
		list_item7.innerHTML = men_termekek[0].meret_szabas1
		let list_item8 = document.createElement("li")
		list_item8.innerHTML = men_termekek[0].meret_szabas2

		un_list_meret.appendChild(list_item7)
		un_list_meret.appendChild(list_item8)

		main_image.src="../kepek/men kepek/FerfiBarnaPulcsi.png"
	}

	else if (productSzam == 20) {
		document.title = "Baggy Jeans";

		oldalcim.innerHTML = "Baggy Jeans"
		fejlec_cim.innerHTML = "Home / Products / Men / Baggy Jeans"

		document.getElementById("product_nev").innerHTML = men_termekek[1].nev;

		document.getElementById("product_ar").innerHTML = men_termekek[1].price;
		
		let list_item1 = document.createElement("li")
		list_item1.innerHTML = men_termekek[1].dizajn_anyag_extrak1
		let list_item2 = document.createElement("li")
		list_item2.innerHTML = men_termekek[1].dizajn_anyag_extrak2
		let list_item3 = document.createElement("li")
		list_item3.innerHTML = men_termekek[1].dizajn_anyag_extrak3
		let list_item4 = document.createElement("li")
		list_item4.innerHTML = men_termekek[1].dizajn_anyag_extrak4
		let list_item5 = document.createElement("li")
		list_item5.innerHTML = men_termekek[1].dizajn_anyag_extrak5
		let list_item6 = document.createElement("li")
		list_item6.innerHTML = men_termekek[1].dizajn_anyag_extrak6

		un_list_des.appendChild(list_item1)
		un_list_des.appendChild(list_item2)
		un_list_des.appendChild(list_item3)
		un_list_des.appendChild(list_item4)
		un_list_des.appendChild(list_item5)
		un_list_des.appendChild(list_item6)

		let list_item7 = document.createElement("li")
		list_item7.innerHTML = men_termekek[1].meret_szabas1
		let list_item8 = document.createElement("li")
		list_item8.innerHTML = men_termekek[1].meret_szabas2

		un_list_meret.appendChild(list_item7)
		un_list_meret.appendChild(list_item8)

		main_image.src="../kepek/men kepek/FerfiFarmer.png"
	}

	else if (productSzam == 21) {
		document.title = "White T-Shirt";

		oldalcim.innerHTML = "White T-Shirt"
		fejlec_cim.innerHTML = "Home / Products / Men / White T-Shirt"

		document.getElementById("product_nev").innerHTML = men_termekek[2].nev;

		document.getElementById("product_ar").innerHTML = men_termekek[2].sale_price;
		document.getElementById("learazott").innerHTML = men_termekek[2].real_price;
		
		let list_item1 = document.createElement("li")
		list_item1.innerHTML = men_termekek[2].dizajn_anyag_extrak1
		let list_item2 = document.createElement("li")
		list_item2.innerHTML = men_termekek[2].dizajn_anyag_extrak2
		let list_item3 = document.createElement("li")
		list_item3.innerHTML = men_termekek[2].dizajn_anyag_extrak3
		let list_item4 = document.createElement("li")
		list_item4.innerHTML = men_termekek[2].dizajn_anyag_extrak4

		un_list_des.appendChild(list_item1)
		un_list_des.appendChild(list_item2)
		un_list_des.appendChild(list_item3)
		un_list_des.appendChild(list_item4)

		let list_item5 = document.createElement("li")
		list_item5.innerHTML = men_termekek[2].meret_szabas1
		let list_item6 = document.createElement("li")
		list_item6.innerHTML = men_termekek[2].meret_szabas2
		let list_item7 = document.createElement("li")
		list_item7.innerHTML = men_termekek[2].meret_szabas3

		un_list_meret.appendChild(list_item5)
		un_list_meret.appendChild(list_item6)
		un_list_meret.appendChild(list_item7)

		main_image.src="../kepek/men kepek/FerfiFeherPolo.png"
	}

	else if (productSzam == 22) {
		document.title = "Linen-Blend Shirt";

		oldalcim.innerHTML = "Linen-Blend Shirt"
		fejlec_cim.innerHTML = "Home / Products / Men / Linen-Blend Shirt"

		document.getElementById("product_nev").innerHTML = men_termekek[3].nev;

		document.getElementById("product_ar").innerHTML = men_termekek[3].sale_price;
		document.getElementById("learazott").innerHTML = men_termekek[3].real_price;
		
		let list_item1 = document.createElement("li")
		list_item1.innerHTML = men_termekek[3].dizajn_anyag_extrak1
		let list_item2 = document.createElement("li")
		list_item2.innerHTML = men_termekek[3].dizajn_anyag_extrak2
		let list_item3 = document.createElement("li")
		list_item3.innerHTML = men_termekek[3].dizajn_anyag_extrak3
		let list_item4 = document.createElement("li")
		list_item4.innerHTML = men_termekek[3].dizajn_anyag_extrak4
		let list_item5 = document.createElement("li")
		list_item5.innerHTML = men_termekek[3].dizajn_anyag_extrak5
		let list_item6 = document.createElement("li")
		list_item6.innerHTML = men_termekek[3].dizajn_anyag_extrak6
		let list_item7 = document.createElement("li")
		list_item7.innerHTML = men_termekek[3].dizajn_anyag_extrak7

		un_list_des.appendChild(list_item1)
		un_list_des.appendChild(list_item2)
		un_list_des.appendChild(list_item3)
		un_list_des.appendChild(list_item4)
		un_list_des.appendChild(list_item5)
		un_list_des.appendChild(list_item6)
		un_list_des.appendChild(list_item7)

		let list_item8 = document.createElement("li")
		list_item8.innerHTML = men_termekek[3].meret_szabas1
		let list_item9 = document.createElement("li")
		list_item9.innerHTML = men_termekek[3].meret_szabas2
		let list_item10 = document.createElement("li")
		list_item10.innerHTML = men_termekek[3].meret_szabas3

		un_list_meret.appendChild(list_item8)
		un_list_meret.appendChild(list_item9)
		un_list_meret.appendChild(list_item10)

		main_image.src="../kepek/men kepek/FerfiIng.png"
	}

	else if (productSzam == 23) {
		document.title = "Jacket";

		oldalcim.innerHTML = "Jacket"
		fejlec_cim.innerHTML = "Home / Products / Men / Jacket"

		document.getElementById("product_nev").innerHTML = men_termekek[4].nev;

		document.getElementById("product_ar").innerHTML = men_termekek[4].price;
		
		let list_item1 = document.createElement("li")
		list_item1.innerHTML = men_termekek[4].dizajn_anyag_extrak1
		let list_item2 = document.createElement("li")
		list_item2.innerHTML = men_termekek[4].dizajn_anyag_extrak2
		let list_item3 = document.createElement("li")
		list_item3.innerHTML = men_termekek[4].dizajn_anyag_extrak3
		let list_item4 = document.createElement("li")
		list_item4.innerHTML = men_termekek[4].dizajn_anyag_extrak4
		let list_item5 = document.createElement("li")
		list_item5.innerHTML = men_termekek[4].dizajn_anyag_extrak5
		let list_item6 = document.createElement("li")
		list_item6.innerHTML = men_termekek[4].dizajn_anyag_extrak6
		let list_item7 = document.createElement("li")
		list_item7.innerHTML = men_termekek[4].dizajn_anyag_extrak7
		let list_item8 = document.createElement("li")
		list_item8.innerHTML = men_termekek[4].dizajn_anyag_extrak8
		let list_item9 = document.createElement("li")
		list_item9.innerHTML = men_termekek[4].dizajn_anyag_extrak9

		un_list_des.appendChild(list_item1)
		un_list_des.appendChild(list_item2)
		un_list_des.appendChild(list_item3)
		un_list_des.appendChild(list_item4)
		un_list_des.appendChild(list_item5)
		un_list_des.appendChild(list_item6)
		un_list_des.appendChild(list_item7)
		un_list_des.appendChild(list_item8)
		un_list_des.appendChild(list_item9)

		let list_item10 = document.createElement("li")
		list_item10.innerHTML = men_termekek[4].meret_szabas1

		un_list_meret.appendChild(list_item10)

		main_image.src="../kepek/men kepek/FerfiKabat.png"
	}

	else if (productSzam == 24) {
		document.title = "Printed Tops";

		oldalcim.innerHTML = "Printed Tops"
		fejlec_cim.innerHTML = "Home / Products / Men / Printed Tops"

		document.getElementById("product_nev").innerHTML = men_termekek[5].nev;

		document.getElementById("product_ar").innerHTML = men_termekek[5].price;
		
		let list_item1 = document.createElement("li")
		list_item1.innerHTML = men_termekek[5].dizajn_anyag_extrak1
		let list_item2 = document.createElement("li")
		list_item2.innerHTML = men_termekek[5].dizajn_anyag_extrak2
		let list_item3 = document.createElement("li")
		list_item3.innerHTML = men_termekek[5].dizajn_anyag_extrak3
		let list_item4 = document.createElement("li")
		list_item4.innerHTML = men_termekek[5].dizajn_anyag_extrak4
		let list_item5 = document.createElement("li")
		list_item5.innerHTML = men_termekek[5].dizajn_anyag_extrak5

		un_list_des.appendChild(list_item1)
		un_list_des.appendChild(list_item2)
		un_list_des.appendChild(list_item3)
		un_list_des.appendChild(list_item4)
		un_list_des.appendChild(list_item5)

		let list_item6 = document.createElement("li")
		list_item6.innerHTML = men_termekek[5].meret_szabas1
		let list_item7 = document.createElement("li")
		list_item7.innerHTML = men_termekek[5].meret_szabas2
		let list_item8 = document.createElement("li")
		list_item8.innerHTML = men_termekek[5].meret_szabas3

		un_list_meret.appendChild(list_item6)
		un_list_meret.appendChild(list_item7)
		un_list_meret.appendChild(list_item8)

		main_image.src="../kepek/men kepek/FerfiPolo.png"
	}
}


let accessories_termekek = [
	//1
	{
		nev:"Black Karl Lagerfeld Shopper bag 'IKONIK'",
		price:"$85.00",

		dizajn_anyag_extrak1:"Logó nyomtatás",
		dizajn_anyag_extrak2:"Pamut",
		dizajn_anyag_extrak3:"Textil",

		meret_szabas1:"Öv- / fogantyú hossza: Hosszú vállpánt / crossbody",
		meret_szabas2:"Öv- / fogantyú hossza: Rövid vállpánt / fogantyú"
	},

	//2
	{
		nev:"Black FURLA Shopper bag 'GOCCIA'",
		sale_price:"$290.00",
		real_price:"$350.00",

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

	//3
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

	//4
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

	//5
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

	//6
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

let casual_termekek = [
	//1
	{
		nev:"Tight-fit Collared T-Shirt",
		price:"$35.00",

		dizajn_anyag_extrak1:"Univerzális színek",
		dizajn_anyag_extrak2:"Pamut",
		dizajn_anyag_extrak3:"Galléros póló",
		dizajn_anyag_extrak4:"Levarrt szegély",
		dizajn_anyag_extrak5:"Mandzsetta-/bordázott gallér",
		dizajn_anyag_extrak6:"Címkehímzés",
		dizajn_anyag_extrak7:"Ton inTon tűzések",
		dizajn_anyag_extrak8:"Lágy fogantyú",
		dizajn_anyag_extrak9:"Gombos lezárás",

		meret_szabas1:"Csomag: 1 darabos csomag",
		meret_szabas2:"Ujjhossz: Negyedes ujj",
		meret_szabas3:"Hossz: Normál hosszúságú",
		meret_szabas4:"Fazon: normál fazon"
	},

	//2
	{
		nev:"Gentlemen's Casual T-Shirt",
		price:"$35.00",

		dizajn_anyag_extrak1:"Univerzális színek",
		dizajn_anyag_extrak2:"Dzsörzé",
		dizajn_anyag_extrak3:"Kereknyakú kivágás",
		dizajn_anyag_extrak4:"Levarrt szegély",
		dizajn_anyag_extrak5:"Mandzsetta-/bordázott gallér",
		dizajn_anyag_extrak6:"Egyenes alsó szegély",
		dizajn_anyag_extrak7:"Ton inTon tűzések",
		dizajn_anyag_extrak8:"Lágy fogantyú",
		dizajn_anyag_extrak9:"Nyakszalag",

		meret_szabas1:"Csomag: 1 darabos csomag",
		meret_szabas2:"Ujjhossz: Negyedes ujj",
		meret_szabas3:"Hossz: Normál hosszúságú",
		meret_szabas4:"Fazon: normál fazon"
	},

	//3
	{
		nev:"Brixton Hat 'WESLEY FEDORA'",
		real_price:"$22.00",
		sale_price:"$17.00",

		dizajn_anyag_extrak1:"Univerzális színek",
		dizajn_anyag_extrak2:"Filc",
		dizajn_anyag_extrak3:"Filc sapka",

		meret_szabas1:"Univerzális méret/Állítható",
	},

	//4
	{
		nev:"Black Maze Jacket 'Berwick'",
		real_price:"$100.00",
		sale_price:"$50.00",

		dizajn_anyag_extrak1:"Bőr",
		dizajn_anyag_extrak2:"Kerékpáros dzseki",
		dizajn_anyag_extrak3:"Nyomógombos zár",
		dizajn_anyag_extrak4:"Cipzár",
		dizajn_anyag_extrak5:"Hátrészvarrás",
		dizajn_anyag_extrak6:"Mellbevarrás",
		dizajn_anyag_extrak7:"Címke",
		dizajn_anyag_extrak8:"Ton inTon tűzések",
		dizajn_anyag_extrak9:"Puha fogantyú",

		meret_szabas1:"Fazon: karcsúsított fazon"
	},

	//5
	{
		nev:"Printed Floral Top Dress 'Joaline'",
		price:"$75.00",

		dizajn_anyag_extrak1:"Univerzális színek",
		dizajn_anyag_extrak2:"V-kivágás",
		dizajn_anyag_extrak3:"Fodor",
		dizajn_anyag_extrak4:"Redőzött",
		dizajn_anyag_extrak5:"Levarrt szegély",
		dizajn_anyag_extrak6:"Hátcipzár",
		dizajn_anyag_extrak7:"Húzott derék",
		dizajn_anyag_extrak8:"Ton inTon tűzések",
		dizajn_anyag_extrak9:"Folyó anyag",

		meret_szabas1:"Ujjhossz: Negyedes ujj",
		meret_szabas2:"Hossz: Hosszú/maxi",
		meret_szabas3:"Fazon: normál fazon",
		meret_szabas4:"Vágás: Beépített"
	},

	//6
	{
		nev:"Lauren Ralph Lauren Night Tops 'Leonidas'",
		price:"$45.00",

		dizajn_anyag_extrak1:"Univerzális színek",
		dizajn_anyag_extrak2:"V-kivágás",
		dizajn_anyag_extrak3:"Átlapolós dizájn",
		dizajn_anyag_extrak4:"Redőzött",
		dizajn_anyag_extrak5:"Levarrt szegély",
		dizajn_anyag_extrak6:"Oldalhasíték",
		dizajn_anyag_extrak7:"Mély kivágás/dekoltázs",
		dizajn_anyag_extrak8:"Ton inTon tűzések",
		dizajn_anyag_extrak9:"Lágy fogantyú",

		meret_szabas1:"Ujjhossz: Negyedes ujj",
		meret_szabas2:"Hossz: Hosszú/maxi",
		meret_szabas3:"Fazon: normál fazon",
		meret_szabas4:"Vágás: Beépített"
	},
]

let clothing_termekek = [
	//1
	{
		nev:"Men adidas workout hoodie",
		real_price:"$35.00",
		sale_price:"$19.00",

		dizajn_anyag_extrak1:"Univerzális színek",
		dizajn_anyag_extrak2:"Pamut",
		dizajn_anyag_extrak3:"Kapucni",
		dizajn_anyag_extrak4:"Címke",
		dizajn_anyag_extrak5:"Ton inTon tűzések",

		meret_szabas1:"Hossz: Normál hosszúságú",
		meret_szabas2:"Fazon: normál fazon"
	},

	//2
	{
		nev:"Women Hugo T-Shirt 'Classic 4'",
		price: "$57.00",

		dizajn_anyag_extrak1:"Univerzális színek",
		dizajn_anyag_extrak2:"Logó nyomtatás",
		dizajn_anyag_extrak3:"Dzsörzé",
		dizajn_anyag_extrak4:"Levarrt szegély",
		dizajn_anyag_extrak5:"Ton inTon tűzések",

		meret_szabas1:"Ujjhossz: Negyedes ujj",
		meret_szabas2:"Hossz: Normál hosszúságú",
		meret_szabas3:"Fazon: karcsúsított fazon"
	},

	//3
	{
		nev:"Woman LEVI'S® Training Hoodie 'ANNESSA'",
		real_price:"$65.00",
		sale_price:"$52.00",

		dizajn_anyag_extrak1:"Univerzális színek",
		dizajn_anyag_extrak2:"Melegítőanyag",
		dizajn_anyag_extrak3:"Kereknyakú kivágás",
		dizajn_anyag_extrak4:"Bordás mandzsetta",
		dizajn_anyag_extrak5:"Puha, bolyhozott belső oldal",
		dizajn_anyag_extrak6:"Címke nyomtatás",

		meret_szabas1:"Ujjhossz: Hosszú ujj",
		meret_szabas2:"Hossz: Normál hosszúságú",
		meret_szabas3:"Fazon: laza fazon",
	},

	//4
	{
		nev:"JACK & JONES Slimfit Jeans 'JJIGlenn JJOriginal'",
		price:"$43.00",

		dizajn_anyag_extrak1:"Farmer",
		dizajn_anyag_extrak2:"Enyhén koptatott",
		dizajn_anyag_extrak3:"Levarrt szegély",
		dizajn_anyag_extrak4:"Nadrághasíték gombja",
		dizajn_anyag_extrak5:"Címkedarab/címkezászló",
		dizajn_anyag_extrak6:"Gombos lezárás",

		meret_szabas1:"Ujjhossz: Hosszú ujj",
		meret_szabas2:"Hossz: Hosszú/maxi",
		meret_szabas3:"Fazon: slimfit",
	},

	//5
	{
		nev:"Women's ONLY Blazer 'Agently'",
		price:"$55.00",

		dizajn_anyag_extrak1:"Univerzális színek",
		dizajn_anyag_extrak2:"Állógallér",
		dizajn_anyag_extrak3:"Redőzött",
		dizajn_anyag_extrak4:"Zár nélkül",
		dizajn_anyag_extrak5:"Ton inTon tűzések",
		dizajn_anyag_extrak6:"Béleletlen",

		meret_szabas1:"Ujjhossz: Háromnegyedes ujj",
		meret_szabas2:"Hossz: Normál hosszúságú",
		meret_szabas3:"Fazon: normál fazon",
	},

	//6
	{
		nev:"Black and Gold Karl Lagerfeld Men's T-Shirt",
		price:"$55.00",

		dizajn_anyag_extrak1:"Logó nyomtatás",
		dizajn_anyag_extrak2:"Dzsörzé",
		dizajn_anyag_extrak3:"Kereknyakú kivágás",
		dizajn_anyag_extrak4:"Levarrt szegély",
		dizajn_anyag_extrak5:"Mandzsetta-/bordázott gallér",
		dizajn_anyag_extrak6:"Ton inTon tűzések",

		meret_szabas1:"Ujjhossz: Negyedes ujj",
		meret_szabas2:"Hossz: Normál hosszúságú",
		meret_szabas3:"Fazon: normál fazon",
	},
]

let men_termekek = [
	//1
	{
		nev:"Brown Hoodie 'Henrique'",
		price:"$25.00",

		dizajn_anyag_extrak1:"Univerzális színek",
		dizajn_anyag_extrak2:"Kapucnival",
		dizajn_anyag_extrak3:"Kapucni bujtatott zsinórral",
		dizajn_anyag_extrak4:"Bordás mandzsetta",
		dizajn_anyag_extrak5:"Strukturált fogantyú",
		dizajn_anyag_extrak6:"Címkehímzés",

		meret_szabas1:"Hossz: Normál hosszúságú",
		meret_szabas2:"Fazon: normál fazon"
	},

	//2
	{
		nev:"Black Pull&Bear Baggy Cargo Jeans",
		price:"$59.00",

		dizajn_anyag_extrak1:"Univerzális színek",
		dizajn_anyag_extrak2:"Farmer",
		dizajn_anyag_extrak3:"Sötét",
		dizajn_anyag_extrak4:"Cipzár",
		dizajn_anyag_extrak5:"Övbujtatók",
		dizajn_anyag_extrak6:"Erős szövet",

		meret_szabas1:"Hossz: Hosszú/maxi",
		meret_szabas2:"Fazon: Baggy",
	},

	//3
	{
		nev:"Peanuts Racing Team T-Shirt",
		real_price:"$32.00",
		sale_price:"$17.00",

		dizajn_anyag_extrak1:"Univerzális színek",
		dizajn_anyag_extrak2:"Dzsörzé",
		dizajn_anyag_extrak3:"Kereknyakú kivágás",
		dizajn_anyag_extrak4:"Ton inTon tűzések",

		meret_szabas1:"Ujjhossz: Negyedes ujj",
		meret_szabas2:"Hossz: Normál hosszúságú",
		meret_szabas3:"Fazon: normál fazon",
	},

	//4
	{
		nev:"Regular fit Linen-Blend 'FLEX'",
		real_price:"$80.00",
		sale_price:"$58.00",

		dizajn_anyag_extrak1:"Univerzális színek",
		dizajn_anyag_extrak2:"Vászon",
		dizajn_anyag_extrak3:"Végiggombos",
		dizajn_anyag_extrak4:"Ráültetett gombszegély",
		dizajn_anyag_extrak5:"Egyenes alsó szegély",
		dizajn_anyag_extrak6:"Ton inTon tűzések",
		dizajn_anyag_extrak7:"Gombos lezárás",

		meret_szabas1:"Ujjhossz: Negyedes ujj",
		meret_szabas2:"Fazon: Regular fit"
	},

	//5
	{
		nev:"Taupe G-STAR Windbreaker",
		price:"$70.00",

		dizajn_anyag_extrak1:"Univerzális színek",
		dizajn_anyag_extrak2:"Cipzár",
		dizajn_anyag_extrak3:"Bordás mandzsetta",
		dizajn_anyag_extrak4:"Állógallér",
		dizajn_anyag_extrak5:"Oldalsó zsebek",
		dizajn_anyag_extrak6:"Címke",
		dizajn_anyag_extrak7:"Ton inTon tűzések",
		dizajn_anyag_extrak8:"Sima szövet",
		dizajn_anyag_extrak9:"Enyhén bélelt",

		meret_szabas1:"Fazon: normál fazon",
	},

	//6
	{
		nev:"Kani Printed T-Shirt",
		price:"$40.00",

		dizajn_anyag_extrak1:"Logó nyomtatás",
		dizajn_anyag_extrak2:"Univerzális színek",
		dizajn_anyag_extrak3:"V-kivágás",
		dizajn_anyag_extrak4:"Ton inTon tűzések",
		dizajn_anyag_extrak5:"Lágy fogantyú",

		meret_szabas1:"Ujjhossz: Negyedes ujj",
		meret_szabas2:"Hossz: Normál hosszúság",
		meret_szabas3:"Fazon: normál fazon",
	},
]

feltoltAdat();