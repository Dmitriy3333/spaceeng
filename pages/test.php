<?php

  require_once '../php/funcs.php'; // подключение функций

  if(!empty($_POST)){
    save_mess(); // функция сохранения текстов
    header("Location: ../pages/test.php#elma"); // избавление от окна проверки полей
  }

  $messages = get_mess(); // получение сообщения 
  $messages = array_mess($messages);

?>
<!doctype html>
<html><!-- InstanceBegin template="/Templates/maint.dwt" codeOutsideHTMLIsLocked="false" -->
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" href="/style/style.css">
	<!-- InstanceBeginEditable name="doctitle" -->
	<title>Документ без названия</title>
	<!-- InstanceEndEditable -->
	<!-- InstanceBeginEditable name="head" -->
	<link rel="stylesheet" href="../style/test.css">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&family=Open+Sans:wght@300&family=Play&family=Roboto&family=Roboto+Slab:wght@300&family=Open+Sans:wght@300;400&display=swap" rel="stylesheet">
	<script type='text/javascript' src='//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js'></script>
	<script type='text/javascript' src='http://example.com/wp-includes/js/jquery/jquery-migrate.min.js?ver=1.2.1'></script>
<!-- InstanceEndEditable -->
</head>

<body>
	  
  <div class="nav">
    <div class="burger">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div></div> <!--Заглушка для выравнивания-->

    <div style="display: flex">
      <div class="buttons_words">
        <a href="/index.html"><p>main</p></a>
        <a href="#"><p>about</p></a>
        <a href="/pages/test.php"><p>test</p></a>
      </div>
      <button class="settings"></button> 
      <!-- <button class="profile"></button> -->
    </div>
  </div> <!--Конец nav-->
  <div class="settings_block">
    <label class="settings_font">Размер текста: <output class="pixels">19</output>px
      <input class="size-setting" type="range" min="10" max="40" step="1" value="19">
    </label>
    <label class="settings_font_color">Изменить цвет текста <br>
      <div>Цвет: </div> <div class="d"><input type="color" class="settings_color"></div>
      <button class="color_but">Применить</button>
    </label> 
  </div>
	<!--Меню в бургере-->
	<div class="menublock">
	  <ul class="mainMenu">
		<li> Главная </li>
		<li>Орбитальная механика</li>
		<li>Устройство автоматики</li>
		<li> Ракеты носители
		  <ul>
			<li>Устройство</li> 
			<li>Создание</li>
			<li>Материалы и химия</li>
		  </ul>
		</li>
		<li>Искуственные спутники Земли
		  <ul>
			<li>Устройство</li>
			<li>Создание</li>
			<li>Материалы и химия</li>
		  </ul>
		</li>
		<li>Двигатели и топливо</li>
		<li>Электромеханника</li>
		<li>Современные разработки</li>
		<li>Проекты будущего</li>
	  </ul>
	</div>
	<!--Главное меню-->
	<div class="main">
	  <div class="word">
		  <span style="padding-top:290px">
		  <!-- InstanceBeginEditable name="title" -->Космическая инженерия<!-- InstanceEndEditable -->
		  </span>
		  <!-- InstanceBeginEditable name="Mainnav" -->
			<div class="nav-in-word">
				<div style="display: flex">
					<div class="buttons_words-bottom"> 
						<a href="#m1"><p>Подвести итог!</p></a> 
					</div>
				</div>
			 </div>
			<!-- InstanceEndEditable -->
		</div>
	</div>

<script>
     
  $('.burger').click(function() {
    $('.burger span:nth-child(1)').toggleClass('first');
  });

  $('.burger').click(function() {
    $('.burger span:nth-child(2)').toggleClass('second');
  });

  $('.burger').click(function() {
    $('.burger span:nth-child(3)').toggleClass('third');
  });
	
 </script>
<button class="totop"></button> <!--Наверх-->
<div class="close"><!-- зкрытие --></div>
	
	
<div class="text">
<!-- InstanceBeginEditable name="mainText" -->
<br><br>
<div class="answer">
  <div class="answer_into"></div>
  <form action="../pages/test.php" method="post">
    <p>
        <label for="name" class="color_green">Пожалуйста, представтесь:</label> <br>
        <input type="text" name="name" id="name">
    </p>    
<button id="all" class="getAnswer">Завершить</button>
<textarea name="text" id="text" style="display: none"></textarea>
</form>
</div><!--  блок с выводом результата  -->

<h1 class="color_green">А если Вы уже ознакомились с информацией, представленной на сайте, можете пройти данный тест и узнать, на сколько Вы близки к Програмной инженерии!</h1>
<br>
	<div class="maintest">
  <div>
    <img src="../images/olimp/first.jpg">
    <h1><span style="font-size: 40px !important; color: green">1.</span> В каком году произошло возрождение Олимпийских игр?</h1>
      <button class="but" value="22">1739</button>
      <button class="but" value="84">1896</button>
      <button class="but" value="11">1936</button>
  </div>

  <div>
    <img src="../images/olimp/second.jpg">
    <h1><span style="font-size: 40px !important; color: green">2.</span> Кто сыграл ключевую роль в возрождении Олимпийских игр?</h1>
      <button class="but" value="234">Хуан Атонио Самаранч</button>
      <button class="but" value="123">Деметриус Викелас</button>
      <button class="but" value="192">Пьер де Кубертен</button>
  </div>

  <div>
    <img src="../images/olimp/third.jpeg">
    <h1><span style="font-size: 40px !important; color: green">3.</span> С какого года проводятся зимние Олимпийские игры после этапа возрождения Олимпиады?</h1>
    <button class="but" value="21e">1824 </button>
    <button class="but" value="360">1924</button>
    <button class="but" value="35">1926</button>
  </div>

  <div>
    <img src="../images/olimp/fourth.jpg">
    <h1><span style="font-size: 40px !important; color: green">4.</span> Что представляет из себя современный олимпийский символ?</h1>
    <button class="but" value="45">Венец победителя</button>
    <button class="but" value="45">Пьедестал победителя</button>
    <button class="but" value="12">Пять переплетённых колец</button>
    <button class="but" value="11">Флаг с эмблемой Олимпийского огня</button>
  </div>

  <div>
    <img src="../images/olimp/fifth.jpg">
    <h1><span style="font-size: 40px !important; color: green">5.</span> Что означает переплетение пяти колец?</h1>
      <button class="but" value="22">Насыщенность истории Олимпийских игр</button>
      <button class="but" value="11">Важность события </button>
      <button class="but" value="0">Единство континентов и встречу спортсменов всего мира на Олимпийских играх</button>
  </div>

  <div>
    <img src="../images/olimp/sixs.jpg">
    <h1><span style="font-size: 40px !important; color: green">6.</span> Олимпийский девиз:</h1>
      <button class="but" value="234">«Быстрее, выше, вместе!» </button>
      <button class="but" value="48">«Быстрее, выше, сильнее!»</button>
      <button class="but" value="123">«Главное — не победа, а участие»</button>
  </div>

  <div>
    <img src="../images/olimp/seventh.jpeg">
    <h1><span style="font-size: 40px !important; color: green">7.</span> Что из себя представляет флаг Олимпийских игр?</h1>    
    <button class="but" value="576">Белое атласное полотнище с олимпийскими кольцами</button>
    <button class="but" value="212">Белое атласное полотнище с силуэтом олимпийского огня</button>
    <button class="but" value="354">Белое атласное полотнище с силуэтами пяти континентов</button>
  </div>

  <div>
    <img src="../images/olimp/eighth.jpg">
    <h1><span style="font-size: 40px !important; color: green">8.</span> Как зажигается олимпийский огонь?</h1>
    <button class="but" value="3325">Факел зажигают организаторы Олимпийских игр </button>
    <button class="but" value="1308">Огонь доставляют эстафетой из древнегреческого города Олимпия лучшие спортсмены мира</button>
    <button class="but" value="114">Олимпийский факел зажигается правительтвом страны, где проводится Олимпиада</button>
  </div>

  <div>
    <img src="../images/olimp/nineth.jpg">
    <h1><span style="font-size: 40px !important; color: green">9.</span> Талисман Олимпийских игр это...</h1>
      <button class="but" value="22424">Бурый медвежонок Миша </button>
      <button class="but" value="1512">Обычно изображение животного, которого особенно любят в стране, где проводятся Игры</button>
      <button class="but" value="1111">Мифическое существо – дух Олимпиады</button>
  </div>

  <div>
    <img src="../images/olimp/tenth.jpg" id="m1">
    <h1><span style="font-size: 40px !important; color: green">10.</span> Талисман какой страны изображен на фотографии?</h1>
      <button class="but" value="234">Греции</button>
      <button class="but" value="6480">России</button>
      <button class="but" value="234" id="m1">Японии</button>
      <button class="but" value="123121" id="elma">США</button>
  </div>
  
<br>

<button class="getAnswer" onclick="disc(); answer();" style="font-size: 18px;">Посмотреть результат!</button>

</div>
<br><br>
<h1 class="color_green">"Доска почёта"</h1>
<br>

<div class="items">
  <?php if(!empty($messages)): ?>
    <?php foreach($messages as $message): // цикл перебора всех сообщений ?>

      <?php $message = get_format_message($message); // разделение обЪекта по разделителю | ?>
      <div class="message item">
        <p><?=$message[0]?></p>
        <div class="item-price"><?=nl2br($message[1])?></div> 
        <p class="date"><?=htmlspecialchars($message[2])?></p>
      </div>

    <?php endforeach; ?>
  <?php endif; ?>
</div>
<!-- InstanceEndEditable -->
</div>

<br><br><br><br><br>

<footer>
     <div class="footer-oglav">
      <div class="oglav-left">
		  <div style="flex-grow: 1;"> </div>
<!--
			<ul class="oglav-ul-top">  
				<li><a href="#">Устройство автоматики</a></li>
				<li><a href="#">Ракеты носители &#9660;	</a>
			  <ul>
				<li><a href="#">Устройство</a></li> 
				<li><a href="#">Создание</a></li>
				<li><a href="#">Материалы и химия</a></li>
			  </ul>
				</li>
				<li><a href="#">Двигатели и топливо</a></li>  
				<li><a href="#">Современные разработки</a></li>
			</ul>
-->
		  <ul class="oglav-ul-top">  
			<li><a href="../index.html">Главная</a></li>
			<li><a href="organization.html">Организация &#9660;	</a>
			  <ul>
				<li><a href="organization.html#m0">Космические полеты </a></li> 
				<li><a href="organization.html#m1">Карта предприятий</a></li>
			  </ul>
			</li>
			<li><a href="about">Об авторе</a></li>
			</ul>
	</div>
	<!-- ЛОГОТИП -->
	<div class="oglav-logo">
		<a href="../index.html" title="На главную"><div class="logo-footer"></div></a>
	</div>
      <div class="oglav-right">
        <ul class="oglav-ul-top">
			<li><a href="test.php">Тест</a></li>
			<li><a href="spacecraft.html">Космические аппараты &#9660; </a>
        		<ul>
            		<li><a href="spacecraft.html#m0">Ракеты-носители</a></li>
            		<li><a href="spacecraft.html#m1">Космические корабли</a></li>
          		</ul>
        	</li>        
			<li><a href="big-slider.html">Подборки</a></li>
		</ul>
      </div>
     </div> <!--Конец footer_oglav-->
	
      <div class="about">
		<a href="http://na-lenskoy.ru/nauchno-tekhnicheskij-otdel/ot-stranichki-k-web-sajtu" target="_blank" class="footer-ddut"></a>
		<div class="share"> 
		  <a href="https://www.facebook.com/sharer/sharer.php?u=https://dmitriy3333.github.io/new-web/" target="_blank"><button title="Поделиться в Facebook"></button></a>
		  <a href="https://telegram.me/share/url?url=https://dmitriy3333.github.io/new-web/&amp;text='Космические технологии'" target="_blank"><button title="Поделиться в Telegram"></button></a>
		  <a href="https://vk.com/share.php?url=https://vk.com/&title=Сайт 'Космические технологии'&description=&image=https://ipel.com/wp-content/uploads/2019/04/architecture-building-business-256381.jpg&noparse=false " target="_blank"><button title="Поделиться в ВКонтакте"></button></a>
		  <a href="https://twitter.com/share?url=https://dmitriy3333.github.io/new-web/&text='Космические технологии'" target="_blank"><button title="Поделиться в Twitter"></button></a>
		  <a onclick="copy_link()"><button title="Копировать ссылку на сайт" value="https://dmitriy3333.github.io/new-web/" id="myInput" class="copy_b"></button><div class="copy">Скопированно!</div></a> 
		</div>
		  <div class="footer-right">
			 <p>&copy; 2021 г. <br> Автор сайта Карпенко Дмитрий.<br> Руководитель: Петриченко В.А.</p>
		  </div>
      </div>
</footer>
	<!-- InstanceBeginEditable name="scriptRegion" -->
	<script src="../script/test.js"></script>
	<!-- InstanceEndEditable -->
<script src="/script/script.js"></script>
</body>
<!-- InstanceEnd --></html>
