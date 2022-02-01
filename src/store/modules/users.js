import Vue from 'vue'

export default {
    namespaced : true,
    state: {
        list:{
            1:{
                name:"evg",
                age:35,
            },
            2:{
                name:"petr",
                age:34,
            }
         },
        name: "evg",
    },

    getters: {
        usersList: ({list})=>Object.values(list),
        // usersList: (state) =>{ 
        //     return Object.values(state.list)
        // },
        userName:(state)=>state.name
    },
    
    mutations: {
        ADD_USER(state, user ){
            console.log(user); 
            Vue.set(state.list, user.id, user)           
        },
    },

    actions: {
        addNewUser({ commit }, user){
            const newOne ={...user, id: String(Math.random())}
            commit("ADD_USER", newOne)
           
            
            
                   
        }
    }
}
//  export default userStore;  