$(document).ready(function() {
    // Initialize modals no matter their name
    // Will trigger .modal-trigger too
    $(".modal").modal();
   
    // Button click function
    $("#my-modal-button").on("click", function() {
     // console.log("Clicked!");
    });
   });

   //code for name input box
   $(document).ready(function() {
    Materialize.updateTextFields();
  });

  $(document).ready(function() {
    $('select').material_select();
  });

  $('select').material_select('destroy');