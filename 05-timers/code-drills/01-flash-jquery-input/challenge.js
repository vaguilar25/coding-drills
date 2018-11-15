$(function () {

    $(document).on("click", "button", function (event) {
        event.preventDefault();

        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        var occupation = $("#occupation").val();
        var city=$("#city").val();
        var state=$("#state").val();

        $("#firstName").val("");
        $("#lastName").val("");

        $("#occupation").val("");
        $("#city").val("");
        $("#state").val("");

        var nameDiv = $("<h3>").text(firstName + " " + lastName);
        var occupationDiv = $("<h3>").text(occupation );
        var cityDiv= $("<h3>").text(city);
        var stateDiv= $("<h3>").text(state);

        $("#display-area").append(nameDiv,occupationDiv,cityDiv, stateDiv);
    });

})