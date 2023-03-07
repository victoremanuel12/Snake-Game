//@ts-ignore
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div `
   display:flex;
   align-items:center;
   justify-content:center;
   height: 90vh;
`
export const FormContainer = styled.form `
   display:flex;
   flex-direction:column;
   align-items:center;
   justify-content:center;
   background-color:#5D7334 ;
   color:#fff;
   width: 400px;
   height: 300px;
   border-radius:10px;
`
export const InputNome = styled.input `
   padding: 10px 20px;
   text-align:center;
   border-radius:5px;
 ` 
export const BtnJogar =  styled(Link) `
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


