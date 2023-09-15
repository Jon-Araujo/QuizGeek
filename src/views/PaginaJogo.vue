<template>
    <div v-if="contador === 0">
        <h3>Escolha o Quiz:</h3>
        <section>
            <article @click="acessarQuiz('RickAndMorty')" class="card">
                <h3>Rick and Morty</h3>
                <img src="../assets/RickAndMorty.jpg" alt="Rick e Morty">
            </article>
            <article @click="acessarQuiz('StarWars')" class="card">
                <h3>Star Wars</h3>
                <img src="../assets/StarWars.jpg" alt="Star Wars">
            </article>
            <article @click="acessarQuiz('Marvel')" class="card">
                <h3>Marvel</h3>
                <img src="../assets/Marvel.jpg" alt="Marvel">
            </article>
        </section>
    </div>

    <div v-else>
        <ComponenteJogo :titulo="titulo"/>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import ComponenteJogo from '@/components/ComponenteJogo.vue';

    export default defineComponent({
        name: 'PaginaJogo',
        components: {
            ComponenteJogo
        },
        data() {
            return {
                contador: 0,
                titulo: ""
            }
        },
        methods: {
            alteraContador() {
                if (this.contador === 0) {
                    this.contador = 1;
                } else {
                    this.contador = 0;
                }
            },
            acessarQuiz(titulo: string) {
                this.alteraContador();
                this.titulo = titulo;
                // if (this.contador === 1) {
                // }
            }
        }
    });
</script>

<style lang="scss" scoped>
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