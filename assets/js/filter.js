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

        const pokemonCard = $('<div class="item col-md-2 col-xs-12"></div>');
        const figure = $('<figure class="card col-xs-12 text-center"></figure>');
        const anchor = $('<a href="#"></a>');
        const img = $('<img src="" class="width-100">');
        const figcaption = $('<figcaption class="col-xs-12"></figcaption>');
        const iconPokeball = $('<a href="#" class="link-modal" data-toggle="modal" "data-target="#myModal"><img src="assets/css/icon/pokeball_gray.png"></a>');
        const iconHeart = $('<img src="assets/css/icon/valentines-heart.png">');
        const iconData = $('<img src="assets/css/icon/data.png">');
        const name = $('<span class="center-block">'+pokemon.pokemon_species.name+'</span>');

        const getIdImg = () => {
          let indexOfPokemon = pokemon.entry_number;
          if (indexOfPokemon < 10) {
            indexOfPokemon = "00" + indexOfPokemon;
          } else if (indexOfPokemon < 100) {
            indexOfPokemon = "0" + indexOfPokemon;
          }
          return indexOfPokemon;
        }

        let idImg = getIdImg();

        let urlOrigin = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"+idImg+".png";
        img.attr("src", urlOrigin);

        pokemonCard.append(figure);
        figure.append(anchor);
        anchor.append(img);
        figure.append(figcaption);
        figcaption.append(iconPokeball);
        figcaption.append(iconHeart);
        figcaption.append(iconData);
        figcaption.append(name);

        return pokemonCard;

			}
		});
	}
});
