// Added code to display the current date in the header of the page.
var currentday = dayjs().format("MMM D, YYYY");

$("#currentDay").text(currentday);


 
   
    // Added a function to make the save button active using .click and set that to local storage
    var description
  $(".saveBtn").click(function(){

    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, JSON.stringify(text));
  })
    
    
    
    
    
    // Added code to apply the past, present, or future class to each time block


    $(".time-block").each(function(){
      var currentTime = dayjs().hour();
      var selectedTime = parseInt($(this).attr("id"));

      if (currentTime > selectedTime) {
        $(this).removeClass("present")
        $(this).removeClass("future")
        $(this).addClass("past")
      } else if (currentTime < selectedTime) {
        $(this).removeClass("past")
        $(this).removeClass("present")
        $(this).addClass("future")
      } else if (currentTime == selectedTime) {
        $(this).removeClass("past")
        $(this).removeClass("future")
        $(this).addClass("present")
      }
    })
    

    // Added code to save user input into the local storage

    function renderlocalstorage() {
      for (var hour = 9; hour <= 17; hour++)
      var hourID = "#" + hour;
      var hourDescription = hourid + ".description";

      $(hourDescription).val(localStorage.getItem(hour));
    }
  
   
    
 