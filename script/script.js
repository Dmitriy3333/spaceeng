var main = document.querySelector(".main");
var toTop = document.querySelector(".totop");
var settings_block = document.querySelector(".settings_block");


window.onscroll = function () {
  if (scrollY > 440) {
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
toTop.onclick = function() {
  window.scrollTo(0, 0);
}

//блок меню
// var menu = document.querySelector(".burger"); //кнопка
// var menub = document.querySelector(".menublock"); //блок

// menu.onclick = function () {
//   menub.classList.toggle('menublockafter')  
// }

// модальные изображения 
var imgs = document.querySelectorAll('.myImg'); // картинка
var modal = document.querySelector(".myModal"); // конструкция с увеличением
var modalImg = document.getElementById('img01'); // увеличенная картинка
var caption = document.getElementById('caption'); // описание 

for(img of imgs) {
  img.onclick = function() {
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
var text_size_news = document.querySelectorAll('.text p, .text a, .text span');
var text_color_news = document.querySelectorAll('.text p, .text span');
var pixels = document.querySelector('.pixels');
var settings_color = document.querySelector('.settings_color'); // палитра 
var color_but = document.querySelector('.color_but'); // кнопка переключения цвета


 color_but.onclick = function() {
   for (text_color_new of text_color_news) {
      text_color_new.style.color = settings_color.value;
      localStorage.setItem('color', settings_color.value);
   }
  }

for (text_color_new of text_color_news) {
  text_color_new.style.color = localStorage.color
}

range_fontSize.oninput = function() {
    for (text_size_new of text_size_news) {
    pixels.innerHTML = range_fontSize.value;
    text_size_new.style.fontSize = range_fontSize.value + 'px';
    localStorage.setItem('size', range_fontSize.value + 'px')
  } 
}

for (text_size_new of text_size_news) {
  text_size_new.style.fontSize = localStorage.size
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

var crafts = [
  {
    img: '../images/crafts/souz-big.jpg',
    title: 'Союз',
    discription: '<p>&nbsp;&nbsp;&nbsp;«Союз» - серия советских трехступенчатых ракетоносителей, которые на протяжении нескольких десятилетий оставались лучшими аппаратами для запусков космических кораблей разного типа и назначения на орбиту Земли.</p><p>&nbsp;&nbsp;&nbsp;Руководителями проекта были Королев С. П. и Козлов Д. И. Эксплуатация серии ракетоносителей началась в 1963 году, причем по аналогии с моделью, на которой базировался новый носитель, их все еще называли «Восход». С 1966 года в обиход официально вошло название «Союз».</p><p>&nbsp;&nbsp;&nbsp;При разработке ракетоносителя «Союз» одной из ключевых задач, стоявших перед конструкторами, было создать систему для спасения экипажа в случае аварийной ситуации. В итоге была разработана и реализована система аварийного спасения (САС), которая активировалась до старта ракеты и в случае необходимости обеспечивала спасения экипажа на старте или на любом участке полета.</p>',
    left: '<ul><li>Год: 1966</li><li>Страна: СССР</li><li>Высота: 50,67 м.</li><li>Масса: ~300 т.</li><li>Полезная нагрузка:<br> 7,100 т.</li></ul>'
  },
  {
    img: '../images/crafts/second.jpg',
    title: 'Протон-М',
    discription: "<p>&nbsp;&nbsp;&nbsp;Ракета-носитель 'Протон-М' - одноразовая ракета космического назначения. Создана в начале 1960-х гг. под руководством конструктора Владимира Челомея (первая ракета семейства 'Протон' стартовала в 1965 году).</p><p>&nbsp;&nbsp;&nbsp;Предназначена для выведения в космос различных космических аппаратов, в том числе межпланетных автоматических станций, навигационных, военных, коммерческих спутников.</p><p>&nbsp;&nbsp;&nbsp;Первый вариант ракеты-носителя «Протон» был двухступенчатым. Сейчас запускается либо в трёх- (на опорную орбиту), либо в четырёхступенчатом вариантах (с разгонным блоком).</p><p>&nbsp;&nbsp;&nbsp;Является самой тяжёлой и массовой ракетой-носителем России</p>",
    left: '<ul><li>Год: 1966</li><li>Страна: СССР</li><li>Высота: 58,2 м.</li><li>Масса: ~705 т.</li><li>Полезная нагрузка:<br> до 22 т.</li></ul>'
  },
  {
    img: '../images/crafts/china.jpeg',
    title: 'Чанчжэн-5',
    discription: '<p>&nbsp;&nbsp;&nbsp;Китайская ракета-носитель, разработанная в Китае. Гениральные конструкторы - Ли Дун и Лун Лэхао. Основным назначением «Чанчжэн-5» будет удовлетворение потребности КНР в выводе грузов на низкую опорную орбиту и геостационарную орбиту в следующие 20—30 лет. </p><p>&nbsp;&nbsp;&nbsp;Планируется использовать ракеты также для исследования Луны и Марса, а также для строительства будущей космической станции Китая.</p><p>На данный момент является одной из самых мощьных ракет в мире, превосходя европейскую Ariane-5, российскую «Протон-М», и лишь немного уступая американской Falcon Heavy.',
    left: '<ul><li>Год: 2016</li><li>Страна: Китай</li><li>Высота: 57 м.</li><li>Масса: ~800 т.</li><li>Полезная нагрузка:<br> до 25 т.</li></ul>'
  },
  {
    img: '../images/crafts/falcon.jpg',
    title: 'Falcon Heavy',
    discription: '<p>&nbsp;&nbsp;&nbsp;Falcon Heavy - самая мощная ракета в мире, разработанная в США, компанией SpaceX.</p><p>&nbsp;&nbsp;&nbsp; Обладает способностью поднять на орбиту почти 64 тонны полезной нагрузки. Это также многоразовая ракета. Многоразовость позволяет сэкономить до 30% стоимости ракеты, что и позволило компании добиться невероятных успехов, а владельцу компании - Илону Маску - стать самым богатым человеком в мире.</p><p>&nbsp;&nbsp;&nbsp;Предназначена для выполнения комерческих заказов, в том числе и заказов со стороны NASA.',
    left: '<ul><li>Год: 2018</li><li>Страна: США</li><li>Высота: 70 м.</li><li>Масса: ~1400 т.</li><li>Полезная нагрузка:<br> до 100 т.</li></ul>'
  },
  {
    img: '../images/crafts/starship.jpeg',
    title: 'Starship',
    discription: '<p>&nbsp;&nbsp;&nbsp;Космический корабль SpaceX Starship и сверхтяжелая ракета (вместе именуемые Starship) представляют собой полностью многоразовую транспортную систему, предназначенную для перевозки экипажа и грузов на околоземную орбиту, Луну, Марс и за ее пределы.</p> <p>&nbsp;&nbsp;&nbsp;Starship станет самой мощной из когда-либо созданных ракет-носителей в мире, способной доставлять более 100 метрических тонн на орбиту Земли.</p> <p>&nbsp;&nbsp;&nbsp;Первая ступень, или ускоритель, пусковой системы следующего поколения имеет общую стартовую массу более 3 миллионов кг и использует переохлажденный жидкий метан и жидкое кислородное топливо. Ракета-носитель вернется на стартовую площадку на 6 опорах. В качестве первой ступени используется та же ступень, что использует и Falcon Heavy',
    left: '<ul><li>Год: В разработке</li><li>Страна: США</li><li>Высота: 120 м.</li><li>Масса: ~5000 т.</li><li>Полезная нагрузка:<br> до 140 т.</li></ul>'
  },
];

var img_craft = document.querySelector(".img_craft");
var title_craft = document.querySelector(".title_craft");
var disc_craft = document.querySelector(".disc_craft");
var disc_craft_left = document.querySelector(".disc_craft_left");
var controls = document.querySelectorAll('.we');

for (var i = 0; i < controls.length; i++) {
  controls[0].classList.add('crafts_active')
  //controls[0].style.color = 'blue';

  controls[i].onclick = function () {  
    var whitch = this.value;

    img_craft.src = crafts[whitch].img; // картинка
    title_craft.innerHTML = crafts[whitch].title; // название 
    disc_craft.innerHTML = crafts[whitch].discription; // правый блок
    disc_craft_left.innerHTML = crafts[whitch].left; //левый блок

    t();

    //this.style.color = 'blue';
    this.classList.add('crafts_active')
  }
}

var t = function () {
  for (var i = 0; i < controls.length; i++) {
    //controls[i].style.color = 'green';
    controls[i].classList.remove('crafts_active')
  }
}










// var img_craft = document.querySelector(".img_craft");
// var title_craft = document.querySelector(".title_craft");
// var disc_craft = document.querySelector(".disc_craft");
// var disc_craft_left = document.querySelector(".disc_craft_left");

// var get_craft = function(whitch) {
//   img_craft.src = crafts[whitch].img; // картинка
//   title_craft.innerHTML = crafts[whitch].title; // название 
//   disc_craft.innerHTML = crafts[whitch].discription; // правый блок
//   disc_craft_left.innerHTML = crafts[whitch].left; //левый блок
// }


// var controls = document.querySelectorAll('.we');

// var t = function () {
//   for (var i = 0; i < controls.length; i++) {
//     controls[i].style.color = 'red';
//   }
// }



