$(document).ready(function() {
  $("form#to-do-form").submit(function(event) {
    event.preventDefault();

    var thingToDo =$("input#thing-to-do").val();


    $("ul#where-things-go").append("<li><span class='clickme'>" + thingToDo + "</span></li>");

    $(".clickme").last().click(function() {
      $("#completed-thing").append("<li>" + thingToDo + "</li>");
      $(this).fadeOut();

    //
    // $("#completed-thing").last().click(function() {
    //   $("#where-things-go").append("<li>" + thingToDo + "</li>");
    //   $(this).fadeOut();
    // })

    });

    $(".reset").click(function(event) {
      form.reset();

    });
  });
});
