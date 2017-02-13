// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../data/friend.js");

module.exports = function(app) {
// API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------
    app.get("/api/friends", function(req, res) {
            res.json(friendsData);
  });



//   Post request when the user submits the form on the questionaire page
    app.post("/api/friends", function(req, res){
        // store the user input in a variable to use
        userChoice = req.body.score;
        
        // we begin by setting variables to match the scores
        //who matches the best with the user is the one to use//
        var overallMatch = 0;

        //we will establish the lowest score//
        //since the highest score a person could have is 50 which will be the maximum difference//
        var lowestMatch = 51;

        //we are going to create a new variable that would be best matching with the scores//
        var overallScore;
        console.log(friendsData.length);

        for (var i = 0; i< friendsData.length;i++)
        {       
            overallScore=0;

            for (var j = 0; j<friendsData[i].score.length; j++)
            {
                // now we shall get the difference between the total addition of the friends database score and the user entered score//
                overallScore = overallScore +(Math.abs(userChoice[j] -friendsData[i].score[i]));
            };//nested for loop ends here//

            // after the loop, if the overall score is less than the current score, then the score is replace by//
            // the overallScore, and the best match index is changed to the current position in the loop

            if (overallScore <lowestMatch){
                lowestMatch = overallScore;
                overallMatch = i;

            }
        }   //outer loop ends

        //push the current user to the array
        friendsData.push(req.body);

        //send the data for the best match to the server
        res.json(friendsData[overallMatch]);

    });

// app.use("/api/survey", function(req, res) {
//     res.json(userChoice);
//   });

 



// app.post("/api/tables", function(req, res) {
//     // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
//     // It will do this by sending out the value "true" have a table
   
//   });

//   // ---------------------------------------------------------------------------
//   // I added this below code so you could clear out the table while working with the functionality.
//   // Don"t worry about it!

//   app.post("/api/clear", function() {
//     // Empty out the arrays of data
//     tableArray = [];
    

//     console.log(tableData);
//   });

};