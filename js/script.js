$(document).ready(function() {
    // $('body').append('<div>Hello World!</div>');

    $( "#btn-composition" ).on( "click", function() {
        $("#composition").removeClass( "hidden" ).addClass( "show" );
      });
    $( "#btn-soundDesign" ).on( "click", function() {
        $("#soundDesign").removeClass( "hidden" ).addClass( "show" );
    });
    $( "#btn-conducting" ).on( "click", function() {
        $("#conducting").removeClass( "hidden" ).addClass( "show" );
    });
    $( "#btn-performance" ).on( "click", function() {
        $("#performance").removeClass( "hidden" ).addClass( "show" );
    });
    $( "#btn-musicTuition" ).on( "click", function() {
        $("#musicTuition").removeClass( "hidden" ).addClass( "show" );
    });
    $( "#btn-research" ).on( "click", function() {
        $("#research").removeClass( "hidden" ).addClass( "show" );
    });


    // The notes below are for learning the functionality of this code
    // This method is well documented both on youtube and stackflow
    // Make array of all elements having scroll class.
    var scrollLink = $(".scroll");
    // console.log(scrollLink);
    scrollLink.click(function(e) {
        e.preventDefault(); //ie. do not jump to the link.
        //console.log($(this.hash));
        $("body,html").animate({
            scrollTop:$(this.hash).offset().top - 40 //Find this object's offset from the top,
        }, 1000); // and scroll to that place in 1000ms.
    });
    // Switching Active Link
    $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();
        scrollLink.each(function() {
            var sectionOffset = $(this.hash).offset().top - 40;
            console.log(sectionOffset);
            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass("active");
                $(this).parent().siblings().removeClass("active");
            }
        })
    })

      


});