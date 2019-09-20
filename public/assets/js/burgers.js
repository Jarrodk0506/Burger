
  $(function() {
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();


    var newBurger = {
      name: $("#burger").val().trim(),
      devoured: false
    };

    console.log(newBurger);
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


  ///////NEEDS WORK/////////////
  $(".devour").on("click", function(event) {
    var id = this.id;
     
  console.log(this.id);

  var newDevouredState = {
    devoured: true
  };

  // Send the PUT request.
  $.ajax("/api/burgers/" + id, {
    type: "PUT",
    data: newDevouredState
  }).then(
    function() {
      // Reload the page to get the updated list
      location.reload();
    }
  );
  });
});