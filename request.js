(function() {
  
  'use strict';
    
  // находим необходимый селектор
  var btn = document.getElementById('request');
  var resp = document.getElementById('main');

  // устанавливаем запрос
  var request = new XMLHttpRequest();
  
  // отслеживаем запрос
  request.onreadystatechange = function() {
    // проверяем вернулись запрошенные данные
    if(request.readyState === 4) {
      // добавляем рамку
      resp.style.border = '1px solid #e8e8e8';
	resp.innerHTML = 'Произошла ошибка при запросе: ';

      // проверяем успешен ли запрос
      if(request.status === 200) {
        resp.innerHTML = request.responseText;
        // обнавляем элемент HTML
      } else {
        // иначе выводим сообщение об ошибке
        resp.innerHTML = 'Произошла ошибка при запросе: ' +  request.status + ' ' + request.statusText;
      }
    }
  }

  // определяем тип запроса
  request.open('Get', '192.168.0.105/info.php');

  // регистрируем событие
  btn.addEventListener('click', function() {
    // скрываем кнопку
    this.style.display = 'none';
    // отправляем запрос
    request.send();
  });
});
