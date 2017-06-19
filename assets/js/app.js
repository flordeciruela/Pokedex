'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper row"></div>');

  wrapper.append(Search(_ => render(root)));
  root.append(wrapper);
}

const state = {
  pokemons: null,
  selectedPokemon: []
};

$( _ => {

  getJSON(url, (err, json) => {

    if (err) { return alert(err.message);}
		state.pokemons = json.pokemon_entries;
		const root = $('#root');
		render(root);

  });

});
