const DOM = {
    container: document.getElementById('container'),
}

async function getChampions() {
    const response = await fetch('https://ddragon.leagueoflegends.com/cdn/14.19.1/data/es_ES/champion.json');
    const data = await response.json();
    Object.values(data.data).forEach((champion) => {
        let champions = [];
        fetch(`https://ddragon.leagueoflegends.com/cdn/14.19.1/data/en_US/champion/${champion.id}.json`)
            .then(res => res.json())
            .then(
                data => { champions.push(data.data) })
        return champions;

    }
    );
}

function showChampions() {

};

showChampions();

/**
 * 
 */