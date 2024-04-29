'use client';
import React from 'react';
//import { useState } from 'react';
import  Boton  from './Boton';

const Counter = ({ counter, setCounter }) => {
  console.log('counter', counter);

  const increase = () => {
      setCounter(counter + 1);
  };

  const decrease = () => {
      setCounter(counter - 1);
  };

  return (
      <div className='flex justify-center items-center gap-3'>
          <Boton onClick={decrease}>-</Boton>
          <p>{counter}</p>
          <Boton onClick={increase}>+</Boton>
      </div>
  );
};

export default Counter;

/*const Counter = ({ counter, setCounter }) => { 
    console.log('counter', counter);

    const increase = () => {
        console.log('increase');
        setCounter(counter + 1);
    };

    const decrease = () => {
        console.log('decrease');
        setCounter(counter - 1);
    };

    return (
        <div className='flex justify-center items-center gap-3'>
            <Boton onClick={decrease}>-</Boton>
            <p>{counter}</p>
            <Boton onClick={increase}>+</Boton>
        </div>
    );
};

export default Counter;
*/

/*
const Counter = () => {
    const [counter,setCounter] = useState(1)
    console.log('counter',counter);
 
    const increase = () => {
      console.log('increase');
        setCounter(counter+1)

    }
    const decrease = () => {
      console.log('decrease');
        setCounter(counter-1)
    }
  return (
    <div className='flex justify-center items-center gap-3'>
        <Boton onClick = {decrease}>-</Boton>
        <p>{counter}</p>
        <Boton onClick = {increase}>+</Boton>
    </div>
  )
}*/