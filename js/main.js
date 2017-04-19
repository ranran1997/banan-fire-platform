;(function(){
  $('.scroll-table tr:nth-child(even)').addClass('dark')
  $(".map-btn-wrap").click(function(){
    $('.view').addClass('with-bg right')
    $('.map').before('<div class="shine v-center"><div>')
    $('body').addClass("show-info")
  })
  $(".close").click(function(){
    $('.view').removeClass('with-bg right')
    $('.view-wrap').find('.shine').remove()
    $('body').removeClass("show-info")
  })
})()