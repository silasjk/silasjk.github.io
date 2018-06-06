/**
 * Scripts
 * 
 * @since 1.0.0
 * 
 */

/** 
 * Display Grid
---------------------------------------------*/

$(function() {

  var adjustArticleHeights = (function () {
    
    var leftColumnHeight = 0; 
    var rightColumnHeight = 0; 
    var $windowWidth = $( window ).width();
    var $articles = $( "article.portfolio-item" );

      // Loop over each article on the page
      for ( var i = 0; i < $articles.length; i++ ) {

        // Check if the height of each article
        if ( leftColumnHeight > rightColumnHeight  ) {
          // If the left column height is less than the right column height
          
          // Check the window width 
          if( $windowWidth <= 575 ){
            // Don't add the right class if the window width is less than 575px
            leftColumnHeight += $articles.eq( i ).addClass( "fadeInLeft" ).outerHeight( true );
          } else {
            // if it is add the right class
            rightColumnHeight += $articles.eq( i ).addClass( "right fadeInRight" ).outerHeight( true );
          }

        } else {
          // add fade in left class to the left hand side columns
          leftColumnHeight += $articles.eq( i ).addClass( "fadeInLeft" ).outerHeight( true );
          
        }
      
      }

    // return articles to print on screen with classes added    
    return $articles;

  })();

});

/** 
 * Animate Button Function
---------------------------------------------*/

document.querySelector('.btn-primary-animate').onmousemove = (e) => {

  const x = e.pageX - e.target.offsetLeft
  const y = e.pageY - e.target.offsetTop

  e.target.style.setProperty('--x', `${ x }px`)
  e.target.style.setProperty('--y', `${ y }px`)
  
}

$(document).ready(function(){

  /**
   * Smooth Scrolling
   ---------------------------------------------*/
  $( 'a[href*="#"]' ).not( '[href="#"]' ).not( '[href="#0"]' ).click( function( e ){

    if ( location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') & location.hostname ==  this.hostname ) {
      var target = $(this.hash);
      target = target.length ? target : $( '[name=' + this.has.slice(1) + ']' );

      if( target.length ) {
        e.preventDefault();
        $( 'html, body' ).animate({
          scrollTop: target.offset().top
        }, 1000, function(){
          var $target = $(target);
          $target.focus();
          if( $target.is(":focus") ){
            return false;
          } else {
            $target.attr( 'tabindex', '-1' );
            $target.focus();
          };
        });// close if else
      } // close if target.length
    } // close if
  }); // close smooth scroll click function

  /**
   * Scroll to top button
   ---------------------------------------------*/
  $( "#btnTop" ).click( function() {
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });

  /**
   * Close Menu
   ---------------------------------------------*/
  $( "a#menuToggle" ).click( function(e){
    
    $( "header.header-nav" ).toggle( "slow" );
    return false;

  });


}); // End ready document

/**
 * Scroll to top button
---------------------------------------------*/
$( window ).scroll(function(e){
  var $scroll = $( window ).scrollTop();
  if(  $scroll >= 500 ){
    $( "#btnTop" ).css( { 'opacity': 1, 'visibility' : 'visible' } );
  }
  if( $scroll <= 500 ){
    $( "#btnTop" ).css( { 'opacity': 0, 'visibility' : 'hidden' } );
  }
});


$( window ).on( "load", function() {

  /**
   * Fade out the preloader
   */
  $( "#preLoad" ).delay( 2000 ).fadeOut( "slow" );

  /** 
   * Run Wow.js after preloader faded out
  ---------------------------------------------*/
  setTimeout(function(){
    new WOW().init();
  }, 1900 );

});

