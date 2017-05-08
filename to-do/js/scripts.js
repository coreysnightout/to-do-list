// Back End //
function Chore(name) {
  this.choreName = name;
  this.completed = false;
};

Chore.prototype.crossOut = function() {
  return this.choreName;
}


$(document).ready(function() {
  $("form#to-do-form").submit(function(event) {
    event.preventDefault();

    var thingToDo =$("input#thing-to-do").val();

    var newChore = new Chore(thingToDo);


    $("ul#where-things-go").append("<li><span class='clickme'>" + newChore.choreName + "</span></li>");

    $(".clickme").last().click(function() {
      $("#completed-thing").append("<li style='text-decoration: line-through;'>" + newChore.crossOut() + "</li>");
      $(this).parent().fadeOut();

    //
    // $("#completed-thing").last().click(function() {
    //   $("#where-things-go").append("<li>" + thingToDo + "</li>");
    //   $(this).fadeOut();
    // })

    });

    document.forms["to-do-form"].reset();

    // $(".reset").click(function(event) {
    //   form.reset();
    //
    // });
  });
});
