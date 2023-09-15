<template>
    <h1>Decifre - Quiz</h1>
    <img :src="srcImg" :alt="`Imagem do ${titulo}`">
    <p>{{ perguntas.RickAndMorty[0].pergunta }}</p>
    <ul>
        <!-- <li><button>{{ perguntas.RickAndMorty[0].pergunta }}</button></li> -->
        <li><button></button></li>
        <li><button></button></li>
        <li><button></button></li>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'ComponenteJogo',
    data() {
        return {
            perguntas: []
        }
    },
    methods: {
        async recebePerguntas() {
            const listaPerguntas = await (await fetch('./quiz.json')).json();
            this.perguntas = listaPerguntas;
            console.log(this.perguntas.RickAndMorty[0].opcoes_respostas[0])
        }
    },
    created() {
        this.recebePerguntas();
    },
    props: {
        titulo: String
    },
    computed: {
        srcImg() {
            return require(`../assets/${this.titulo}.jpg`);
        }
    }
});
</script>

<style scoped lang="scss">
img {
    width: 35%;
    border-radius: 20px;
}
</style>