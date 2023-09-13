<template>
  <BarraNavegacao />
  <section>
    <h3>Realize o Login:</h3>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import BarraNavegacao from '@/components/BarraNavegacao.vue';

  export default defineComponent ({
    name: 'PaginaLogin',
    components: {
      BarraNavegacao
    }
  });
</script>
