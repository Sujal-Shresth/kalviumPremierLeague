//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;
//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon){
  var managerDetails = [managerName, managerAge, currentTeam, trophiesWon];
  return managerDetails;
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation){
  if(formation.length == 0){
    return null;
  }
  var formationObject = {
    defender : formation[0],
    midfield: formation[1],
    forward: formation[2]
  }
  return formationObject;
}
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){
  var debutePlayer = players.filter((player) => player.debut == year)
  console.log(debutePlayer)
  return debutePlayer;
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position){
  var positionPlayer = players.filter((player) => {
    return player.position == position;
  })
  return positionPlayer;
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName) {
  let array = players.filter((player) => {
    let hasWon = false;
    for (let j = 0; j < player.awards.length; j++) {
      if(player.awards[j].name === awardName) hasWon = true;
    }
    return hasWon;
  });
  return array;
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes) {
  let array = players.filter((player) => {
    let count = 0;
    for (let j = 0; j < player.awards.length; j++) {
      if (player.awards[j].name == awardName)
       {
          count++;       
      }
    }
    return(count == noOfTimes)
  });
  return array;
}


//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country) {
  let playerWonAward = filterByAward(awardName);
  let array = playerWonAward.filter(player => player.country == country);
  return array;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  let array = players.filter(player => {
    return (player.awards.length >= noOfAwards && player.team == team && player.age < age)
  });
  return array;
}

//Progression 9 - Sort players in descending order of their age
function SortByAge() {
  var sortedPlayers = players;
  for (let i = 0; i < sortedPlayers.length; i++) {
    for (let j = i + 1; j < sortedPlayers.length; j++) {
      if (sortedPlayers[i].age < sortedPlayers[j].age) {
        let temp = sortedPlayers[i];
        sortedPlayers[i] = sortedPlayers[j];
        sortedPlayers[j] = temp;
      }
    }
  }
  console.log(sortedPlayers);
  return sortedPlayers;
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function FilterByTeamxSortByNoOfAwards(team){
  let count = 0;
  let filteredTeamPlayers = players.filter((player) => {
    return player.team == team;
  })
  for (let i = 0; i < filteredTeamPlayers.length; i++) {
    for (let j = i + 1; j < filteredTeamPlayers.length; j++) {
      if (filteredTeamPlayers[i].awards.length < filteredTeamPlayers[j].awards.length) {
        let temp = filteredTeamPlayers[i];
        filteredTeamPlayers[i] = filteredTeamPlayers[j];
        filteredTeamPlayers[j] = temp;
      }
    }
  }
  return filteredTeamPlayers;
}
//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function SortByNamexAwardxTimes(awardName, noOfTimes, country){
  var filteredAwardPlayers = filterByAwardxTimes(awardName,noOfTimes);
  var filteredCountryPlayers = filteredAwardPlayers.filter((player) => {
    return player.country == country;
  })
  for(let i = 0; i < filteredCountryPlayers; i++){
    for (let j = i + 1; j < filteredCountryPlayers.length; j++) {
      if (filteredCountryPlayers[i].name > filteredCountryPlayers[j].name) {
        let temp = filteredCountryPlayers[i];
        filteredCountryPlayers[i] = filteredCountryPlayers[j];
        filteredCountryPlayers[j] = temp;
      }
    }
  }
  return filteredCountryPlayers;
}
//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order

function SortByNamexOlderThan(age) {
  var data = players.filter(player => player.age > age);
  for(let i = 0; i < data; i++){
    for (let j = i + 1; j < data.length; j++) {
      if (data[i].name > data[j].name) {
        let temp = data[i];
        data[i] = data[j];
        data[j] = temp;
      }
    }
  }
  for (let i = 0; i < data.length; i++) {
    data[i].awards.sort((a, b) => b.year - a.year);
  }
  return data;
}