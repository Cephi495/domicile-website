$('.imgover').click(function(event) {
  var close = document.createElement('span');
  var img = document.createElement('img');
  img.src = $(this).find('img').attr('src');
  close.innerHTML = 'EXIT';
  close.className = "close_img";
  document.getElementById('view_img_container').appendChild(close);
  document.getElementById('view_img_container').appendChild(img);
  document.getElementById('view_img_container').style.display = 'block';
  scrollDisable();
  close.onclick = function() {
    scrollEnable();
    document.getElementById('view_img_container').style.display = 'none';
    removeAllChildNodes(container);
  };
});

const container = document.querySelector('#view_img_container');
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
