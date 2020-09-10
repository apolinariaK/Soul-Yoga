$(document).ready(function () {

    $('#teachers-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });

    let loader = $('#loader');

    $('form .btn ').click(() => {
        let name = $('#name');
        let phone = $('#phone');
        let valid = false;
        if (!name.val()) {
            $('.error-text').show();
            name.css('border', '3px solid red;');
            valid = true;
        } else {
            $('.error-text').hide();
        }

        if (!phone.val()) {
            $('.error-text').show();
            phone.css('border', '3px solid red;');
            valid = true;
        }
        if (!valid) {
            loader.css('display', 'flex');
            $.ajax({
                method: "POST",
                url: "main.php",
                data: 'name=' + name.val() + '&phone=' + phone.val(),
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
    });

    $('#products-action').click(() => {
        $('#timetable').css('display', 'flex');
    });


    $('#timetable-cancel, #timetable').click((e) => {
        if (e.target.id === 'timetable' || e.target.id === 'timetable-cancel-close') {
            $('#timetable').hide();
        }
    });

    new WOW().init();
});