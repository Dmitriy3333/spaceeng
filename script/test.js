
// тест
var buts = document.querySelectorAll(".but");
var i = 0;

for (but of buts) {
  but.onclick = function () {
    if(this.value % 4 == 0 && this.value % 3 == 0) {
      this.style.backgroundColor = 'rgb(65, 160, 65)';
      this.style.color = 'rgb(19, 75, 19)';
      this.parentNode.style.pointerEvents = 'none';
      i++;
    } else {
      this.style.backgroundColor = 'rgb(255, 90, 90)';
      this.style.color = 'rgb(150, 2, 2)';
      this.parentNode.style.pointerEvents = 'none';
    }
  }
}

var closeAnswer = document.querySelector(".close");
var getAnswer = document.querySelector(".answer");

// описание результата
var discription;
var disc = function () { 
    if (i < 6) {
      discription = "<p>Плохой результат! <br> Вы не справились с заданием! <br> Ваша оценка '2'</p>";
    } else if (i >= 6 && i <= 7) {
      discription = "<p>Ваш результат не очень хороший! <br> Попробуйте пройти тест ещё раз! <br> Ваша оценка '3'</p>";
    } else if (i >= 8 && i <= 9) {
      discription = "<p>Ваш результат достаточно хороший! <br> Хорошее прохождение теста! <br> Ваша оценка '4'</p>";
    } else {
      discription = "<p>Отличный результат! <br> Вы набрали максимум баллов! <br> Ваша оценка '5' </p>"
    }
  } 

// подсчет результата и его вывод
var answer = function() {
var points = " ";
if (i == 1 || i == 21 || i == 31) {
  points = " балл";
} else if (i >= 22 && i <= 24 || i >= 2 && i <= 4) {
  points = " балла";
} else if (i >= 5 && i <= 20 || i >= 25 && i <= 30 || i == 0) {
  points = " баллов";
}

document.querySelector('.answer_into').innerHTML = 'Ваш результат ' + i + points + discription;
  getAnswer.style.display = "block";
  closeAnswer.style.display = "block";
  document.body.style.overflow = "hidden";
}

var all = document.getElementById('all');
// var into = document.getElementById('into');

all.onclick = function () {
  document.getElementById('text').value = i;

  ans_b = document.querySelector(".getAnswer");
  if (Boolean(document.getElementById('name').value) == false) {

    ans_b.disabled = true; 

    setTimeout(() => {
      ans_b.disabled = false; 
    }, 150);
  } 
  if (Boolean(document.getElementById('name').value) == true) {
    ans_b.disabled = false; 
  }
}

var items = document.querySelectorAll('.item')
  
Array.from(items).sort(function(a, b) {
  a = Number(a.querySelector('.item-price').innerText)
  b = Number(b.querySelector('.item-price').innerText)
  return b - a
}).forEach(function(n, i) {
  n.style.order = i
})

