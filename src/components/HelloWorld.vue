<template>
  <div class="hello">
    <h1>Main Page HelloWorld</h1>
    <button @click="addUser">Add user</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },

  methods: {
    ...mapActions("users", ["addNewUser"]),
    addUser() {
      const newOne = {
        name: "Span",
        age: 25,
      };
      this.addNewUser(newOne)
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
