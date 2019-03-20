$("button").click(function() {
    var height =$(".answerTeller").val();
    var graduation=parseInt($(".future").val());
    var age=parseInt($(".question").val());
    var name=$(".name").val();
    var yearsOut = 2029 - graduation;
    var futureAge= age+ 10;
    $(".results").text("hi " + name+ " in ten years, you will have been out of high school for " + yearsOut + " years and you will be " + futureAge+ "years old" );
});
