export const pokemonsIds = [1, 20, 30, 34, 66];


interface Pokemon {
    id: number;
    name: string;
    age?: number;
}

export const bulbasaur: Pokemon = {
    id: 1,
    name: "Bulbasaur",
}

export const charmander: Pokemon = {
    id: 2,
    name: "Charmander"
}

console.log(bulbasaur);

// pokemonsIds.push(+'1') //el + convierte el string a number

// console.log(pokemonsIds);