// # Latihan

// 1. Dapatkan skor total *user force* saja dengan data di bawah ini. Lakukan langkah demi langkah!

var personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];

var forceUser = personnel.filter(person => person.isForceUser === true);

var totalPilotingScore = forceUser.reduce((acc, score) => acc + score.pilotingScore, 0);
var totalShootingScore = forceUser.reduce((acc, score) => acc + score.shootingScore, 0);

console.log(`Piloting score force user = ${totalPilotingScore}`)
console.log(`Shooting score force user = ${totalShootingScore}`)
