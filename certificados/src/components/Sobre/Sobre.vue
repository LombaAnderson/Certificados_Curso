<template>
  <div>
    <titulo texto="Sobre" />
    <p>
      Esse pequeno site em VueJs foi feito para mostrar o quanto o VueJS é
      poderoso porque em pouco tempo foi possível criar essas páginas, fazer
      botões para apagar informações, criar as rotas com um servidor falso e
      deixar as páginas bastante elegantes em pouco tempo.
    </p>
    <p>
      Eu posso fazer mais e vou continuar aprimorando esse pequeno projeto. No
      momento deixarei até aqui e entregarei para vocês dessa maneira. Porém se
      quiserem em um futuro próximo é possível deixar o projeto muito mais
      completo do que está!
    </p>
  </div>
</template>

<script>
import Titulo from "../_share/Titulo";
export default {
  components: {
    Titulo,
  },
};
</script>

<style scoped>
</style>