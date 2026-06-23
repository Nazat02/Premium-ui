// =======================
// Theme Toggle
// =======================


const themeBtn = document.getElementById("themeBtn");


let dark = true;


themeBtn.addEventListener("click",()=>{


dark = !dark;


if(!dark){

document.documentElement.style.setProperty(
"--bg",
"#f8fafc"
);


document.documentElement.style.setProperty(
"--text",
"#111827"
);


document.documentElement.style.setProperty(
"--muted",
"#475569"
);


document.body.style.background =
"radial-gradient(circle at top,#c7d2fe,transparent 40%),#f8fafc";


themeBtn.innerHTML="🌙";


}

else{


document.documentElement.style.setProperty(
"--bg",
"#080b16"
);


document.documentElement.style.setProperty(
"--text",
"#ffffff"
);


document.documentElement.style.setProperty(
"--muted",
"#9ca3af"
);


document.body.style.background =
"radial-gradient(circle at top,#1e1b4b,transparent 35%),#080b16";


themeBtn.innerHTML="☀";


}



});





// =======================
// Smooth scrolling
// =======================


document.querySelectorAll("a").forEach(link=>{


link.addEventListener("click",e=>{

e.preventDefault();


window.scrollTo({

top:0,
behavior:"smooth"

});


});


});






// =======================
// Reveal Animation
// =======================


const revealElements =
document.querySelectorAll(
".feature-card,.plan,.card"
);



const observer =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";

entry.target.style.transform=
"translateY(0)";


}



});



},
{
threshold:.2
}
);





revealElements.forEach(el=>{


el.style.opacity="0";

el.style.transform=
"translateY(50px)";


el.style.transition=
"all .8s ease";


observer.observe(el);



});







// =======================
// Button Interaction
// =======================


const buttons =
document.querySelectorAll("button");



buttons.forEach(btn=>{


btn.addEventListener(
"mousedown",
()=>{


btn.style.transform=
"scale(.95)";


});


btn.addEventListener(
"mouseup",
()=>{


btn.style.transform=
"scale(1)";


});



});


// Cursor glow effect


const glow =
document.createElement("div");


glow.className="cursor-glow";


document.body.appendChild(glow);



document.addEventListener(
"mousemove",
(e)=>{


glow.style.left =
e.clientX+"px";


glow.style.top =
e.clientY+"px";



});



// =======================
// Dynamic Year Footer
// =======================


const footer =
document.querySelector("footer");


const year =
new Date().getFullYear();



footer.innerHTML +=
`<small>© ${year} Nova Studio</small>`;
