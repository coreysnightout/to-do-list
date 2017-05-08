$(document).ready(function() {
  $("form#to-do-form").submit(function(event) {
    event.preventDefault();

    var thingToDo =$("input#thing-to-do").val();


    $("ul#where-things-go").append("<li>" + thingToDo + "</li>");


  });
});
