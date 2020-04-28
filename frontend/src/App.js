import React, {useState, useEffect} from 'react';

import './App.css';

import api from './services/api';

//import backgroundImage from './assets/background.jpeg';
//<img width ={300} src={backgroundImage} />


import Header from './components/Header'

function App(){

  const [projects, setProjects] = useState([]);
// useState retorna um array de 2 posições
// 1. Variável com o seu valor inicial
// 2. Função para atualizarmos esse valor

  //useEffect(() => {}, []);
//1. paramentro é qual função eu quero disparar
//2. quando eu quero disparar 
  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    })
  }, []);


//useEffet é usado para disparar funções quando tiver informações alteradas ou quando
//quiser disparar alguma função quando um componente for disparado em tela.


  async function handleAddProject(){
    //projects.push(`Novo projeto ${Date.now()}`);
    //setProjects([...projects, `Novo projeto ${Date.now()}`]);
    const response = await api.post('projects' , {
      title:`Novo projeto ${Date.now()}` ,
      owner: "Esaú Alencar" ,
    });
    
    const project = response.data;
    setProjects([...projects, project]);
    
  }

  return(
    <>
  <button type="button" onClick={handleAddProject} > Adicionar projeto</button>

    <Header title ="Projects" />

    

    <ul>
      {projects.map( project => <li key={project.id}> {project.title} </li>)} 
      
    </ul>

   
   
    </>
  );
}
//  project => {return } ou  project => () ou  project => <codigos html>
export default App;