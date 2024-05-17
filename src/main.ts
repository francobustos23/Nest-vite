import { charmander } from './bases/03-classes'
import './style.css'
// import { pokemons } from './bases/02-objects'
// import { name, age } from './bases/01-types'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h2>HOLA ${charmander.name} ${charmander.id}!!!<h2>
  </div>
`
