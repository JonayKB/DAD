export default class Song{
    constructor(key,audioPath){
        this.key = key;
        this.audioElement = new Audio(audioPath);
        console.log(this.audioElement)

    }
    play(){
        this.audioElement.play();
    }
    pause(){
        this.audioElement.pause();
    }
    isPlaying(){
        return !this.audioElement.paused;
    }

}