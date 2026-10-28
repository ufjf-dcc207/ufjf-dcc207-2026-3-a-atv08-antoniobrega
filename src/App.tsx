import './App.css'
import type { PacoteType } from './types'
import Pacote from './Pacotes'


const data:Array<PacoteType> =[
{
  id: "5fd729f6-b802-42bf-b9ec-be110e06fa9c",
  largura: 20.0,
  altura:30.0,
  profundidade:40.0,
  peso:2.34,
},
{
  id: "5fd729f6-b802-42bf-b9ec-be110e06fa9c",
  largura: 15.0,
  altura:30.0,
  profundidade:10.0,
  peso:3.34,
}
]

function App() {


  return (
    
    <section>
    <h2>pacotes</h2>
      <div className='pacotes'>
     {data.map(p=> <Pacote pacote={p} key={p.id}/>)}
      </div>
      </section>
    
  )
}

export default App
