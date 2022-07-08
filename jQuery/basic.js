$("h1").css("color", "blue");
$("h1").addClass("header-font")
// console.log($("input").css("margin"))
$("p").html("Rahul Chaudhary")
$("button").removeClass("radio")
// $("button").html("Don't click me")
$("button").css("margin", "50px")

$("a").attr("href", "https://www.bing.com")
$("button").addClass("radio");
// $("button").attr("class")

$("button").on("click", function (){
    $("h1").css("color", "purple");
    setTimeout(function () {
      $("h1").css("color", "red");
    }, 500);
});

$("h1").on("mouseover", function (){
    $("button").css("backgroundColor" , "green");
    $("button").html("jQuery Applied");
    $("button").css("borderRadius", "0px");
})

$("h1").on("mouseleave", function () {
  $("button").css("backgroundColor", "black");
  $("button").html("Click Me");
  $("button").css("borderRadius", "10px")
});

// $("button").remove();

$("p").before("<a>link</a>");
// $("p").after("<a>link</a>");
// $("p").prepend("<a>link</a>");
// $("p").append("<a>link</a>");

/* hide or show content 
$("h1").hide();               // $("h1").show();

$("button").on("click", function () {$("h1").toggle()}) */


/* Fade-in or fade-out content or as well as toggle
$("h1").fadeOut();               // $("h1").fadeIn();

$("button").on("click", function () {$("h1").fadeToggle()}) */


/* slide-up and slide-down & toggle
$("h1").slideUp();               // $("h1").show();

$("button").on("click", function () {$("h1").slideToggle()}) */


// --> Animate function only work for those values that have numeric value (like :- margin, padding, opacity etc.)
// $("h1").animate({opacity : 0.1});  
$("p").animate({padding: "20px"})
$("h1").fadeOut(). slideDown().animate({marginLeft: "30px", paddingTop: "30px"})    