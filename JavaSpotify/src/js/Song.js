export default class Song{
    constructor(key,audioPath){
        this.key = key;
        this.audioElement = new Audio(audioPath);

    }
    play(){
        this.audioElement.play();
        console.log(`${this.key} is playing`)
    }
    pause(){
        this.audioElement.pause();
        console.log(`${this.key} is paused`)
    }
    isPlaying(){
        return !this.audioElement.paused;
    }

}