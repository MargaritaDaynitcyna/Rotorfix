ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [55.804971, 37.526228],
        zoom: 17
    });
    var myPlacemark = new ymaps.Placemark([55.804971, 37.526228], {}, {
        iconLayout: 'default#image',
        iconImageHref: '../img/mark.svg',
        iconImageSize: [49, 72],
        iconImageOffset: [0, 0]
    });
    myMap.geoObjects.add(myPlacemark);
    myMap.controls.remove('rulerControl');
    myMap.controls.remove('searchControl');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('zoomControl');
    myMap.controls.remove('geolocationControl');
    myMap.controls.remove('routeEditor');  
    myMap.controls.remove('fullscreenControl');
    let t=document.querySelector('.ymaps-2-1-79-copyright')
    myMap.controls.remove('.ymaps-2-1-79-copyright');


}
