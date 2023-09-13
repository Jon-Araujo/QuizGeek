<template>
  <BarraNavegacao />
  <h2>Responda se puder!</h2>
  <p>Um quiz com um pegada geek, onde seus acertos acumulam ponto para comparar com seus amigos quem realmente é perito!</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraNavegacao from '@/components/BarraNavegacao.vue';

export default defineComponent({
  name: 'PaginaPrincipal',
  components: {
    BarraNavegacao
  }
});
</script>
