import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Cordinates } from '../../interface/Cordinates';
import { Usuario } from '../../interface/Usuario';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import storage from '../../utils/storage';
import { resetPontuacao, setPontuacao } from '../home/reducers';
import { Container, Board, Cell, ModalContainer, Modal, ContainerBTN, Btn, JogadorPlacar } from './style'


export const Game = () => {
   const [food, setFood] = useState<Cordinates>({ x: 10, y: 10 })
   const [snake, setSnake] = useState<Cordinates[]>([{ x: 5, y: 5 }])
   const [deadSnake, setDeadSnake] = useState<boolean>(false)

   //Redux
   const dispatch = useAppDispatch()
   const { usuario } = useAppSelector(u => u.usuario)

   //Comida aleatoria
   const generateRandomLocation = () => {
      const proximoLocalX = Math.floor(Math.random() * 20);
      const proximoLocalY = Math.floor(Math.random() * 20);

      return { x: proximoLocalX, y: proximoLocalY };


   }


   //Mapa do jogo
   const renderCell = () => {
      const cells = [];
      for (let x: number = 0; x < 20; x++) {
         for (let y: number = 0; y < 20; y++) {
            const isSnakeCell = snake.some((cell) => cell.x === x && cell.y === y);
            const isFoodCell = food.x === x && food.y === y;
            cells.push(

               //Cada celula do campo do jogo
               <Cell isSnakecell
                  key={[x, y]}
                  color={isSnakeCell ? "#4A752c" : isFoodCell ? "red" : "#EAEAEA"}
                  food={isFoodCell ? "50%" : isSnakeCell ? "30%" : 0}
               />
            )
         }
      }
      return cells;
   }




   function moveSnake(event: any) {
      // Clique do usuario
      setSnake((prev) => {
         const { x, y } = prev[0];
         let newHead;

         switch (event.key) {
            case "ArrowRight":
               newHead = { x, y: y + 1 };
               break;
            case "ArrowLeft":
               newHead = { x, y: y - 1 };
               break;
            case "ArrowUp":
               newHead = { x: x - 1, y };
               break;
            case "ArrowDown":
               newHead = { x: x + 1, y };
               break;
            default:
               return prev;
         }
         //cria uma nova cabeça e tira o ultimo(a cobra crece para frente)
         const newSnake = [newHead, ...prev.slice(0, snake.length - 1)];

         //Pegando todos os usuarios que estão no localStorage pela chave 
         const usuariosLocalStorage = storage.getItem<Usuario[]>('users')

         if (newSnake[0].x < 0 || newSnake[0].x >= 20 || newSnake[0].y < 0 || newSnake[0].y >= 20) {
            setDeadSnake(true)
            //Conferindo o localStorage e mapeando-o para atribuir a pontuação ao usuario que está jogando
            if (usuariosLocalStorage) {
               const usuariosAtuais = usuariosLocalStorage.map(jogador => {
                  if (jogador.nome == usuario.nome) {
                     return { ...jogador, pontuacao: jogador.pontuacao, record: jogador.record > usuario.pontuacao ? jogador.record :  snake.length }
                  }
                  return jogador
               })


               storage.setItem<Usuario[]>('users', usuariosAtuais)
            }
         }
         //Cobra comeu a comida
         if (newHead.x === food.x && newHead.y === food.y) {
            setFood(generateRandomLocation);
            dispatch(setPontuacao(snake.length))
            if (usuariosLocalStorage) {
               const usuariosAtuais = usuariosLocalStorage.map(jogador => {
                  if (jogador.nome == usuario.nome) {
                     return { ...jogador, pontuacao: snake.length }
                  }
                  return jogador
               })
               storage.setItem<Usuario[]>('users', usuariosAtuais)
            }
            newSnake.push(prev[prev.length - 1])
         }

         return newSnake;
      })
   }
   //UseEffect monitoranto o click e a cobra a cada movimentação
   useEffect(() => {
      window.addEventListener('keydown', moveSnake);
      return () => window.removeEventListener('keydown', moveSnake);
   }, [snake])


   return (

      <>
         <JogadorPlacar>
            <h3>Nome:</h3><h3>{usuario.nome}</h3>||
            <h3>Pontos:</h3><h3>{usuario.pontuacao}</h3>
         </JogadorPlacar>
         <Container>
            <Board>
               {renderCell()}
            </Board>
            {deadSnake && (
               <ModalContainer>
                  <Modal>
                     <JogadorPlacar>
                        <h3>Nome:</h3><h3>{usuario.nome}</h3>||
                        <h3>Pontos:</h3><h3>{usuario.pontuacao}</h3>
                     </JogadorPlacar>
                     <ContainerBTN>
                        <Btn onClick={() => {
                           setSnake([generateRandomLocation()])
                           setFood(generateRandomLocation())
                           dispatch(resetPontuacao())
                           setDeadSnake(false)
                        }}>
                           Reiniciar
                        </Btn>
                        <Btn to='/score'>
                           Placar
                        </Btn>
                     </ContainerBTN>
                  </Modal>
               </ModalContainer>
            )}
         </Container>


      </>
   )
}
