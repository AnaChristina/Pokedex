import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [ posts, setPosts ] = useState([])

  useEffect(() =>{
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0")  //fzd requisição API 
    .then((response) => { //o response esta se referindo a função axios da linha de cima. resposta do servidor.
      // console.log(response.data)  //fazendo aparecer nome dos pokemons no console. 
      //setPosts(response.data)

      //  - Listar os pokimon 
      //  - Quando o usuário clicar no nome do pokemon, você vai fazer a requisição para pegar os dados dele. 

      // aqui temos que colocar numa variavel ;
      setPosts(response.data.results) //Porque o objeto vem results
    })
    .catch(() => {
      console.log("deu ruimm mona tenta dnv")
    })
  },
[])

//Então, ali em cima na UIseEffect, a gente faz a requisição e então definimos o response.results como sendo o post.
// nessa parte do codigo ali, eu pego o posts que é um array, e uso um metodo javascript para percorrer o array e me ter um retorno.
// para cada item desse array, eu vou chamar de pokimon, mas eu poderia chamar de abacaxi ou item, tanto faz. é só pra referenciar o item no laço
// É tipo um For, só que você percorre todos os item e mais simples tambem.
 
  return(
    
    <div>
      {posts?.map((item) => (
        <div>
          <button>{ item.name }</button>
          
          <p>{ item.hability }</p>
        </div>
      ))}
    </div>
  )
}
export default App;
