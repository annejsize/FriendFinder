// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var port = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Friends (DATA)
// =============================================================

var friendsarray = [
  {
    routeName: "jenna",
    name: "Jenna",
    picture: "jenna.jpg",
    score: [3, 3, 3]
    // ques2: 3,
    // ques3: 3
    // ques4: 3,
    // ques5: 3,
    // ques6: 3,
    // ques7: 3,
    // ques8: 3,
    // ques9: 3,
    // ques10: 3
  },
  {
    // routeName: "yoda",
    name: "willie",
    picture: "willie.jpg",
    score: [1, 2, 3]
    // ques2: 2,
    // ques3: 3
    // ques4: 4,
    // ques5: 5,
    // ques6: 1,
    // ques7: 2,
    // ques8: 3,
    // ques9: 4,
    // ques10: 5
  },
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/survey.html"));
});
//

// Allllll the friends
app.get("/api/friends", function(req, res) {
  return res.json(friendsarray);
});
// Create New Friends - takes in JSON input
app.post("/api/friends", function(req, res) {
  var newfriend = req.body;
  newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();
  console.log(newfriend);

//Compatiblity Logic
  // var newfriendarray = [newfriend.ques1, newfriend.ques2, newfriend.ques3];
  // var newfriendarray = [newfriend.score[0], newfriend.score[1], newfriend.score[2]];
  // console.log(newfriendarray);

  // var friends = [];
  // for (var i = 0; i < newfriendarray.length; ++i) {
  //     friends[i] = [friendsarray.ques[i], friendsarray.ques[i], friendsarray.ques[i] ];
  //     console.log(friends[i]);
  // }

//Hard code because the above loop is being a total asshole and I don't know why
//   var friend0 = [friendsarray[0].ques1, friendsarray[0].ques2, friendsarray[0].ques3];
//   var friend1 = [friendsarray[1].ques1, friendsarray[1].ques2, friendsarray[1].ques3];
//
// //Get the absolute value of each difference and then sum them up;
//   var calculation = 0;
//   for (i = 0; i < newfriendarray.length; i++) {
//       calculation += Math.abs(newfriendarray[i] - friend0[i]);
//   }

//Insert logic that determines the smallest difference - that's the friend who is the winner, chicken dinner
////////////////////////////////

  // console.log(calculation);
  // console.log(friend0);
  // console.log(newfriend);
  friendsarray.push(newfriend);
  console.log(friendsarray);
  res.json(newfriend);
});

// Starts the server to begin listening
// =============================================================
app.listen(port, function() {
  console.log("App listening on PORT " + port);
});
