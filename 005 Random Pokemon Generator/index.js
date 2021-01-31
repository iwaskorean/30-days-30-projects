const pokeContainer = document.querySelector('.container');
const getButton = document.querySelector('.button-get');
const pokemonsNumber = 30;
const typeColors = {
	fire: '#FDDFDF',
	grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
};

const randomId = () => {
    return Math.floor((Math.random() * (150 - 1)) + 1);
};

const fetchPokemons = async () => {
    for(let i = 1 ; i <= pokemonsNumber ; i++)  {
        await getPokemon(randomId());
    }
};

const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const res = await fetch(url);
	const pokemon = await res.json();
    createPokemon(pokemon);
};

const createPokemon = (pokemon) => {
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const type = pokemon.types[0].type.name;
    const color = typeColors[type];
    const pokeId = pokemon.id;
    const innerHTML = `
        <div class="card" style="background-color:${color}">
            <div class="image-box">
                <img class="image-poke" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png">
                <img class="image-poke" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokeId}.png">
            </div>
            <div class="typo-box">
                <div class="name">${name}</div>
                <div class="type">${type}</div>
            </div>
        </div>
    `;
    pokemonEl.innerHTML = innerHTML;
    pokeContainer.appendChild(pokemonEl);
}

getButton.addEventListener('click', () => {
    pokeContainer.innerHTML = '';
    fetchPokemons()
});