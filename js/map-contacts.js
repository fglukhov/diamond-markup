var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('mapContacts', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center:[55.76, 37.64], // Москва
        zoom:13
    });
    
    myMap.controls.add(
       new ymaps.control.ZoomControl(),
       { left: 110, top: 20 }
    );
    
    myPlacemark2 = new ymaps.Placemark([55.76, 37.64], {
        // Свойства.
        hintContent: ''
    }, {
        // Опции.
        // Своё изображение иконки метки.
        iconImageHref: 'images/map-pin-main.png',
        // Размеры метки.
        iconImageSize: [101, 111],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-50, -111]
    });
    
    myMap.geoObjects
        .add(myPlacemark2);

}