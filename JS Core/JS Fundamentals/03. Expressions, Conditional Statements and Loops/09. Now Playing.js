function nowPlaying(input) {
    let songName = input[0];
    let artistName = input[1];
    let duration = input[2];
    let songPlaying = `Now Playing: ${artistName} - ${songName} [${duration}]`;

    return songPlaying;
}

console.log(nowPlaying(['Number One', 'Nelly', '4:09']));;