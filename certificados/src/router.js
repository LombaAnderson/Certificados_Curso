import Vue from 'vue';
import Router from 'vue-router'
import Alunos from './components/Alunos/Alunos'
import Certificados from './components/Certificados/Certificados'
import Sobre from "./components/Sobre/Sobre"

Vue.use(Router);

export default new Router({
      routes: [
            {
                  path: '/alunos',
                  nome: 'Alunos',
                  component: Alunos

            },
            {
                  path: '/certificados',
                  nome: 'Certificados',
                  component: Certificados

            },
            {
                  path: '/sobre',
                  nome: 'Sobre',
                  component: Sobre

            }
      ]
})