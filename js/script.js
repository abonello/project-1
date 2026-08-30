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

        $('#contact :input[name]').each(function() {
            params[this.name] = this.value;
        });

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
    }

    function validateEmail(email) {
        var emailReg = /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)+$/;

        var trimmedEmail = email.trim();

        if (trimmedEmail == "") {
            $('#emailLabel').after('<span class="error"> Please enter your email</span>');
            return false;

        } else if (!emailReg.test(trimmedEmail)) {
            $('#emailLabel').after('<span class="error"> Please enter a valid email address</span>');
            return false;

        } else {
            return true;
        }
    }

    function validateSubject(subject) {
        var trimmedSubject = subject.trim();

        if (trimmedSubject == "") {
            $('#subjectLabel').after('<span class="error"> Please enter a subject for your message</span>');
            return false;

        } else if (trimmedSubject.length < 3) {
            $('#subjectLabel').after('<span class="error"> Subject must contain at least 3 characters</span>');
            return false;

        } else if (trimmedSubject.length > 200) {
            $('#subjectLabel').after('<span class="error"> Subject must be 200 characters or fewer</span>');
            return false;

        } else if ([...trimmedSubject].some(character => character.charCodeAt(0) < 32 &&
                                                        character !== "\n" &&
                                                        character !== "\r" &&
                                                        character !== "\t")) {
            $('#subjectLabel').after('<span class="error"> Subject contains invalid characters</span>');
            return false;

        } else {
            return true;
        }
    }

    function validateMessage(message) {
        var trimmedMessage = message.trim();

        if (trimmedMessage == "") {
            $('#messageLabel').after('<span class="error"> Please enter your message</span>');
            return false;

        } else if ([...trimmedMessage].length < 10) {
            $('#messageLabel').after('<span class="error"> Message must contain at least 10 characters</span>');
            return false;

        } else if ([...trimmedMessage].length > 5000) {
            $('#messageLabel').after('<span class="error"> Message must be 5000 characters or fewer</span>');
            return false;

        } else {
            return true;
        }
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