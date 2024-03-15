import { createSlice } from "@reduxjs/toolkit";
 import { userlist } from "../userlist";
 

const userSlice=createSlice({
    name:"users",
    initialState:userlist,
    reducers:{
        addUser:(state,action)=>{
           state.push(action.payload);
        },

        updateUser:(state,action)=>{
            const{id,name,email,address}=action.payload;
            const upadteduser=state.find(user=>user.id==id);
            if(upadteduser){
                upadteduser.name=name;
                upadteduser.email=email;
                upadteduser.address=address;
            }
        },

        deleteUser:(state,action)=>{
            const{id}=action.payload;
            const deleteduser=state.find(user=>user.id==id);
            if(deleteduser){
               return state.filter((user)=>user.id!==id);
            }
        }

    }

    
        
     

})

export const {addUser,updateUser,deleteUser}=userSlice.actions;

export default userSlice.reducer;