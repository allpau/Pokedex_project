//IIFE wrapper//
let pokemonRepository = (function () {
  let pokemonList =[


  //create objects to contain pokemon data//
    {
    name: 'Bulbasaur',
    number: 1,
    type: ['<sp class=grass>Grass</sp>', '<sp id=poison>Poison</sp>'],
    height: 2.4,
    weight: 15.2
  },


  {
    name: 'Ivysaur',
    number: 2,
    type: ['<sp class=grass>Grass</sp>', '<sp id=poison>Poison</sp>'],
    height: 3.25,
    weight: 28.7
  },

  {
    name: 'Venusaur',
    number: 3,
    type: ['<sp class=grass>Grass</sp>', '<sp id=poison>Poison</sp>'],
    height: 6.58,
    weight: 220.5
  },

  {
    name: 'Charmander',
    number: '4',
    type: '<sp class=fire>Fire</sp>',
    height: 2,
    weight: 18.7,
  },

  ];
  //add pokemon to list//
  function add(pokemon) {
    pokemonList.push(pokemon);
  }


  //retreive all pokemon and their data//
  function getAll() {
    return pokemonList;
  }
//add list items, create buttons, and show individual pokemon data//
  function addListItem(pokemon){
    let pokemonList = document.querySelector('.pokemon-list');
    let listOfPokemon = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    listOfPokemon.appendChild(button);
    pokemonList.appendChild(listOfPokemon);
    button.addEventListener('click', function (event) {
      showDetails(pokemon)
    });
    }

    function showDetails(pokemon) {
      console.log(pokemon);

  }




  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails
  };
})();

//console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function(pokemon) {

  pokemonRepository.addListItem(pokemon);





});
