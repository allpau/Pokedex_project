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


pokemonRepository.getAll().forEach(function(pokemon) {
  document.write("<h3 class=name>Name\: ", pokemon.name, "</h3>");
  //if statement to add comment about pokemon over 6 ft. need to research other options
  if (pokemon.height > 6)
    {document.write("<p class=height>Height\: ",  pokemon.height, "          Wow\, that is Big\!</p>")

    } else{document.write("<p class=height>Height\: ", pokemon.height, " </p>")

  }
  document.write("<p class=type>Type\: ", pokemon.type, " </p>")
  document.write("<p class=weight>Weight\: ",  pokemon.weight, " </p>")
  document.write("<p class=number>Number\: ", pokemon.number, " </p>");
});

//test
