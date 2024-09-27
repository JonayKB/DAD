import Song from './Song.js'

export default class Player {

    constructor(map) {
        this.songsMap = {};
        for(let key in map){
            this.songsMap[key] = new Song(key, map[key]);
        }
    }

    playPauseSong(key) {
        key = "."+key;
        let song = this.songsMap[key];
        if(song.isPlaying()){
            song.pause();
            return "paused";
        }else{
            song.play();
            return "playing";
        }
    }
}