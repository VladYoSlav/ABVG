/*Слайдер с точками-переключателями*/
/*Слайдер на главной странице*/
var slides = document.querySelectorAll('.slider-slides .slider-slide');
var dots = document.querySelectorAll('.slider-dots .slider-dot');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,5000);
function resetSlideInterval() {
	clearInterval(slideInterval);
	slideInterval = setInterval(nextSlide,5000);
}
function nextSlide() {
	slides[currentSlide].className = 'slider-slide';
	dots[currentSlide].className = 'slider-dot';
	currentSlide = (currentSlide + 1)%slides.length;
	slides[currentSlide].className = 'slider-slide slide-visible';
	dots[currentSlide].className = 'slider-dot dot-active';
	resetSlideInterval();

}
function prevSlide() {
	slides[currentSlide].className = 'slider-slide';
	dots[currentSlide].className = 'slider-dot';
	if ((currentSlide - 1) < 0){
		currentSlide = slides.length - 1;
	}
	else{
		currentSlide = (currentSlide - 1)%slides.length;
	}
	slides[currentSlide].className = 'slider-slide slide-visible';
	dots[currentSlide].className = 'slider-dot dot-active';
	resetSlideInterval();
}
function showSlide(n) {
	slides[currentSlide].className = 'slider-slide';
	dots[currentSlide].className = 'slider-dot';
	currentSlide = n;
	slides[currentSlide].className = 'slider-slide slide-visible';
	dots[currentSlide].className = 'slider-dot dot-active';
	resetSlideInterval();
}
/*Слайдер осмотра товара*/
var itemSlides = document.querySelectorAll('.item-slider-slides .item-slider-slide');
var dots = document.querySelectorAll('.slider-dots .slider-dot');
var currentItemSlide = 0;
function nextItemSlide() {
	itemSlides[currentItemSlide].className = 'item-slider-slide';
	dots[currentItemSlide].className = 'slider-dot';
	currentItemSlide = (currentItemSlide + 1)%itemSlides.length;
	itemSlides[currentItemSlide].className = 'item-slider-slide slide-visible';
	dots[currentItemSlide].className = 'slider-dot dot-active';
}
function prevItemSlide() {
	itemSlides[currentItemSlide].className = 'item-slider-slide';
	dots[currentItemSlide].className = 'slider-dot';
	if ((currentItemSlide - 1) < 0){
		currentItemSlide = itemSlides.length - 1;
	}
	else{
		currentItemSlide = (currentItemSlide - 1)%itemSlides.length;
	}
	itemSlides[currentItemSlide].className = 'item-slider-slide slide-visible';
	dots[currentItemSlide].className = 'slider-dot dot-active';
}
function showItemSlide(n) {
	itemSlides[currentItemSlide].className = 'item-slider-slide';
	dots[currentItemSlide].className = 'slider-dot';
	currentItemSlide = n;
	itemSlides[currentItemSlide].className = 'item-slider-slide slide-visible';
	dots[currentItemSlide].className = 'slider-dot dot-active';
}
/*Слайдер с кнопками-переключателями*/
/*Слайдер описания/характеристик*/
var charDescSlides = document.querySelectorAll('.char-desc-slider-slides .char-desc-slider-slide');
var switchers = document.querySelectorAll('.slider-switchers .slider-switcher');
var currentСharDescSlide = 0;
function showСharDescSlide(n) {
	charDescSlides[currentСharDescSlide].className = 'char-desc-slider-slide';
	switchers[currentСharDescSlide].className = 'slider-switcher interactive-gradient';
	currentСharDescSlide = n;
	charDescSlides[currentСharDescSlide].className = 'char-desc-slider-slide slide-visible';
	switchers[currentСharDescSlide].className = 'slider-switcher slider-switcher-active interactive-gradient';
}
/*Слайдер адрессов/карты*/
var adressesMapSlides = document.querySelectorAll('.adresses-map-slider-slides .adresses-map-slider-slide');
var switchers = document.querySelectorAll('.slider-switchers .slider-switcher');
var currentAdressesMapSlide = 0;
function showAdressesMapSlide(n) {
	adressesMapSlides[currentAdressesMapSlide].className = 'adresses-map-slider-slide';
	switchers[currentAdressesMapSlide].className = 'slider-switcher interactive-gradient';
	currentAdressesMapSlide = n;
	adressesMapSlides[currentAdressesMapSlide].className = 'adresses-map-slider-slide slide-visible';
	switchers[currentAdressesMapSlide].className = 'slider-switcher slider-switcher-active interactive-gradient';
}
/*Валидация формы обратной связи*/
var inputs = document.querySelectorAll('.feedback-form-table .feedback-form-important-area');
var fails = document.querySelectorAll('.feedback-form-table .validation-fail');
var checkbox = document.getElementById('feedback-form-checkbox');
var checkboxFail = document.getElementById('checkbox-validation-failed');
var existenceOfFails = false;
function validateFeedbackForm() {
	existenceOfFails = false;
	validateFeedbackFormInputs();
	if (existenceOfFails == true){
		window.scrollTo(0, 130);
	}
	else{
		document.location.href = '../index.html';
	}
}
function validateFeedbackFormInputs() {
	checkboxFail.style.visibility = 'hidden';
	if (checkbox.checked == false) {
		checkbox.addEventListener('click', resetFeedbackValidation, true);
		checkboxFail.style.visibility = 'visible';
		existenceOfFails = true;
	}
	for (var i = 0; i < inputs.length; i++) {
		fails[i].style.visibility = 'hidden';
		inputs[i].className = 'feedback-form-important-area';
		if (inputs[i].value == ""){
			inputs[i].addEventListener('click', resetFeedbackValidation, true);
			inputs[i].className = 'feedback-form-important-area input-validation-failed';
			fails[i].style.visibility = 'visible';
			existenceOfFails = true;
		}
	}
}
function resetFeedbackValidation() {
	setInterval(validateFeedbackFormInputs,0);
}
/*Интерактивный бэкграунд*/
var XCoordsInInteractiveGradient = 0;
var YCoordsInInteractiveGradient = 0;
var interactiveGradients = document.querySelectorAll('.interactive-gradient');
for (var i = 0; i < interactiveGradients.length; i++) {
	interactiveGradients[i].addEventListener('mousemove',interactiveGradient, true);
	interactiveGradients[i].addEventListener('mouseout',resetInteractiveGradient, true);
}
function interactiveGradient() {
	XCoordsInInteractiveGradient = event.offsetX==undefined?event.layerX:event.offsetX;
	YCoordsInInteractiveGradient = event.offsetY==undefined?event.layerY:event.offsetY;
	if (XCoordsInInteractiveGradient > this.offsetWidth) {
		XCoordsInInteractiveGradient = this.offsetWidth;
	}
	if (YCoordsInInteractiveGradient > this.offsetHeight) {
		YCoordsInInteractiveGradient = this.offsetHeight;
	}
	if (XCoordsInInteractiveGradient < 0) {
		XCoordsInInteractiveGradient = 0;
	}
	if (YCoordsInInteractiveGradient < 0) {
		YCoordsInInteractiveGradient = 0;
	}
	this.style.backgroundPositionX = -XCoordsInInteractiveGradient + 'px';
	this.style.backgroundPositionY = -YCoordsInInteractiveGradient +'px';
}
function resetInteractiveGradient() {
	this.style.backgroundPositionX = '0%';
	this.style.backgroundPositionY = '50%';
}
/*Увеличенный просмотр товара*/
var increasedViewHelpers = document.querySelectorAll('.slider-slide-item-increased-view-helper');
var increasedViewWindows = document.querySelectorAll('.slider-slide-item-increased-view');
for (var i = 0; i < increasedViewHelpers.length; i++) {
	increasedViewHelpers[i].addEventListener('mousemove',increasedViewHelper, true);
	increasedViewHelpers[i].addEventListener('mouseout',function(){
		for (var i = 0; i < increasedViewWindows.length; i++) {
		increasedViewWindows[i].style.display = 'none';
		}
	}, true);
}
var XCoordsInIncreasedViewHelper = 0;
var YCoordsInIncreasedViewHelper = 0;
function increasedViewHelper() {
	XCoordsInIncreasedViewHelper = event.offsetX==undefined?event.layerX:event.offsetX - 100;
	YCoordsInIncreasedViewHelper = event.offsetY==undefined?event.layerY:event.offsetY - 75;
	if (XCoordsInIncreasedViewHelper < 0) {
		XCoordsInIncreasedViewHelper = 0;
	}
	if (YCoordsInIncreasedViewHelper < 0) {
		YCoordsInIncreasedViewHelper = 0;
	}
	if (XCoordsInIncreasedViewHelper > 175) {
		XCoordsInIncreasedViewHelper = 175;
	}
	if (YCoordsInIncreasedViewHelper > 114) {
		YCoordsInIncreasedViewHelper = 114;
	}
	this.style.backgroundPositionX = XCoordsInIncreasedViewHelper + 'px';
	this.style.backgroundPositionY = YCoordsInIncreasedViewHelper +'px';
	increasedViewWindow();
}
function increasedViewWindow() {
	for (var i = 0; i < increasedViewWindows.length; i++) {
		increasedViewWindows[i].style.display = 'block';
		increasedViewWindows[i].style.backgroundPositionX = -XCoordsInIncreasedViewHelper + 'px';
		increasedViewWindows[i].style.backgroundPositionY = -YCoordsInIncreasedViewHelper + 'px';
	}
}