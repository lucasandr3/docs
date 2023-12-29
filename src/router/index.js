import { createRouter, createWebHashHistory } from 'vue-router'
import Dahboard from '../views/Dashboard.vue'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dahboard
  },
  {
    path: '/credenciamento',
    name: 'credenciamento',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cadastro/Credenciamento/Credenciamento.vue')
  },
  {
    path: '/habilitacao-juridica',
    name: 'habilitacao-juridica',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cadastro/HabilitacaoJuridica/Habilitacao.vue')
  },
  {
    path: '/regularidade-fiscal',
    name: 'regularidade-fiscal',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cadastro/RegularidadeTrabalista/RegularidadeTrabalhista.vue')
  },
  {
    path: '/regularidade-governamental',
    name: 'regularidade-governamental',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cadastro/RegularidadeGov/Regularidade.vue')
  },
  {
    path: '/qualificacao-tecnica',
    name: 'qualificacao-tecnica',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cadastro/QualificacaoTecnica/QualificacaoTecnica.vue')
  },
  {
    path: '/qualificacao-economico',
    name: 'qualificacao-economico',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cadastro/QualificacaoEconomica/QualificacaoEconomico.vue')
  },
  {
    path: '/fornecimento',
    name: 'fornecimento',
    component: () => import(/* webpackChunkName: "about" */ '../views/Consulta/Fornecimento/Fornecimento.vue')
  },
  {
    path: '/certificado',
    name: 'certificado',
    component: () => import(/* webpackChunkName: "about" */ '../views/Consulta/Certificado/Certificado.vue')
  },
  {
    path: '/situacao-fornecedor',
    name: 'situacao-fornecedor',
    component: () => import(/* webpackChunkName: "about" */ '../views/Consulta/Situacao/Situacao.vue')
  },
  {
    path: '/responsavel-cadastro',
    name: 'responsavel-cadastro',
    component: () => import(/* webpackChunkName: "about" */ '../views/Consulta/Cadastro/Cadastro.vue')
  },
  {
    path: '/empresa',
    name: 'empresa',
    component: () => import(/* webpackChunkName: "about" */ '../views/Seguranca/Empresa/Empresa.vue')
  },
  {
    path: '/responsavel-empresa',
    name: 'responsavel-empresa',
    component: () => import(/* webpackChunkName: "about" */ '../views/Seguranca/Responsavel/Responsavel.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
