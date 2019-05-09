var chair = ["yellow","blue","gray"];
var once = ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/220px-SNice.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Sad_face.svg/603px-Sad_face.svg.png","https://cdn.theatlantic.com/assets/media/img/mt/2017/08/shutterstock_668917297/lead_720_405.jpg?mod=1533691898"];
function color() {
    $("body").css("background-color", chair[name]);
}
function Picture() {
    once.forEach(function() {
    $(".container").append("<img src=" + once[name] +">");
});}
    
$(".firstbutton").click(function() {
    var input = $(".inputs").val();
    if (input === "Happy") {
        name = 0;
        color();
        $(".container").empty();
        Picture();
    }
    else if (input === "Sad") {
        name = 1;
        color();
        $(".container").empty();
        Picture();
    }
    else if (input === "Indifferent") {
        name = 2;
        color();
        $(".container").empty();
        Picture();
    }
});
        