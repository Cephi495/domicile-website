var a = document.getElementsByTagName('a');
var img = document.getElementsByTagName('img');

$(function() {
  for (j = 0; j < img.length; j++) {
    if (img[j].classList.contains('Featured')){
      img[j].classList.remove('hide_gallery_img');
    } else if (img[j].classList.contains('ALL')) {
      img[j].classList.add('hide_gallery_img');
    }
  }
});

$('.topics').click(function(event) {
  var topic = $(this).attr('id').replace('gallery_', '');
  for (i = 0; i < a.length; i++) {
    a[i].classList.remove('active');
  }
  $(this).addClass('active');
  for (j = 0; j < img.length; j++) {
    if (img[j].classList.contains(topic)){
      img[j].classList.remove('hide_gallery_img');
    } else if (img[j].classList.contains('ALL')) {
      img[j].classList.add('hide_gallery_img');
    }
  }
  document.getElementById('topic_label').innerHTML = topic;
});
