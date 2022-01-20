import Vue from 'vue'

const userStore = {
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
        }
    },

    getters: {
        usersList: ({list})=>Object.values(list)
        // usersList: (state) => Object.values(state.list)
    },
    
    mutations: {
        ADD_USER(state, user ){
            console.log(user); 
            Vue.set(state.list, user.id, user)
           
        }
    },
    actions: {
        addNewUser({ commit }, user){
            const newOne ={...user, id: String(Math.random())}
            commit("ADD_USER", newOne)
           
            
            
                   
        }
    }
}
 export default userStore;  