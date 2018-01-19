$(document).ready( function(){
    
    /*---------------------------------
	* Smooth scroll
    ---------------------------------*/
    $('a.smooth-scroll').on('click', function (e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').animate({
            'scrollTop': $target.offset().top
        }, 1000, 'swing');
    });

    /*---------------------------------
    * Scroll up the portfolio
    ---------------------------------*/
    $( 'a[name="toggle-pop"]' ).on( 'click', function( e ) {

        $target = $(this).parent().siblings();

        $target.slideToggle( '' );

        e.preventDefault();

    });

    $( 'span.close i' ).on( 'click', function( e ) {

        $( this ).parent().parent().slideToggle();

        e.preventDefault();


    });

});