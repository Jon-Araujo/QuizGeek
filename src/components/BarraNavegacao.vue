<template>
    <nav class="nav">
    <button @click="alteraRota('/')"><span class="material-symbols-outlined">home</span></button>
    <h1>Decifre</h1>
    <button @click="alteraRota('/login')"><span class="material-symbols-outlined">person</span></button>
  </nav>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    export default defineComponent ({
        name: 'BarraNavegacao',
        methods: {
            alteraRota(novaRota :any) {
                this.$router.push(novaRota);
            }
        }
    });
</script>

<style lang="scss" scoped>
@import "../../public/variaveis.scss";
  .nav {
    display: flex;
    width: 100%;
    background-color: $cor-terciaria;
    padding: 0.5rem;
    justify-content: space-between;
    align-items: center;
    button {
      background-color: $cor-secundaria;
      color: $cor-terciaria;
      text-decoration: none;
      cursor: pointer;
      border: none;
      margin-right: 2rem;
      width: 5%;
      padding: 0.5rem;
      font-size: 1.2rem;
    }
    h1 {
        font-size: 2rem;
        color: $cor-secundaria;
        font-weight: 700;
    }
  }
</style>