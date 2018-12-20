const Main = (() => {
	document.getElementById("igraj").addEventListener("click", () => {
	document.querySelector(".sucelje").classList.add("skriveno");
	document.querySelector(".main").classList.remove("skriveno");
	ime1 = document.getElementById("igrac1").value;
	ime2 = document.getElementById("igrac2").value;
	korisnik1 = Igrac(ime1,"X");
	korisnik2 = Igrac(ime2,"O");	
	info = document.querySelector("#info_igrac");
	info.innerHTML = `${korisnik1.ime}`;
	});
})();
const Igrac = (ime, marker) => {
	return {ime, marker};
};
const Polje = () => {
	let polje = ["","","","","","","","",""];
	return (index, marker) => {
		polje[index] = marker;
		uvjeti_pobjede(polje);
	};
};
const uvjeti_pobjede = (pl) => {
	let pobjeda =[
	[pl[0],pl[1],pl[2]].join(""),
	[pl[3],pl[4],pl[5]].join(""),
	[pl[6],pl[7],pl[8]].join(""),
	[pl[0],pl[3],pl[6]].join(""),
	[pl[1],pl[4],pl[7]].join(""),
	[pl[2],pl[5],pl[8]].join(""),
	[pl[0],pl[4],pl[8]].join(""),
	[pl[2],pl[4],pl[6]].join(""),
	];
	pobjeda.forEach(e => {
		if (e == "XXX" || e == "OOO") pobjednik(e); 
	});
	let izjednaceno = pl.join("");
		if (izjednaceno.length == 9) {
	 		pobjednik();
	 		document.getElementById("pobjednik").innerHTML = "Igra izjednačena!";
	 	}
};
function pobjednik(e) {
	document.getElementById("pobjednik").classList.remove("skriveno");
	document.getElementById("igraci").classList.add("skriveno");
	document.getElementById("igrati_ponovo").classList.remove("skriveno");
	if (e == "XXX") info_pobjednik.innerHTML = `${korisnik1.ime}`;
	 	else info_pobjednik.innerHTML = `${korisnik2.ime}`;
}
const igrati_ponovo = (() => {
	var btn_ponovo = document.getElementById("igrati_ponovo")
	btn_ponovo.addEventListener("click", () => {
		btn_ponovo.classList.add("skriveno");
		isprazni_polje();
});
})();
function isprazni_polje(){
	location.reload();
}
const igraj = (() => {
	const bilo_koji = false;
	const input = Polje();
	const plocice = document.querySelectorAll(".plocica"); 
	let tura = 0;	
	plocice.forEach(mreza => {
		mreza.addEventListener("click", () => {
		if (document.getElementById("pobjednik").classList == "skriveno") {
			if(mreza.childNodes.length == 0) {
				const para = document.createElement("p"); 
				mreza.appendChild(para);
				let m = "";
				const index = parseInt(mreza.id);	
				if (tura % 2 == 0) {
					m = korisnik1.marker;
					info.innerHTML = `${korisnik2.ime}`;
				} 
				else {
					m = korisnik2.marker;
					info.innerHTML = `${korisnik1.ime}`;
				} 
				input(index, m);
				const text = document.createTextNode(m);
				para.appendChild(text);
				tura++;
				} 
			}
		});
	});
})();