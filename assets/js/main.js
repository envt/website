(function() {
	"use strict";

	const select = (el, all = false) => {
		el = el.trim()
		if (all) {
			return [...document.querySelectorAll(el)]
		} else {
			return document.querySelector(el)
		}
	}

	const handleScrollEvent = () => {
		let backToTop = select('#back-to-top')

		if (window.scrollY > 100) {
			backToTop.classList.add('active')
		} else {
			backToTop.classList.remove('active')
		}
	}

	window.addEventListener('load', handleScrollEvent)
	document.addEventListener('scroll', handleScrollEvent)

	let preloader = select('#preloader');
	if (preloader) {
		window.addEventListener('load', () => {
			setTimeout(() => preloader.remove(), 600);
		});
	}

	window.addEventListener('load', () => {
		AOS.init({
			duration: 800,
			easing: 'ease-in-out',
			once: false,
			mirror: true,
  		debounceDelay: 50,
		})
	});

})()