import axios from "axios";
//? Declarar clases de forma implicita
// export class Pokemon {
//     public id: number;
//     public name: string;

//     constructor(id:number, name:string) {
//         this.id = id;
//         this.name = name;
//         console.log('constructor llamado');
//     }
// }

// export const charmander = new Pokemon(1,'Charmander');


//!Declarar clases de forma explicita
export class Pokemon {

    get imageUrl():string {
        return `https://pokemon.com/${this.id}.jpg`
    }

    constructor(
        public readonly id:number,
        public name:string,
        // public imageUrl: string,
    ) {}


    scream() {
        console.log(`${this.name.toUpperCase()}!!!`);
    
    }

    speak() {
        console.log(`${this.name}... ${this.name}`);
    }

    async getMoves() {
        // const moves = 0;
        const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/4')
        console.log(data.moves);

        return data;
    }
}
export const charmander = new Pokemon(1,'Charmander',);

// charmander.id = 2; //Error porque es de solo lectura
// charmander.name = 'Pikachu';  
// console.log(charmander.imageUrl);

// charmander.scream();
// charmander.speak();

// console.log(charmander.getMoves());
charmander.getMoves()