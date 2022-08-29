const homeTeamInfo = {
	"teamName": "Brooklyn Nets", 
	"colors": ["Black", "White"], 
	"players": {
		"Alan Anderson": {
			"number": 0, 
			"shoe": 16, 
			"points": 22, 
			"rebounds": 12, 
			"assists": 12, 
			"steals": 3, 
			"blocks": 1, 
			"slamDuncks": 1
		},
		"Reggie Evans": {
			"number": 30, 
			"shoe": 14, 
			"points": 12, 
			"rebounds": 12, 
			"assists": 12, 
			"steals": 12, 
			"blocks": 12, 
			"slamDuncks": 7
		},
		"Brook Lopez": {
			"number": 11, 
			"shoe": 17, 
			"points": 17, 
			"rebounds": 19, 
			"assists": 10, 
			"steals": 3, 
			"blocks": 1, 
			"slamDuncks": 15
		},
		"Mason Plumlee": {
			"number": 1, 
			"shoe": 19, 
			"points": 26, 
			"rebounds": 12, 
			"assists": 6, 
			"steals": 3, 
			"blocks": 8, 
			"slamDuncks": 5
		},
		"Jason Terry": {
			"number": 31, 
			"shoe": 15, 
			"points": 19, 
			"rebounds": 2, 
			"assists": 2, 
			"steals": 4, 
			"blocks": 11, 
			"slamDuncks": 1
		}
	} 
};

const awayTeamInfo = {
	"teamName": "Charlotte Hornets", 
	"colors": ["Turquoise", "Purple"], 
	"players": {
		"Jeff Adrien": {
			"number": 4, 
			"shoe": 18,
			"points": 10, 
			"rebounds": 1, 
			"assists": 1, 
			"steals": 2, 
			"blocks": 7, 
			"slamDuncks": 2
		},
		"Bismak Biyombo": {
			"number": 0, 
			"shoe": 16, 
			"points": 12, 
			"rebounds": 4, 
			"assists": 7, 
			"steals": 7, 
			"blocks": 15, 
			"slamDuncks": 10
		},
		"DeSagna Diop": {
			"number": 2, 
			"shoe": 14, 
			"points": 24, 
			"rebounds": 12, 
			"assists": 12, 
			"steals": 4, 
			"blocks": 5, 
			"slamDuncks": 5
		},
		"Ben Gordon": {
			"number": 8, 
			"shoe": 15, 
			"points": 33, 
			"rebounds": 3, 
			"assists": 2, 
			"steals": 1, 
			"blocks": 1, 
			"slamDuncks": 0
		},
		"Brendan Haywood": {
			"number": 33, 
			"shoe": 15, 
			"points": 6, 
			"rebounds": 12, 
			"assists": 12, 
			"steals": 22, 
			"blocks": 5, 
			"slamDuncks": 12
		}
	} 
};

const gameObject = function () {
	return { "home": homeTeamInfo, "away": awayTeamInfo };
};


const getPlayers = function () {
	const gameObj = gameObject();

	return { ...gameObj["away"]["players"], ...gameObj["home"]["players"] };
};


const numPointsScored = function (playerName) {
	return getPlayers()[playerName]["points"];
};


const shoeSize = function (playerName) {
	return getPlayers()[playerName]["shoe"];
};


const getTeams = function () {
	const gameObj = gameObject();

	return [ gameObj["home"], gameObj["away"] ];
};


const teamColors = function (teamName) {
	return getTeams().find(team => team["teamName"] === teamName)["colors"];
};


const teamNames = function () {
	return getTeams().map(team => team["teamName"]);
};


const playerNumbers = function (teamName) {
	const players = getTeams().find(team => team["teamName"] === teamName)["players"];
	const jerseyNumbers = [];
	for(const player in players)
		jerseyNumbers.push(players[player]["number"]);

	return jerseyNumbers;
};


const playerStats = function (playerName) {
	return getPlayers()[playerName];
};


const bigShoeRebounds = function () {
	const players = getPlayers();
	let largestShoePlayer = Object.keys(players)[0];
	for (player in players) {
		if (players[player]["shoe"] > players[largestShoePlayer]["shoe"])
			largestShoePlayer = player;
	}

	return players[largestShoePlayer]["rebounds"];
};


const mostPointsScored = function () {
	const players = getPlayers();
	let mostPoints = Object.keys(players)[0];
	for (player in players) {
		if (players[player]["points"] > players[mostPoints]["points"])
			mostPoints = player;
	}

	return mostPoints;
};


const winningTeam = function () {
	const teams = gameObject();
	let homeTotal = 0;
	let awayTotal = 0;
	for (player in teams["home"]["players"])
		homeTotal += teams["home"]["players"][player]["points"];
	for (player in teams["away"]["players"])
		awayTotal += teams["away"]["players"][player]["points"];

	return homeTotal > awayTotal ? teams["home"]["teamName"] : teams["away"]["teamName"];
};


const playerWithLongestName = function () {
	const players = getPlayers();
	let longest = 0;
	let longestName = "";

	for (player in players) {
		if (player.length > longest) {
			longest = player.length; 
			longestName = player;
		}
	}

	return longestName;
};


const doesLongNameStealATon = function () {
	return mostPointsScored() === playerWithLongestName();
};
