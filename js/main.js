window.addEventListener('scroll', e => {
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
})

//EFECTO SCROLL
let progress = document.getElementById('progress_bar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}

//NAV
const nav =document.querySelector("#nav");
const abrir =document.querySelector("#abrir");
const cerrar =document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
	nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
	nav.classList.remove("visible");
})

//SMOOTH SCROLLING
$(document).ready(function(){
	let ir_a = $(".desplazar");

	ir_a.click(function(evento){
		evento.preventDefault();
		$("body, html").animate(
		{
			scrollTop: $(this.hash).offset().top,
		}, 150);
	})
})

//LOADER
window.onload = function(){
	$('#onload').fadeOut();
	$('body').removeClass('hidden');
}