const img_container = document.querySelector('#view_img');

$('.imgover').click(function(event) {
  var close = document.createElement('span');
  var img = document.createElement('img');
  img.src = $(this).find('img').attr('src');
  close.innerHTML = 'EXIT';
  close.className = "close_element";
  document.getElementById('view_img').appendChild(close);
  document.getElementById('view_img').appendChild(img);
  document.getElementById('view_img').style.display = 'block';
  scrollDisable();
  close.onclick = function() {
    scrollEnable();
    document.getElementById('view_img').style.display = 'none';
    while (img_container.firstChild) {
        img_container.removeChild(img_container.firstChild);
    }
  };
});

$('#calendar').click(function(event) {
  var close = document.createElement('span');
  var calendar_container = document.getElementById("google_calendar");
  close.innerHTML = 'CLOSE';
  close.className = "close_element";
  document.getElementById('google_calendar').appendChild(close);
  document.getElementById('google_calendar').style.display = 'block';
  close.onclick = function() {
    document.getElementById('google_calendar').style.display = 'none';
    calendar_container.removeChild(calendar_container.lastChild);
  };
});
