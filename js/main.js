/*appear and disappear by click*/
function myFunction(link) {
    var x = document.getElementById("myDIV");
    if (x.style.display == "none") {
      $("#myDIV").show(500);
      $("#selectedImage").attr('src',link)
    } else {
        if($("#selectedImage").attr('src')==link){$("#myDIV").hide(500)}
        else{
            $("#myDIV").hide()
            $("#myDIV").show(500)
            $("#selectedImage").attr('src',link)
        }
    }
  }
  let link1 = $("#image1").attr("src") 
  let link2 = $("#image2").attr("src") 
  let link3 = $("#image3").attr("src") 
  let link4 = $("#image4").attr("src") 
  let link5 = $("#image5").attr("src") 
  let link6 = $("#image6").attr("src") 
  
  
  $("#image1").click(function(){
      myFunction(link1)
  })
  $("#image2").click(function(){
      myFunction(link2)
  })
  $("#image3").click(function(){
      myFunction(link3)
  })
  $("#image4").click(function(){
      myFunction(link4)
  })
  $("#image5").click(function(){
      myFunction(link5)
  })
  $("#image6").click(function(){
      myFunction(link6)
  })

  
  function init_map() {
    var myOptions = { zoom: 9, center: new google.maps.LatLng(34.739822, 10.760020), mapTypeId: google.maps.MapTypeId.ROADMAP, streetViewControl: false }; 
    map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions); 
    marker = new google.maps.Marker({ map: map, position: new google.maps.LatLng(34.739822, 10.760020) });
     infowindow = new google.maps.InfoWindow({ content: '<strong>Title</strong><br>Sfax, centre ville<br>' });
      google.maps.event.addListener(marker, 'click', function () { infowindow.open(map, marker); }); infowindow.open(map, marker);
} google.maps.event.addDomListener(window, 'load', init_map);