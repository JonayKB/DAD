const DOM = {
    container: document.getElementById('container'),
};

async function getChampions() {
    // Fetch the list of champions
    const response = await fetch('https://ddragon.leagueoflegends.com/cdn/14.19.1/data/es_ES/champion.json');
    const data = await response.json();

    let champions = [];


    for (let champion of Object.values(data.data)) {
        const res = await fetch(`https://ddragon.leagueoflegends.com/cdn/14.19.1/data/es_ES/champion/${champion.id}.json`);
        const detailedData = await res.json();
        console.log(Object.values(detailedData.data)[0]);
        champions.push(Object.values(detailedData.data)[0]);
    }

    return champions;
}

async function showChampions() {

    const champions = await getChampions();


    champions.forEach((champion) => {
        const championElement = document.createElement('div');
        championElement.classList.add('champion');


        championElement.innerHTML = `
    <div class="image-container">
        <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg" alt="${champion.name}" class="loading">
        <h2>${champion.name}</h2>
        <div class="abilities">
            <div class="ability-container">
                <img src="https://ddragon.leagueoflegends.com/cdn/14.19.1/img/passive/${champion.passive.image.full}" alt ="${champion.passive.name}" class="ability"/>
                <span class="tooltip">${champion.passive.name}</span>
            </div>
            ${champion.spells.map(spell => `
            <div class="ability-container">
                <img src="https://ddragon.leagueoflegends.com/cdn/14.19.1/img/spell/${spell.image.full}" alt="${spell.id}" class="ability"/>
                <span class="tooltip">${spell.name}</span>
            </div>`).join('')}
        </div>
    </div>
    <p>${champion.title}</p>
`;



        DOM.container.appendChild(championElement);
    });
}

showChampions();


showChampions();
