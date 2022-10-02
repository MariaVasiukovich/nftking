//Check email
$('.subscribe_form input[name=submit]').on('click', function() {
    const str = $('.subscribe_form input[name=email]').val().trim();
    const correct = str.length >= 6 && str.includes('@') && str.includes('.');
    if (correct){
        alert('OK');
        form.reset();
    } else {
        alert('Sorry, Your email is incorrect');
    }
})

$(()=>{
    //Open burger menu
    $('.header .container .row .col-md-4.logo-wrapper .mobile-burger-wrapper .burger-btn').on('click', function () {
        $('.header .container .row .mobile-menu-wrapper').toggleClass('active');
        $('.header .container .row .col-md-4.logo-wrapper .mobile-burger-wrapper .burger-btn').toggleClass('opened');
    });

    //copywrite date
    $('.copywrite').append(`<p>&copy; 2018 - ${(new Date().getFullYear())} NFTKING, Inc</p>`);
    console.log(new Date().getFullYear());
})