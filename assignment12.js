
$("#close").click(function () {
    $("#aside").fadeOut()
    $("#open").animate({ left: "60" })
});
$("#open").click(function () {
    $("#aside").fadeIn()
    $("#open").animate({ left: "390" })
});



$("#signerOne").click(function () {
    $("#pOne").slideToggle();
    $("#pOne").removeClass("d-none");
    $("#pTwo").slideUp();
    $("#pThree").slideUp();
    $("#pFour").slideUp();
    $("#duration").animate({ top: "0px" })
});
$("#signerTwo").click(function () {
    $("#pTwo").slideToggle();
    $("#pTwo").removeClass("d-none");
    $("#pOne").slideUp();
    $("#pThree").slideUp();
    $("#pFour").slideUp();
    $("#duration").animate({ top: "80px" })
    $("#contact").animate({ top: "80px" })
});
$("#signerThree").click(function () {
    $("#pThree").slideToggle();
    $("#pThree").removeClass("d-none");
    $("#pTwo").slideUp();
    $("#pOne").slideUp();
    $("#pFour").slideUp();
    $("#duration").slideToggle()
    $("#duration").animate({ top: "120px" })
    $("#contact").animate({ top: "110px" })
});
$("#signerFour").click(function () {
    $("#pFour").slideToggle();
    $("#pFour").removeClass("d-none");
    $("#pTwo").slideUp();
    $("#pThree").slideUp();
    $("#pOne").slideUp();
    $("#duration").animate({ top: "160px" })
    $("#contact").animate({ top: "280px" })
});












// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2025 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("duration").innerHTML = ` </div>
  <div class="g-col-6 g-col-md-3 border border-secondary-subtle  p-5 text-light my-5 fw-semibold fs-4"> ${days} D</div>
  <div class="g-col-6 g-col-md-3 border border-secondary-subtle  p-5 text-light my-5 fw-semibold fs-4">${hours} h
  </div>
  <div class="g-col-6 g-col-md-3 border border-secondary-subtle  p-5 text-light my-5 fw-semibold fs-4">${minutes} m
  </div>
  <div class="g-col-6 g-col-md-3 border border-secondary-subtle  p-5 text-light my-5 fw-semibold fs-4">${seconds} s
  </div>`
    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("duration").innerHTML = "EXPIRED";
    }
}, 1000);

i=100;
$(".count").keypress(function () {

    

       $("#down").text(i=i-1)
    

});


