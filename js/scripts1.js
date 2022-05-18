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
  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  };
})();


document.write(pokemonRepository.getAll()); // [ { name: 'Pikachu' } ]
