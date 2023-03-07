//@ts-ignore
import styled from 'styled-components'
import { Link } from 'react-router-dom';
export const Container = styled.div `
   display:flex;
   align-items:center;
   justify-content:center;
   height: 80vh;

`
export const Board = styled.div`
  width: 500px;
  height: 500px;
  background-color:#EAEAEA;
  border: 1px solid #ccc;
  display: grid;
  grid-template-columns: repeat(20, 1fr);

`
export const Cell = styled.div`
  background-color: ${(props: any) => props.color};
  border-radius: ${(props:any) => props.food} ;
`;


export const ModalContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Modal = styled.div`
    width: 300px;
    height: 300px;
    background-color: #5D7334;
    border-radius: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const ContainerBTN = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    gap:1rem
`

export const Btn =  styled(Link) `
   margin-top: 20px;
   text-decoration:none;
   color:#fff;
   background-color: #4CAF50;
   padding: 10px 20px;
   border: none;
   border-radius: 5px;
   transition: all 0.3s ease;
   box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);

   &:hover {
    background-color: #3E8E41;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
    transform: translateY(-3px);
  }
`
export const JogadorPlacar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap:1rem;
    color:#fff;
`