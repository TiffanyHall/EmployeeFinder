$(function(){

$('#submit').click(function () {
    const newEmployee = {
        name: $('#name').val().trim(),
        photo: $('#photo').val().trim(),
        scores: [$('#q1').val(), $('#q2').val(), $('#q3').val(), $('#q4').val(), $('#q5').val(), $('#q6').val(), $('#q7').val(), $('#q8').val(), $('#q9').val(), $('#q10').val()]
}

$.post("/api/employees", newEmployee).done(function (data) {
    $('#match-name').empty();
    $('match-img').empty();
    $('#match-name').append(data.name);
    $('#match-img').attr("src",data.photo);
        });
$('#results-modal').modal('show')

})

}) 