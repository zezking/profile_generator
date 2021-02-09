const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "What's your name? Nicknames are also acceptable :) ",
  (answer1) => {
    // TODO: Log the answer in a database

    rl.question("What's an activity you like doing? ", (answer2) => {
      // TODO: Log the answer in a database

      rl.question("What do you listen to while doing that? ", (answer3) => {
        // TODO: Log the answer in a database
        rl.question(
          "Which meal is your favourite (eg: dinner, brunch, etc.) ",
          (answer4) => {
            rl.question(
              "What's your favourite thing to eat for that meal? ",
              (answer5) => {
                rl.question(
                  "Which sport is your absolute favourite? ",
                  (answer6) => {
                    // TODO: Log the answer in a database
                    rl.question(
                      "What is your superpower? In a few words, tell us what you are amazing at! ",
                      (answer7) => {
                        // TODO: Log the answer in a database
                        console.log(`Here is result of your survey`);
                        console.log(`Name ${answer1}`);
                        console.log(`Fav Activity ${answer2}`);
                        console.log(`Fav Music ${answer3}`);
                        console.log(`Fav Meal ${answer4}`);
                        console.log(`Fav Food ${answer5}`);
                        console.log(`Fav Sports ${answer6}`);
                        console.log(`Superpower ${answer7}`);

                        rl.close();
                      }
                    ); // TODO:
                  }
                ); // TODO: Log the answer in a database
              }
            );
          }
        );
      });
    });
  }
);
