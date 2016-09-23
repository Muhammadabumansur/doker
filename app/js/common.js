$(document).ready(function() {

  $("#owl-example").owlCarousel({
  	items: 1
  });

	 ymaps.ready(init);
	    var myMap,
        	    myPlacemark;

	    function init(){     
	        myMap = new ymaps.Map("map", {
	            center: [42.96287882, 47.51014142],
	            zoom: 15
	        });

	        myPlacemark = new ymaps.Placemark([42.96287882, 47.51014142]);

	        myMap.geoObjects.add(myPlacemark);
	    }
 
});