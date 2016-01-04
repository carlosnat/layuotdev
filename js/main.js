$( function() {
  // -- Script iniciar owl carousel para el header
   $(".owl-carousel").owlCarousel({
        items:1,
        margin:100,
        autoplay:true,
        loop:true
    });

   // -- Script para capturar evento en la seccion servicios para la vista escritorio
   $('.service').on('click', function(){
      var service_selected = '.servicio'+$(this).attr('data-servicio');
      var count = 0;
      var firstSelector = 'servicio'+count;
      while($('.servicio'+count).length > 0){
        $('.servicio'+count).hide('slow');
        count++;
      }
      $(service_selected).slideDown();
    });

   // -- Script para iniciar el owl carousel de miembros del equipo
   $('.team-carousel').owlCarousel({
      loop:true,
      margin:25,
      center: true,
      autoplay: true,
      responsiveClass:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      }
    });

    // -- Script para inicializar libreria isotope para el filtrado de seleccion
    var $grid = $('.grid')
    // initialize Isotope
    $grid.isotope({
      // options...
      resizable: false, // disable normal resizing
      // set columnWidth to a percentage of container width
      masonry: { columnWidth: $grid.width() / 4 }
    });
    // -- Script para filtrar elementos del portafolio
    $('.filter-button-group').on( 'click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });

    $('.button-group').each( function( i, buttonGroup ) {
      var $buttonGroup = $( buttonGroup );
      $buttonGroup.on( 'click', 'button', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $( this ).addClass('is-checked');
      });
    }); 
    

    // -- Scripts para boton de hacer scroll al tope de la pagina
    $(window).scroll(function(){
      if ($(this).scrollTop() > 100) {
        $('.scrollToTop').fadeIn();
      } else {
        $('.scrollToTop').fadeOut();
      }
    });
    //Click event to scroll to top
    $('.scrollToTop').click(function(){
      $('html, body').animate({scrollTop : 0},800);
      return false;
    });
    // -- Script para cambiar fonde de menu al realizar scroll en la pagina
    var scroll_pos = 0;
    var animation_begin_pos = 0; //where you want the animation to begin
    var animation_end_pos = 10; //where you want the animation to stop

    var beginning_color = new $.Color( 'rgba(23, 150, 154, 0)' ); //we can set this here, but it'd probably be better to get it from the CSS; for the example we're setting it here.

    var ending_color = new $.Color( 'rgba(106, 168, 187, 0.84)' ); ;//what color we want to use in the end
    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop(); 
        if(scroll_pos >= animation_begin_pos && scroll_pos <= animation_end_pos ) { 
           // console.log( 'scrolling and animating' );
            //we want to calculate the relevant transitional rgb value
            var percentScrolled = scroll_pos / ( animation_end_pos - animation_begin_pos );
            var newRed = beginning_color.red() + ( ( ending_color.red() - beginning_color.red() ) * percentScrolled );
            var newGreen = beginning_color.green() + ( ( ending_color.green() - beginning_color.green() ) * percentScrolled );
            var newBlue = beginning_color.blue() + ( ( ending_color.blue() - beginning_color.blue() ) * percentScrolled );
            var newColor = new $.Color( newRed, newGreen, newBlue );
            newColor._rgba[3] = 0;
            //console.log( newColor.red(), newColor.green(), newColor.blue() );
            $('.main-nav').animate({ backgroundColor: newColor }, 100);
        } else if ( scroll_pos > animation_end_pos ) {
             $('.main-nav').animate({ backgroundColor: ending_color }, 100);
        } else if ( scroll_pos < animation_begin_pos ) {
             $('.main-nav').animate({ backgroundColor: beginning_color }, 100);
        } else { }
    });

    // -- Script para activar menu en dispositivos mobiles
    $('.button-collapse').sideNav({
        menuWidth: 300, // Default is 240
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
      }
    );
});

