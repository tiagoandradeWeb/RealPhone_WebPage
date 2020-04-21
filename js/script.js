var circle = document.querySelector('.circle');
var upBtn = document.querySelector('.upBtn');
var downBtn = document.querySelector('.downBtn');

var rotateValue = circle.style.transform;
var rotateSum;

upBtn.addEventListener('click', function(){
	rotateSum = rotateValue + "rotate(-90deg)";
	circle.style.transform = rotateSum;
	rotateValue = rotateSum;
});

downBtn.addEventListener('click', function(){
	rotateSum = rotateValue + "rotate(90deg)";
	circle.style.transform = rotateSum;
	rotateValue = rotateSum;
});