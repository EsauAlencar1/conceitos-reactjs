import React from 'react';
// recebe props - desestruturação para pegar apenas title, poderia ser props
// no h1 puxar props.title
export default function Header({title}){
  return (
    <header>
      <h1>{title}</h1>
      
    </header>
  )
}