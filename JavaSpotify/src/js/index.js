import songs from '../assets/songs/*.mp3';
import Player from './Player.js';


const map = {};

let aux = 1;
for (let key of Object.keys(songs)) {
    map[`.item-${aux}`] = songs[key];
    aux++;
}



const player = new Player(map);


document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', () => {

        const key = item.classList[1];
        if (player.playPauseSong(key) === "paused") {
            item.classList.remove('playing');
        } else {
            item.classList.add('playing');

        }
    });
});
