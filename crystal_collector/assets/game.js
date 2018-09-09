
// variables needed for game
var wins = 0;
var losses = 0;
var goalNumber = [];
var currentTotal = 0;
var rq = 0;
var am = 0;
var tq = 0;
var fl = 0;
// havent figured out how to use this... vaguely aware this will be useful for resets
isGoalReached = false;
// click start function that initiates all game functions
// includes: random number generator for gal number, and rng for each crystal, reset function for game
// also includes text that will update wins, losses, and current total numbers
$(".start").on("click", function () {
        var goalNumber = Math.floor(Math.random() * 50 + 100);
        $(".gn").text("Goal Number: " + goalNumber);
        var rq = Math.floor(Math.random() * 6) + 1;
        var am = Math.floor(Math.random() * 11) + 4;
        var tq = Math.floor(Math.random() * 16) + 9;
        var fl = Math.floor(Math.random() * 6) + 20;
        var currentTotal = 0;
        isGoalReached = false;
        $(".wins").text("Wins: " + wins);
        $(".losses").text("Losses: " + losses);
        $(".ct").text("Current Total: " + currentTotal);
});

// reset function allows game to reset to new numbers for crystals and goal and clears current total
if (isGoalReached = true) {
        function reset() {
                var goalNumber = Math.floor(Math.random() * 50 + 100);
                $(".gn").text(goalNumber);
                var rq = Math.floor(Math.random() * 6) + 1;
                var am = Math.floor(Math.random() * 11) + 4;
                var tq = Math.floor(Math.random() * 16) + 9;
                var fl = Math.floor(Math.random() * 6) + 20;
                currentTotal = 0;
                $('.ct').text(currentTotal);
        }


        // gem functions 
        $(".rq").on('click', function () {
                currentTotal = currentTotal + rq;
                $(".ct").text(currentTotal);

                if (isGoalReached === true) {
                        win();
                }
                else if (currentTotal > goalNumber);
                lose();
        });

        $(".am").on('click', function () {
                currentTotal = currentTotal + am;
                $(".ct").text(currentTotal);
                if (isGoalReached === true) {
                        win();
                }
                else if (currentTotal > goalNumber) {
                        lose();
                }
        })
        $(".tq").on('click', function () {
                currentTotal = currentTotal + tq;
                $(".ct").text(currentTotal);
                if (isGoalReached === true) {
                        win();
                }
                else if (currentTotal > goalNumber) {
                        lose();
                }
        })
        $(".fl").on('click', function () {
                currentTotal = currentTotal + fl;
                $(".ct").text(currentTotal);

                if (isGoalReached === true) {
                        win();
                }
                else if (currentTotal > goalNumber) {
                        lose();
                }
        });

        function win() {

                wins++;
                $(".wins").text(wins);
                reset();
        }

        function lose() {
                losses++;
                $(".losses").text(losses);
                reset()
        }
}


// current total function not working :'(
        





















































