'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');

  if (state.selectedPokemon == null) {
    wrapper.append(Search(_ => render(root)));
    root.append(wrapper);
  } else {
		alert("error");
    root.append(wrapper);
  }
}

const state = {
  pokemons: null,
  selectedPokemon: null
};

$( _ => {

  getJSON(url, (err, json) => {

    if (err) { return alert(err.message);}
		state.pokemons = json.pokemon_entries;
		const root = $('#root');
		render(root);
		//console.log(state.pokemons);  //all
		console.log(state.pokemons[0].pokemon_species);  //one
		/*
    if (state.pokemons[i].pokemon_species.name[0].toUpperCase() == filter[0]) {
			var p ='<p>'+state.pokemons[i].pokemon_species.name+'</p>';
      root.append(p);
				//document.write(state.pokemons[i].pokemon_species.name);
    } else {
        null;
    }
		*/

  });

});
