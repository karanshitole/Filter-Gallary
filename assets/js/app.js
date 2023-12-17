const cl = console.log;

const colornames= document.getElementById("colornames");

const allDivs=[...document.querySelectorAll(".all")]


const oncolorchange = (eve) =>{
	let colorval= eve.target.value;
	cl(colorval)
	allDivs.forEach(div =>{
		div.classList.add("d-none")
	})


let showDivs=[...document.getElementsByClassName(colorval)];
cl(showDivs)

showDivs.forEach(div =>{
	div.classList.remove('d-none')
})

}

colornames.addEventListener("change", oncolorchange)
