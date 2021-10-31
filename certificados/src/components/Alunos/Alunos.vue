<template>
  <div>
    <titulo texto="Aluno" />
    <input
      type="text"
      placeholder="Coloque seu nome"
      v-model="nome"
      @keyup.enter="addCert()"
    />
    <button class="btn btnInput" @click="addCert">Adicionar</button>

    <table>
      <thead>
        <th>Nº Matrícula</th>
        <th>Nome</th>
        <th>Opções</th>
      </thead>

      <tbody v-if="certificados.length">
        <tr
          v-for="(certificado, index) in certificados"
          :key="index"
          style="pointer"
        >
          <td>{{ certificado.id }}</td>

          <router-link to="/certificados" tag="td">
            {{ certificado.nome }}
          </router-link>

          <td>
            <Button class="btn btn_Danger" @click="remover(certificado)"
              >Remover</Button
            >
          </td>
        </tr>
      </tbody>
      <tfoot v-else>
        Nenhum aluno encontrado
      </tfoot>
    </table>
  </div>
</template>

<script>
import Titulo from "../_share/Titulo";

export default {
  components: {
    Titulo,
  },
  data() {
    return {
      titulo: "Cursos Extracurriculares",
      nome: "",
      certificados: [
        { id: 1, nome: "Anderson Lomba" },
        { id: 2, nome: "Liciane Marques" },
        { id: 3, nome: "Filipe Marques" },
        { id: 4, nome: "Matheus Oliveira" },
      ],
    };
  },
  created() {
    this.$http
      .get("http://localhost:3000/certificados")
      .then((res) => res.json())
      .then((certificados) => (this.certificados = certificados));
  },
  props: {},
  methods: {
    addCert() {
      let _certificado = {
        nome: this.nome,
        certificado: "",
      };
      this.$http
        .post("http://localhost:3000/certificados", _certificado)
        .then((res) => res.json())
        .then((certificado) => {
          this.certificados.push(certificado);
          this.nome = "";
        });
    },
    remover(certificado) {
      this.$http
        .delete(`http://localhost:3000/certificados/${certificado.id}`)
        .then(() => {
          let indice = this.certificados.indexOf(certificado);
          this.certificados.splice(indice, 1);
        });
    },
  },
};
</script>

<style scoped>
input {
  width: calc(100% 195%);
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  color: #687f7f;
  display: inline;
}
.btnInput {
  width: 150px;
  border: 0px;
  padding: 20px;
  font-size: 1.3em;
  display: inline;
  background-color: rgb(116, 115, 115);
}
.btnInput:hover {
  padding: 20px;
  margin: 0px;
  border: 0px;
}
</style>