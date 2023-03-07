import { FormContainer,BtnJogar,InputNome,Container} from './style';
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setUsuario } from "./reducers";
import storage from '../../utils/storage'
import { Usuario } from '../../interface/Usuario';


export const Home = () => {
   const { usuario } = useAppSelector(states => states.usuario)

   const dispatch = useAppDispatch()
   
   return(
      <Container>
         <FormContainer>
            <h1>Bem vindo ao Snake Game</h1>
            <InputNome type="text" placeholder='Digite seu nome'  onChange={(txt:any) => {
                dispatch(setUsuario({ nome: txt.target.value, pontuacao: 0 , record:0}))
            }}/>
           {usuario.nome.length > 3 &&
                <BtnJogar to='/game'
                    onClick={() => {
                     const localUsers = storage.getItem<Usuario[]>('users')
                            if (localUsers) {
                                const user = localUsers.find(user => user.nome === usuario.nome)
                                if (user) return null
                                storage.setItem<Usuario[]>('users', [...localUsers, { nome: usuario.nome, pontuacao: 0, record: 0 }])
                            } else {
                                storage.setItem<Usuario[]>('users', [{ nome: usuario.nome, pontuacao: 0, record: 0 }])
                            }
                        }}>
                    JOGAR
                </BtnJogar>
            }
         </FormContainer>
      </Container>

   )
  
}