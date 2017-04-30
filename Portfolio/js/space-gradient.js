/**
 * Created by ankit on 3/8/17.
 */
var numberOfStars = 10;
var maxTop = $("#spaceGradient").height();
var maxWidth = $("#spaceGradient").width();
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
function makeStars() {
    for(var i =0;i<numberOfStars;i++){
        $("#spaceGradient").prepend("<div class='star' id=star"+i+" style='top:"+getRandomInt(10,100)+"%;left:"+getRandomInt(0,100)+"%;width:"+getRandomInt(60,90)+"px;height:"+getRandomInt(60,90)+"px' ></div>");
    }
    // for(var j =numberOfStars/2;j<numberOfStars;j++){
    //     $("#spaceGradient").prepend("<div class='star' id=star"+i+" style='top:"+getRandomInt(0,100)+"%;left:"+getRandomInt(0,100)+"%;width:"+getRandomInt(60,90)+"px;height:"+getRandomInt(60,90)+"px;display:block' ></div>");
    // }
console.log($("#spaceGradient"));
}
function twinkleTwinkle() {
    for(var i =0;i<numberOfStars;i++) {
        // $('#star0').fadeOut(getRandomInt(150, 700)).delay(getRandomInt(120, 2000)).fadeIn(getRandomInt(150, 300)).fadeOut(getRandomInt(150, 300)).delay(getRandomInt(800, 1920));
        // $('#star1').fadeOut(getRandomInt(150, 700)).delay(getRandomInt(120, 2000)).fadeIn(getRandomInt(150, 300)).fadeOut(getRandomInt(150, 300)).delay(getRandomInt(800, 1920));
        // $('#star2').fadeOut(getRandomInt(150, 700)).delay(getRandomInt(120, 2000)).fadeIn(getRandomInt(150, 300)).fadeOut(getRandomInt(150, 300)).delay(getRandomInt(800, 1920));
        // $('#star3').fadeOut(getRandomInt(150, 700)).delay(getRandomInt(120, 2000)).fadeIn(getRandomInt(150, 300)).fadeOut(getRandomInt(150, 300)).delay(getRandomInt(800, 1920));
        // $('#star4').fadeOut(getRandomInt(150, 700)).delay(getRandomInt(120, 2000)).fadeIn(getRandomInt(150, 300)).fadeOut(getRandomInt(150, 300)).delay(getRandomInt(800, 1920));
        // $('#star5').fadeOut(getRandomInt(150, 700)).delay(getRandomInt(120, 2000)).fadeIn(getRandomInt(150, 300)).fadeOut(getRandomInt(150, 300)).delay(getRandomInt(800, 1920));
        // $('#star6').fadeOut(getRandomInt(150, 700)).delay(getRandomInt(120, 2000)).fadeIn(getRandomInt(150, 300)).fadeOut(getRandomInt(150, 300)).delay(getRandomInt(800, 1920));
        // $('#star7').fadeOut(getRandomInt(150, 700)).delay(getRandomInt(120, 2000)).fadeIn(getRandomInt(150, 300)).fadeOut(getRandomInt(150, 300)).delay(getRandomInt(800, 1920));
        // $('#star8').fadeOut(getRandomInt(150, 700)).delay(getRandomInt(120, 2000)).fadeIn(getRandomInt(150, 300)).fadeOut(getRandomInt(150, 300)).delay(getRandomInt(800, 1920));
        // $('#star9').fadeOut(getRandomInt(150, 700)).delay(getRandomInt(120, 2000)).fadeIn(getRandomInt(150, 300)).fadeOut(getRandomInt(150, 300)).delay(getRandomInt(800, 1920));
        $('#star'+i).fadeOut(getRandomInt(150, 700)).delay(getRandomInt(120, 2000)).fadeIn(getRandomInt(150, 300)).fadeOut(getRandomInt(150, 300)).delay(getRandomInt(800, 1920));

    }      //console.log($('#star0'));
}
makeStars();
setInterval(twinkleTwinkle,1000);