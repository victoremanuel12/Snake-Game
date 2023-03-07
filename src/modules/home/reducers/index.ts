import { Usuario } from "../../../interface/Usuario";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";



const initialState  = {
    usuario: {
        nome: '',
        pontuacao: 0,
        record:0
    }
}
export const  userReducer = createSlice({
   name:'DadosUsuario',
   initialState,
   reducers:{
      setUsuario: (state,action: PayloadAction<Usuario>) => {
         state.usuario = action.payload
      },
      setPontuacao : (state,action:PayloadAction<number>) =>{
         state.usuario.pontuacao = action.payload
      },
      resetPontuacao : (state) => {
         state.usuario.pontuacao = 0
      }
      

   }
 })
 export const {setPontuacao,setUsuario,resetPontuacao}  = userReducer.actions
 export default userReducer.reducer