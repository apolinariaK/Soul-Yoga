$(document).ready(function () {

    $('#teachers-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 945,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    $('#products-action').click(() => {
        $('#timetable').css('display', 'flex');
    });

    $('#timetable-cancel, #timetable').click((e) => {
        if (e.target.id === 'timetable' || e.target.id === 'timetable-cancel-close') {
            $('#timetable').hide();
        }
    });

    $('.yoga-1-action').click(() => {
        $('.more-info-products.yoga-1').css('display', 'flex');
    });

    $('.yoga-2-action').click(() => {
        $('.more-info-products.yoga-2').css('display', 'flex');
    });

    $('.yoga-3-action').click(() => {
        $('.more-info-products.yoga-3').css('display', 'flex');
    });

    $('.yoga-4-action').click(() => {
        $('.more-info-products.yoga-4').css('display', 'flex');
    });

    $('.more-info-products-cancel, .more-info-products').click((e) => {
        if (e.target.className === 'more-info-products yoga-1' || e.target.className === 'more-info-products yoga-2'
            || e.target.className === 'more-info-products yoga-3'
            || e.target.className === 'more-info-products yoga-4'
            || e.target.className === 'more-info-products-cancel-close') {
            $('.more-info-products').hide();
        }
    });


    $('#menu').click(() => {
        $('#header-menu').toggleClass('menu-open');
    });

    $('#menu-cancel, #header-menu a').click(() => {
        $('#header-menu').removeClass('menu-open');
    });


// анимация
    new WOW().init();

// форма
    let loader = $('#loader');
    (function() {
        'use strict';
        window.addEventListener('load', function() {
            var forms = document.getElementsByClassName('needs-validation');
            var validation = Array.prototype.filter.call(forms, function(form) {
                form.addEventListener('submit', function(event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add('was-validated');

                    if (form.checkValidity() === true) {
                        loader.css('display', 'flex');
                        event.preventDefault();
                        let name = $('#name').val();
                        let phone = $('#phone').val();
                        $.ajax({
                            method: "POST",
                            url: "main.php",
                            data: 'name=' + name + '&phone=' + phone,
                            success: () => {
                                $('#form-send').show();
                                loader.hide();
                            },
                            error: () => {
                                alert('Ошибка записи Свяжитесь, пожалуйста, по номеру телефона.')
                                loader.hide();
                            }
                        })
                    }
                }, false);
            });
        }, false);
    })();
});