import React, { useState, useEffect } from 'react'
import { Usuario } from '../../interface/Usuario';
import storage from '../../utils/storage';
import { Container, ModalContainer, Modal, ContainerFlex,Btn } from '../score/style';
export const Score = () => {
  const [users, setUsers] = useState<Usuario[]>()


  useEffect(() => {
    //pegando os usuarios no localStorage e comparando-os para saber quem tem os maiores recordes
    const usuarios = storage.getItem<Usuario[]>('users')
    if (usuarios) {
      setUsers(usuarios)
      const ordenadosPorRecord = usuarios.sort((a, b) => b.record - a.record)
      const top10 = ordenadosPorRecord.slice(0, 10)
      setUsers(top10)
    }
  }, [])
  return (
    <Container>
      <ModalContainer>
        <Modal>
          <h2>Ranking</h2>
          {users?.map(user => {
            return (
              <ContainerFlex>
              <h3>{user.nome}</h3>||<h3>{user.record} pontos</h3>
              </ContainerFlex>

            )
          })}
            <Btn to="/">
              Menu
            </Btn>
        </Modal>
      </ModalContainer>
    </Container>
  )
}

