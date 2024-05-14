import { bulbasaur } from './bases/02-objects'
import './style.css'
// import { name, age } from './bases/01-types'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h2>HOLA ${bulbasaur.name}<h2>
  </div>
`
