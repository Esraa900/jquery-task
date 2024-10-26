// open with animate

let type = true;
$('.open').click(function () {
  if(type){
    $('.sideNav').animate({width: '300px'});
    $('.open').animate({left: '310px'});
    type = false;
  }else {
    type = true;
    $('.sideNav').animate({width: '0px'});
    $('.open').animate({left: '0px'});
  }
});

$('.close-btn').click(function(){
    $('.sideNav').animate({width: '0px'});
    $('.open').animate({left: '0px'});
})



// slidedown div 

$('.slides').hide();

$('.slideDown').click(function(){
    $('.text-slide-one').slideToggle();
    $('.text-slide-two').slideUp();
    $('.text-slide-three').slideUp();
    $('.text-slide-four').slideUp();
})

$('.slideDown-two').click(function(){
    $('.text-slide-one').slideUp();
    $('.text-slide-two').slideToggle();
})

$('.slideDown-three').click(function(){
    $('.text-slide-one').slideUp();
    $('.text-slide-two').slideUp();
    $('.text-slide-three').slideToggle();
})

$('.slideDown-four').click(function(){
    $('.text-slide-one').slideUp();
    $('.text-slide-two').slideUp();
    $('.text-slide-three').slideUp();
    $('.text-slide-four').slideToggle();
})

// counter function

let dateCounter = new Date("2022,12,17").getTime();

let counter = setInterval(() => {

  let dateNow = new Date().getTime();
  let difference = dateCounter - dateNow;
  let days = Math.floor (difference / ( 1000 * 60 * 60 * 24 ));
  let hours = Math.floor (difference % ( 1000 * 60 * 60 * 24 ) / ( 1000 * 60 * 60 ));
  let minutes = Math.floor(difference % ( 1000 * 60 * 60 ) / ( 1000 * 60 ));
  let seconds = Math.floor(difference % ( 1000 * 60 ) / ( 1000));

  if(difference < 0 ){
    clearInterval(counter);
  };


  if ( seconds < 10 == true ){
     $('.sec').html(`0${seconds}<p class="time-name">secondes</p>`);
  } else {
    $('.sec').html(`${seconds}<p class="time-name">secondes</p>`);
  };


  if ( minutes < 10 == true){
    $('.min').html(`0${minutes}<p class="time-name">minutes</p>`);
  } else {
    $('.min').html(`${minutes}<p class="time-name">minutes</p>`);
  };


  if ( hours < 10 == true ){
    $('.hours').html(`0${hours}<p class="time-name">hours</p>`);
  } else {
    $('.hours').html(`${hours}<p class="time-name">hours</p>`);
  };


  if ( days < 10 == true){
    $('.days').html(`0${days}<p class="time-name">days</p>`);
  } else {
    $('.days').html(`${days}<p class="time-name">days</p>`);
  };


},1000);


// make texterea allow 100 alphabet only

let getMaxLength = $('.textarea').attr('maxlength');

$('.textarea').on('input',function(){

  $('.count').html(getMaxLength - $(this).val().length);

      if($('.count').html() == 0 ){

            $('.count').html('your available character finished');
            $('.count').addClass('red-zero');

      }else {

            $('.count').removeClass('red-zero');
      }
})


