$(function () {


    const validateForm = function () {
        let Valid = true;

        $('input').each(function () {
            if (!$(this).val()) {
                Valid = false;
            }
        });

        $('.custom-select').each(function (i, element) {
            if (!$(this).val()) {
                Valid = false;
            }
        });

        return Valid;
    }

    $('#submit').click(function (e) {
        e.defaultPrevented();
        if (validateForm()){

        const newEmployee = {
            name: $('#name').val().trim(),
            photo: $('#photo').val().trim(),
            scores: [$('#q1').val(), $('#q2').val(), $('#q3').val(), $('#q4').val(), $('#q5').val(), $('#q6').val(), $('#q7').val(), $('#q8').val(), $('#q9').val(), $('#q10').val()]
        }

        $.post("/api/employees", newEmployee).done(function (data) {
            $('#match-name').empty();
            $('match-img').empty();
            $('#match-name').append(`<h3>${data.name}</h3>`);
            $('#match-img').attr("src", data.photo);
        });
        $('#results-modal').modal('show')
    } else{

        $('#error').text('Please fill out all fields before submitting!').addClass('alert alert-danger');
    }   
    });

}) 