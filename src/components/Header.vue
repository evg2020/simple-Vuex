<template>
<div>
    <h2>Header</h2>  
   
    <h2>{{usersList}}</h2>  
    <h2>{{list}}</h2>  
    <hr>
</div>
</template>

<script>

import { mapGetters } from 'vuex'
export default {
    name: "Header", 
    computed: {
        ...mapGetters('users',['usersList']),

        list () {
            return this.$store.getters.usersList
        }

    }    
}
</script>
 <style>
 hr {
     background: red;
     width: 500px;
     height: 4px;

 }
 
 </style>
