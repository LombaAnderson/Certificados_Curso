<template>
  <div>
    <titulo texto="Certificados" />
    <table>
      <thead>
        <th>Cód.</th>
        <th>Certificado</th>
        <th>Atividade</th>
        <th>Carga horária</th>
        <th>Status</th>
      </thead>

      <tbody v-if="Certificados_.length">
        <tr v-for="(certificado_, index) in Certificados_" :key="index">
          <td>{{ certificado_.id }}</td>

          <td>{{ certificado_.nome }}</td>
          <td>JavaScript</td>
          <td>6h</td>

          <td>Homologado</td>
        </tr>
      </tbody>
      <tfoot v-else>
        Nenhum certificado encontrado
      </tfoot>
    </table>
  </div>
</template>

<script>
import Titulo from "../_share/Titulo.vue";

export default {
  components: {
    Titulo,
  },
  data() {
    return {
      Certificados_: [
        {
          id: 1,
          nome: "Programação",
          atividade: "JavaScript",
          cargaHoraria: "6h",
          status: "Homologado",
        },
        {
          id: 2,
          nome: "Programação Orientada a Objetos",
          atividade: "Herança",
          cargaHoraria: "8h",
          status: "Não-Homologado",
        },
        {
          id: 3,
          nome: "Leitura Ativa",
          atividade: "Dom Casmurro",
          cargaHoraria: "6h",
          status: "Homologado",
        },
        {
          id: 4,
          nome: "Gestão do Tempo",
          atividade: "Dicas de Hergonomia",
          cargaHoraria: "6h",
          status: "Homologado",
        },
      ],
    };
  },
  created() {
    this.$http
      .get("http://localhost:3000/certificados_")
      .then((res) => res.json())
      .then((certificados_) => (this.certificados_ = certificados_));
  },
  props: {},
};
</script>

<style scoped>
</style>