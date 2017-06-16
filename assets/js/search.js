'use strict';

const PokemonItem = (props) => {
  const pokemonCard = $('<div class="pokemons"></div>');
  const name = $('<h3>'+props.pokemon.pokemon_species.name+'</h3>');

	const getIdImg = () => {
	  let indexOfPokemon = props.pokemon.entry_number - 1;
		if (indexOfPokemon < 10) {
			indexOfPokemon = "00" + indexOfPokemon;
		} else if (indexOfPokemon < 100) {
			indexOfPokemon = "0" + indexOfPokemon;
		}
		return indexOfPokemon;
	}
	getIdImg();

	let idImg = getIdImg();
	console.log(idImg);
	let urlOrigin = "http://assets.pokemon.com/assets/cms2/img/pokedex/detail/"+idImg+".png";
	const img = $('<img src="">');
	img.attr("src", urlOrigin);

  pokemonCard.append(name);
	pokemonCard.append(img);
  return pokemonCard;
}

const reRender = (container,filteredPokemons,update) => {
  container.empty();
  filteredPokemons.forEach((pokemon) => {
    const pokemonItem = PokemonItem({
      pokemon: pokemon,
      update:  update
    });
    container.append(pokemonItem);
  });
}

const Search = (update) => {
  const parent = $('<div></div>');
  const search = $('<div class="search"></div>');
  const input = $('<input type="text">');
  const pokemons = $('<div class="pokemons"></div>');

  input.on('keyup', (e) => {
    const filteredPokemons = filterByName(state.pokemons,$(e.target).val());
    reRender(pokemons,filteredPokemons,update);
  });

  parent.append(search);
  parent.append(pokemons);
  search.append(input);

  return parent;
}
