<?php

function save_mess() { // функция сохранения текстов
  $str = $_POST['name'] . ' | ' . $_POST['text'] . ' | ' . date('Y-m-d') . "⠀⠀" . date('H:i') . "\n***\n"; // сохранение в переменную Имени, разделение, текст, разделение, дата, разделение
  file_put_contents("../php/gb.txt", $str, FILE_APPEND); // запись получившегося в файл
}

function get_mess() { // получение сообщения
  return file_get_contents('../php/gb.txt'); // возвращение текста из БД
}

function array_mess($messages) { // работа с массивом - 
  $messages = explode("\n***\n", $messages); // разделение на части 
  array_pop($messages); // удаление последнего файла
  return array_reverse($messages); // возвращение перевернутого массива из аргумента
}
 
function get_format_message($message) { // разделение обЪекта по разделителю | 
  return explode('|', $message); // разделение обЪекта по разделителю | 
}

// function print_arr($arr) {
//   echo '<pre>' . print_r($arr, true) . '</pre>';
// }