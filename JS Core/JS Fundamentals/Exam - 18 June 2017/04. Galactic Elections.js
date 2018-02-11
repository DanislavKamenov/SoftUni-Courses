function galacticElections(input) {
    let totalVotes = 0;
    let electionData = new Map();
    for (let {system, candidate, votes} of input) {
        if (!electionData.has(system)) {
            electionData.set(system, new Map());
            electionData.set(system, electionData.get(system).set(candidate, Number(votes)));
        } else {
            if (!electionData.get(system).has(candidate)) {
                electionData.set(system, electionData.get(system).set(candidate, Number(votes)));
            } else {
                electionData.set(system, electionData.get(system).set(candidate, electionData.get(system).get(candidate) + Number(votes)))
            }
        }
        totalVotes += votes;
    }
    let systemWinners = [...electionData.values()].map(pairs => [...pairs.entries()].sort((a, b) => b[1] - a[1]));
    let candidatesVotes = {};
    let count = 0;
    for (let winners of systemWinners) {
        let totalSystemVotes = 0;
        let winner = winners[0][0];
        for (let [names, votes] of winners) {
            totalSystemVotes += votes;
        }
        let systems = [...electionData.keys()];
        candidatesVotes[systems[count]] = {};
        candidatesVotes[systems[count]]['candidate'] = winner;
        candidatesVotes[systems[count]]['votes'] = totalSystemVotes;
        count++;
    }
    let players = {};
    for (let key in candidatesVotes) {
        if (players.hasOwnProperty(candidatesVotes[key]['candidate'])) {
            players[candidatesVotes[key]['candidate']] += candidatesVotes[key]['votes'];
        } else {
            players[candidatesVotes[key]['candidate']] = candidatesVotes[key]['votes'];
        }
    }
    let sortedPlayers = Object.keys(players).sort((a, b) => players[b] - players[a]);
    let winner = sortedPlayers[0];
    let winnerPts = players[winner];
    let runnerUp = sortedPlayers[1];
    let runnerUpPts = players[runnerUp];

    if (runnerUp === undefined) {
        console.log(`${winner} wins with ${winnerPts} votes\n${winner} wins unopposed!`);
    } else if (winnerPts > totalVotes / 2) {
        console.log(`${winner} wins with ${winnerPts} votes`);
        console.log(`Runner up: ${runnerUp}`);
        let runnerUpSystems = Object.keys(candidatesVotes).filter(x => candidatesVotes[x]['candidate'] === runnerUp).sort((a, b) => candidatesVotes[b]['votes'] - candidatesVotes[a]['votes']);
        runnerUpSystems.forEach(sys => console.log(`${sys}: ${candidatesVotes[sys]['votes']}`));
    } else {
        let player1Percent = Math.floor(winnerPts / totalVotes * 100);
        let runnerUpPercent = Math.floor(runnerUpPts / totalVotes * 100);
        console.log(`Runoff between ${winner} with ${player1Percent}% and ${runnerUp} with ${runnerUpPercent}%`);
    }
}

let arr = [ { system: 'Theta', candidate: 'Flying Shrimp', votes: 10 },
    { system: 'Sigma', candidate: 'Space Cow',     votes: 200 },
    { system: 'Sigma', candidate: 'Flying Shrimp', votes: 120 },
    { system: 'Tau',   candidate: 'Space Cow',     votes: 15 },
    { system: 'Sigma', candidate: 'Space Cow',     votes: 60 },
    { system: 'Tau',   candidate: 'Flying Shrimp', votes: 150 } ];
let arr2 = [ { system: 'Tau',     candidate: 'Flying Shrimp', votes: 150 },
    { system: 'Tau',     candidate: 'Space Cow',     votes: 100 },
    { system: 'Theta',   candidate: 'Space Cow',     votes: 10 },
    { system: 'Sigma',   candidate: 'Space Cow',     votes: 200 },
    { system: 'Sigma',   candidate: 'Flying Shrimp', votes: 75 },
    { system: 'Omicron', candidate: 'Flying Shrimp', votes: 50 },
    { system: 'Omicron', candidate: 'Octocat',       votes: 75 } ];
let arr3 = [ { system: 'Theta', candidate: 'Kim Jong Andromeda', votes: 10 },
    { system: 'Tau',   candidate: 'Kim Jong Andromeda', votes: 200 },
    { system: 'Tau',   candidate: 'Flying Shrimp',      votes: 150 } ];

galacticElections(arr3);
