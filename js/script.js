$(document).ready(function() {

    const API_URL = window.location.hostname === "localhost" ||
                window.location.hostname === "127.0.0.1"
    ? "http://localhost:8000"
    : "/api";

    // Responsive Menu Button collapse the menu when selection made.
    $(document).on('click','.navbar-collapse.in',function(e) {
        if( $(e.target).is('a') ) {
            $(this).collapse('hide');
        }
    });

    // show Extra Information when button in activities is clicked
    $( "#btn-composition" ).on( "click", function() {
        $("#composition").removeClass( "hidden" ).addClass( "show" ).css('height', 'auto');
        $("#composition").siblings().removeClass( "show" ).addClass( "hidden" );
      });
    $( "#btn-soundDesign" ).on( "click", function() {
        $("#soundDesign").removeClass( "hidden" ).addClass( "show" ).css('height', 'auto');
        $("#soundDesign").siblings().removeClass( "show" ).addClass( "hidden" );
    });
    $( "#btn-conducting" ).on( "click", function() {
        $("#conducting").removeClass( "hidden" ).addClass( "show" ).css('height', 'auto');
        $("#conducting").siblings().removeClass( "show" ).addClass( "hidden" );
    });
    $( "#btn-performance" ).on( "click", function() {
        $("#performance").removeClass( "hidden" ).addClass( "show" ).css('height', 'auto');
        $("#performance").siblings().removeClass( "show" ).addClass( "hidden" );
    });
    $( "#btn-musicTuition" ).on( "click", function() {
        $("#musicTuition").removeClass( "hidden" ).addClass( "show" ).css('height', 'auto');
        $("#musicTuition").siblings().removeClass( "show" ).addClass( "hidden" );
    });
    $( "#btn-research" ).on( "click", function() {
        $("#research").removeClass( "hidden" ).addClass( "show" ).css('height', 'auto');
        $("#research").siblings().removeClass( "show" ).addClass( "hidden" );
    });

    // Close extra information div
    $( ".btn-card" ).on("click", function() {
        $(this).parent().animate({
            height: "0px"
            }, 500,
            function() { $( this )
                .removeClass( "show" )
                .addClass( "hidden" );}
            );
    });
    var currentHeight = 0;

    $( ".btn-card-cta" ).on("click", function() {
        currentHeight = $(this).parent().parent().parent().height();
        $(this).parent().parent().parent().animate({
            height: "0px"
            }, 500,
            function() { $( this )
                .removeClass( "show" )
                .addClass( "hidden" );}
            );
    });


    $( ".scrollCTA" ).on("click", function(e) {
        e.preventDefault();
        var here = $(this.hash).offset().top;
        $("body,html").animate({
            scrollTop:here -100 - currentHeight
        }, 1000);
    });


    // SCROLLING
    var scrollLink = $(".scroll");
    scrollLink.click(function(e) {
        // only on index.html
        try {
            if (document.location.pathname.match(/[^\/]+$/)[0] === "index.html") {
                e.preventDefault();
                $("body,html").animate({
                    scrollTop:$(this.hash).offset().top - 40 
                }, 1000);
            }
        } catch(err) {
            e.preventDefault();
            $("body,html").animate({
                scrollTop: $(this.hash).offset().top - 40
            }, 1000);
        }
    });

    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();
        try {
            if (document.location.pathname.match(/[^\/]+$/)[0] === "index.html") {
                scrollLink.each(function () {
                    var sectionOffset = $(this.hash).offset().top - 40;
                    if (sectionOffset <= scrollbarLocation) {
                        $(this)
                            .parent()
                            .addClass("active");
                        $(this)
                            .parent()
                            .siblings()
                            .removeClass("active");
                    }
                });
            }
        } catch (err) {
            scrollLink.each(function () {
                var sectionOffset = $(this.hash).offset().top - 40;
                if (sectionOffset <= scrollbarLocation) {
                    $(this)
                        .parent()
                        .addClass("active");
                    $(this)
                        .parent()
                        .siblings()
                        .removeClass("active");
                }
            });
        }
    });


    $("#contactForm").on("submit", async function(event) {
        event.preventDefault()

        if (!validateForm()) {
            alert("Please check the form. There is an error that needs fixing.");
            return false;
        }

        const params = {};

        $('#contact :input').each(function() {
            params[this.name] = this.value;
        });

        console.log("Sending to Python:", params);

        $("#btn-submit").text("Sending...");
        $("#btn-submit").prop("disabled", true);

        try {

            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(params)
            });

            const result = await response.json();

            console.log("Response from Python:", result);

            $("#btn-submit").text("Submit");
            $("#btn-submit").prop("disabled", false);

            if (result.success) {
                alert(result.message);
                this.reset();
            } else {
                alert("Send email failed.");
            }
        } catch (error) {

            $("#btn-submit").text("Submit");

            console.error(error);
            alert("Something went wrong: " + error.message);
        }

        return false;
    });



    
    function validateForm(){
        var name = $('#name').val();
        var email = $('#email').val();
        var subject = $('#subject').val();
        var message = $('#message').val();
    
            $('.error').hide();
            if (
                validateName(name) &&
                validateEmail(email) &&
                validateSubject(subject) &&
                validateMessage(message)) {
                    return true; 
            }
            return false;
    }  
    
    function validateName(name) {
        // var nameReg = /^[A-Za-z ]+$/;
        var nameReg = /^[\p{L} .'-]+$/u;
        var trimmedName = name.trim();
        var letterCount = (trimmedName.match(/\p{L}/gu) || []).length;

        if (trimmedName == "") {
            $('#nameLabel').after('<span class="error"> Please enter your name</span>');
            return false;

        } else if (letterCount < 3) {
            $('#nameLabel').after('<span class="error"> Please enter at least 3 letters</span>');
            return false;

        } else if (!nameReg.test(trimmedName)) {
            $('#nameLabel').after('<span class="error"> Letters, spaces, hyphens, apostrophes or periods only</span>');
            return false;

        } else {
            return true;
        }

        // if(name == ""){
        //     $('#nameLabel').after('<span class="error"> Please enter your name</span>');
        //     return false;
        // } else if(name.replace(/\s+/g, ' ') == " ") {
        //     $('#subjectLabel').after('<span class="error"> Please enter a Subject for your message</span>');
        //     return false;
        // } else if(!nameReg.test(name)){
        //     $('#nameLabel').after('<span class="error"> Letters only</span>');
        //     return false;
        // } else { return true; }
    }

    function validateEmail(email) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

        if(email == ""){
            $('#emailLabel').after('<span class="error"> Please enter your email</span>');
            return false;
        } 
        else if(!emailReg.test(email)){
            $('#emailLabel').after('<span class="error"> Please enter a valid email address</span>');
            return false;
        } else { return true; }
    }

    function validateSubject(subject) {
        var subjectReg = /^[A-Za-z0-9 ]+$/;
    
        if(subject == ""){
            $('#subjectLabel').after('<span class="error"> Please enter a Subject for your message</span>');
            return false;
        }  else if(subject.replace(/\s+/g, ' ') == " ") {
            $('#subjectLabel').after('<span class="error"> Please enter a Subject for your message</span>');
            return false;
        } else if(!subjectReg.test(subject)){
            $('#subjectLabel').after('<span class="error"> Letters or numbers only</span>');
            return false;
        } else { return true; }
    }

    function validateMessage(message) {
        if(message == ""){
            $('#messageLabel').after('<span class="error"> Please enter your message</span>');
            return false;
        } else if(message.replace(/\s+/g, ' ') == " ") {
            $('#subjectLabel').after('<span class="error"> Please enter your message. Cannot read spaces alone!</span>');
            return false;
        } else { return true; }
    }

    var dlBtn = $("#downloadBtnID");
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();
        dlBtn.each(function () {
            if (scrollbarLocation < 500) {
                $(this).addClass("hideDownloadBtn");
            } else if (scrollbarLocation > 500) {
                $(this).removeClass("hideDownloadBtn");
            }
        });
    });
});