'use strict';

const filterByName = (pokemons,query) => {
  return pokemons.filter((pokemon) => {
    return pokemon.pokemon_species.name.toLowerCase().indexOf(query.toLowerCase()) == 0;
  });
}


$('button').on('click', (e) => {
	const alphabet = "abcdefghijklmnopqrstuvwxyz";
	for (var i = 0; i < alphabet.length; i++) {
		state.pokemons.forEach((pokemon) => {
			if (pokemon.pokemon_species.name.toLowerCase()[0] == alphabet[i]) {
				console.log(pokemon.pokemon_species.name.toLowerCase());// enlistar en orden alfabético.
			}
		});
	}
});
