<template>
    <h3>Escolha o Quiz:</h3>
    <section>
        <article>
            <h3>Rick and Morty</h3>
            <img src="../assets/rickandmorty.jpg" alt="">
        </article>
        <article>
            <h3>Star Wars</h3>
            <img src="../assets/starwars.jpg" alt="">
        </article>
        <article>
            <h3>Marvel</h3>
            <img src="../assets/marvel.jpg" alt="">
        </article>
    </section>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'PaginaJogo'
    });
</script>

<style lang="scss" module>
    @import '../../public/variaveis.scss';

    section {
        display: flex;
        width: 100%;
        justify-content: space-around;
        article {
            width: 25%;
            border: 5px solid $cor-quaternaria;
            border-radius: 8px;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
</style>