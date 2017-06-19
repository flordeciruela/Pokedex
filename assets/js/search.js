'use strict';

const PokemonItem = (props) => {
  const pokemonCard = $('<div class="item col-md-2 col-xs-12"></div>');
  const figure = $('<figure class="card col-xs-12 text-center"></figure>');
  const anchor = $('<a href="#"></a>');
  const img = $('<img src="" class="width-100">');
  const figcaption = $('<figcaption class="col-xs-12"></figcaption>');
  const iconPokeball = $('<a href="#" class="link-modal" data-toggle="modal" "data-target="#myModal"><img src="assets/css/icon/pokeball_gray.png"></a>');
  const iconHeart = $('<img src="assets/css/icon/valentines-heart.png">');
  const iconData = $('<img src="assets/css/icon/data.png">');
  const name = $('<span class="center-block">'+props.pokemon.pokemon_species.name+'</span>');

	const getIdImg = () => {
	  let indexOfPokemon = props.pokemon.entry_number;
		if (indexOfPokemon < 10) {
			indexOfPokemon = "00" + indexOfPokemon;
		} else if (indexOfPokemon < 100) {
			indexOfPokemon = "0" + indexOfPokemon;
		}
		return indexOfPokemon;
	}

	let idImg = getIdImg();
	console.log(idImg);
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

const reRender = (container,filteredPokemons,update) => {
  container.empty();
  filteredPokemons.forEach((pokemon) => {
    const pokemonItem = PokemonItem({
      pokemon: pokemon,
      update:  update
    });
    container.append(pokemonItem);
    console.log(pokemonItem);
  });
}

const Modal = ()=>{
  const modalHeader = $('.modal-header');
  const modalTitle = $('<p>'+props.pokemon.pokemon_species.name+'</p>');
  modalHeader.append(modalTitle);
  return modalHeader;
};

const Search = (update) => {
  const parent = $('<section></section>');
  const pokemons = $('<div class="pokemons"></div>');
  const input = $('input');

  input.on('keyup', (e) => {
    const filteredPokemons = filterByName(state.pokemons,$(e.target).val());
    reRender(pokemons,filteredPokemons,update);
  });

  parent.append(pokemons);
  return parent;
}
