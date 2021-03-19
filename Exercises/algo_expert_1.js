// PROBLEM:
//   There's an algorithms tournament taking place in which teams of programmers compete against each other to solve algorithmic problems as fast as possible.Teams compete in a round robin, where each team faces off against all other
//   teams. Only two teams compete against each other at a time, and

// for each competition, one team is designated the home team, while the
//other team is the away team. In each competition

// there's always one winner and one loser;
// there are no ties.
// A team receives 3 points if it wins and 0 points if it loses.
// The winner of the tournament is the team that receives the most amount of points.
//   It's guaranteed that exactly one team will win the tournament and that
//   each team will compete against all other teams exactly once  (n Combination n-1 matches)
// Number of teams >= 2

//   Given an array of pairs representing the teams that have competed against each other and an array containing the results of each competition

// P: Write a function that returns the winner of the tournament.

// I : The input arrays are named competitions and results, respectively.
//   - The competitions array has elements in the form of [homeTeam, awayTeam]
//      -- where each team is a string of at most 30 characters representing the name of the team.
//   - The results array contains information about the winner of each corresponding competition in the competitions array.
//      -- Specifically, results[i] denotes the winner of competitions[i], where
//       --- a 1 in the results array means that the home team in the corresponding

// MM:
// Map the competititors to the number of points they have recieved, return the team with the highest points.

// A:
// -- SET a competitors object.
// -- Iterate through the competitions, taking the winner from the results array.
//      -- IF the winner is in the competitors obj, assign their points to the sum,
//      -- ELSE add their name as a key.
//  -- Once you have iterated all the way through the array, return the key of the object whose value is the max.
//  -- This is a naive solution

//E: EXAMPLES:
let competitions = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"],
];

let result = [0, 0, 1];
function tournamentWinner(competitions, results) {
  let scores = {};
  let winnerScore;

  for (let i = 0; i < competitions.length; i++) {
    const competitors = competitions[i];
    const winner = competitors[1 - results[i]];
    let winnerScore;
    if (scores[winner]) {
      let newScore = scores[winner] + 3;
      scores[winner] = newScore;
      if (newScore > winnerScore) {
        winnerScore = newScore;
      }
    } else {
      scores[winner] = 3;
    }
    debugger;
  }
  return winningTeam;
}

console.log(tournamentWinner(competitions, result));
// C# beats HTML, Python Beats C#, and Python Beats HTML.
// HTML - 0
// C# - 3
// Python - 6

//  */
