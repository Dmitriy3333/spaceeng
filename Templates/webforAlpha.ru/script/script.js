
    
document.onready = function () {
  document.onmousemove = function (w) {
    
    var x = w.pageX;
		var y = w.pageY;  
 document.querySelector(".disc").style.left = x + 'px';
 document.querySelector(".disc").style.top = y + 'px';
  }
  
}
//  alert(window.getComputedStyle(document.getElementById('myInput')).width)

// document.getElementById('myInput').onclick = function () {
  
// var left_of_copy = document.getElementById('myInput').getBoundingClientRect().left;
// var top_of_copy = document.getElementById('myInput').getBoundingClientRect().top;
// var s = window.getComputedStyle(document.getElementById('myInput')).width

// document.querySelector(".disc").style.position = 'absolute';
// document.querySelector(".disc").style.left = left_of_copy + 40 + 'px';
// document.querySelector(".disc").style.top = top_of_copy + 'px';


// }






var main = document.querySelector(".main");
var toTop = document.querySelector(".totop");
var settings_block = document.querySelector(".settings_block");


window.onscroll = function () {
  if (scrollY > 340) {
    toTop.style.display = "block";
    main.classList.add('forMain');
    document.querySelector(".nav").classList.add('forNav');
    document.querySelector(".word").classList.add('forWord');
    document.querySelector('.nav-in-word').classList.add('none');
    settings_block.classList.add('settings_block_dark');
  } else {
    main.classList.remove('forMain');
    toTop.style.display = "none";
    document.querySelector(".nav").classList.remove('forNav');
    document.querySelector(".word").classList.remove('forWord');
    document.querySelector('.nav-in-word').classList.remove('none');
    settings_block.classList.remove('settings_block_dark');
  }


  var text = document.querySelector(".text");

if (scrollY > text.offsetHeight) {
  toTop.style.display = "none";
}
} 

toTop.onclick = function () {
  window.scrollTo(0, 0);
}



//блок меню
var menu = document.querySelector(".burger"); //кнопка
var menub = document.querySelector(".menublock"); //блок

menu.onclick = function () {

menub.classList.toggle('menublockafter')


}

// модальные изображения 
var imgs = document.querySelectorAll('.myImg'); // картинка
var modal = document.querySelector(".myModal"); // конструкция с увеличением
var modalImg = document.getElementById('img01'); // увеличенная картинка
var caption = document.getElementById('caption'); // описание 

for(img of imgs) {

img.onclick = function () {
  modal.style.display = 'block';
  modalImg.src = this.src;
  caption.innerHTML = this.alt;

  setTimeout(function(){ 
    modalImg.classList.add('modal-content-open');
    caption.classList.add('modal-content-open');
  },1);
}

  modal.onclick = function () {
    modal.style.display = 'none';
    modalImg.classList.remove('modal-content-open');
    caption.classList.remove('modal-content-open');
  }
}


// настройки - блок
var settings_button = document.querySelector(".settings");

settings_button.onclick = function () {
  settings_block.classList.toggle('settings_block_open')
}
// Размер текста
var range_fontSize = document.querySelector('.size-setting');
var text_size_news = document.querySelectorAll('.text p');
var pixels = document.querySelector('.pixels');
var settings_color = document.querySelector('.settings_color'); // палитра 
var color_but = document.querySelector('.color_but'); // кнопка переключения цвета

 color_but.onclick = function() {
   for (text_size_new of text_size_news) {
     text_size_new.style.color = settings_color.value;
   }
  }

range_fontSize.oninput = function() {
    for (text_size_new of text_size_news) {
    pixels.innerHTML = range_fontSize.value;
    text_size_new.style.fontSize = range_fontSize.value + 'px';
   
  }
 

  
}
    


function copy_link() {
  var copy_block = document.querySelector('.copy');

  var copyText = document.getElementById("myInput");
  navigator.clipboard.writeText(copyText.value);
  copy_block.style.display = 'block';
  setTimeout(() => {
    copy_block.style.display = 'none';
  }, 1500);
}




function getPosition(e){
	var x = y = 0;
 
	if (!e) {
		var e = window.event;
	}
 
	if (e.pageX || e.pageY){
		x = e.pageX;
		y = e.pageY;
	} else if (e.clientX || e.clientY){
		x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
		y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
	}
 
	return {x: x, y: y}

}


// //блок регистрации
// var prof = document.querySelector(".profile"); //кнопка
// var login = document.querySelector(".forLogin"); //блок
// var close = document.querySelector(".close"); //закрытие

// prof.onclick = function () {
//   login.style.display = 'block';
//   close.style.display = 'block'; 
//   document.body.style.overflow = 'hidden';

//   close.onclick = function () {
//     login.style.display = 'none';
//     close.style.display = 'none';
//     document.body.style.overflow = 'auto';
//   }
// }

