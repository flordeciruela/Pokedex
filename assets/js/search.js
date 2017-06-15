'use strict';

const PokemonItem = (props) => {
  const pokemonCard = $('<div class="pokemons"></div>');
  const name = $('<h3>'+props.pokemon.pokemon_species.name+'</h3>');
  pokemonCard.append(name);
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
