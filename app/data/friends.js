// You should save your application's data inside of `app/data/friends.js` as an array of objects.

$("#add-btn").on("click", function(event) {
  event.preventDefault();
  var newCharacter = {
    name: $("#name").val().trim(),
    role: $("#role").val().trim(),
    age: $("#age").val().trim(),
    forcePoints: $("#force-points").val().trim()
  };
});
