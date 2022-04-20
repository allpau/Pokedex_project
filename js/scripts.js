//create array of pokemon//
let pokemonList = [

//create objects to contain pokemon data//
  {
  name: 'Bulbasaur',
  number: 1,
  type: ['Grass', 'Poison'],
  height: '2\' 4\"',
  weight: 15.2
},


{
  name: 'Ivysaur',
  number: 2,
  type: ['Grass', 'Poison'],
  height: '3\' 3\"',
  weight: 28.7
},

{
  name: 'Venusaur',
  number: 3,
  type: ['Grass', 'Poison'],
  height: '6\' 7\"',
  weight: 220.5
},

{
  name: 'Charmander',
  number: 4,
  type: 'Fire',
  height: '2\'',
  weight: 18.7
},

];
//add pokemon objects to array//
//pokemonList=[pokemon001, pokemon002, pokemon003, pokemon004];

for (let i=0; i<pokemonList.length; i++){
  document.writeln('Name\: ' + pokemonList[i].name)
  document.writeln('Height\: ' + pokemonList[i].height)
  document.write('Type\: '+ pokemonList[i].type)
  document.write('Weight\: ' + pokemonList[i].weight)
  document.write('Number\: ' +pokemonList[i].number)
}
