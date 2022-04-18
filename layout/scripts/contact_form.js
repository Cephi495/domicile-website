// Code By Webdevtrick ( https://webdevtrick.com )

//To reveal form
(function(){
  $("#contact").load("contact_form.html");
  var envelope = document.getElementById('envelope');
  var bottom_envelope = document.getElementById('bottom_envelope');
  var contactForm = {
    container: $('#contact'),
    config: {effect: 'fadeToggle', speed: 500},
    init: function(config){
      $.extend(this.config, config);
      $('#c-btn').on('click', this.show);
      bottom_envelope.addEventListener('click', this.show);
      envelope.addEventListener('click', this.show);},
    show: function(){
      scrollDisable();
      var cf = contactForm,
          container = cf.container,
          config = cf.config;
      if(container.is(':hidden')){
        cf.close.call(container);
        container[config.effect]
        (config.speed);
      }
    },
    close: function(){
      scrollEnable();
      var $this = $('#contact');
      if($this.find('span.close').length) return;
      $('<span class=close>-</span>').prependTo(this).on('click', function(){
        $this[contactForm.config.effect](contactForm.config.speed);
      })
    }
  };
  contactForm.init({
    effect: 'fadeToggle', speed: 500
  });
})();

const contact_form_elements = document.getElementById("contact_form").elements;

//Automatically show selected services when form opens
function openXsrv(){
  var ob_lvl2 = document.getElementsByClassName('ob_lvl2'),
    ob_lvl3 = document.getElementsByClassName('ob_lvl3');
  if (x_srv.checked == 1) {
    for (var i = 0; i < ob_lvl2.length; i++) {
      ob_lvl2[i].style.display = 'block';
    }
    for (var y = 0, element; element = contact_form_elements[y++];) {
        if (element.name === "xserv_check[]" && element.checked){
          var x = element.getAttribute('id').replace(/[^0-9]/g, '');
          document.getElementById("fob_"+x+"_container").style.display = 'block';
          document.getElementById("fob_"+x+"_input").required = true;
        }
    }
  } else {
    for (var i = 0; i < ob_lvl2.length; i++) {
      ob_lvl2[i].style.display = 'none';
    }
    for (var i = 0; i < ob_lvl3.length; i++) {
      ob_lvl3[i].style.display = 'none';
    }
  }
}

//Display selected services when "Select Services" bo is clicked
function toggleDisplay(option){
  var x = option.getAttribute('id').replace(/[^0-9]/g, '');
  if (option.checked == 1){
    document.getElementById("fob_"+x+"_container").style.display = 'block';
    document.getElementById("fob_"+x+"_input").required = true;
    document.getElementById("fob_"+x+"_input").focus();
  } else {
    document.getElementById("fob_"+x+"_container").style.display = 'none';
    document.getElementById("fob_"+x+"_input").required = false;
  }
}

//Require description for inputs that are selected in "Select Services"
submit.addEventListener("click", () => {
  var alerts = []
  for (var y = 0, element; element = contact_form_elements[y++];) {
      if (element.name === "extra_service_input" && element.required == true && element.length === 0){
        var placeholder = element.getAttribute("placeholder");
        alerts.push("Description required in "+placeholder);
      }
  }
  if (!(alerts.length === 0)) {
    alert(alerts);
  }
});
