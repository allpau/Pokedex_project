//create array of pokemon//
let pokemonList = [

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
  number: 4,
  type: '<sp class=fire>Fire</sp>',
  height: 2,
  weight: 18.7
},

];
//add pokemon objects to array//
//pokemonList=[pokemon001, pokemon002, pokemon003, pokemon004];

for (let i=0; i<pokemonList.length; i++){
  document.write("<h3 class=name>Name\: ", pokemonList[i].name, "</h3>");
  if (pokemonList[i].height > 6)
    {document.write("<p class=height>Height\: ",  pokemonList[i].height, "          Wow\, that is Big\!</p>")

    } else{document.write("<p class=height>Height\: ", pokemonList[i].height, " </p>")

  }
  document.write("<p class=type>Type\: ", pokemonList[i].type, " </p>")
  document.write("<p class=weight>Weight\: ",  pokemonList[i].weight, " </p>")
  document.write("<p class=number>Number\: ", pokemonList[i].number, " </p>")
}
