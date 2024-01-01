import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Autenticacao/Login.vue'
import Guard from '../services/midlleware';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue'),
    beforeEnter: Guard.isAuthenticated,
  },
  {
    path: '/credenciamento',
    name: 'credenciamento',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cadastro/Credenciamento/Credenciamento.vue'),
    beforeEnter: Guard.isAuthenticated,
  },
  {
    path: '/habilitacao-juridica',
    name: 'habilitacao-juridica',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cadastro/HabilitacaoJuridica/Habilitacao.vue'),
    beforeEnter: Guard.isAuthenticated,
  },
  {
    path: '/regularidade-fiscal',
    name: 'regularidade-fiscal',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cadastro/RegularidadeTrabalista/RegularidadeTrabalhista.vue'),
    beforeEnter: Guard.isAuthenticated,
  },
  {
    path: '/regularidade-governamental',
    name: 'regularidade-governamental',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cadastro/RegularidadeGov/Regularidade.vue'),
    beforeEnter: Guard.isAuthenticated,
  },
  {
    path: '/qualificacao-tecnica',
    name: 'qualificacao-tecnica',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cadastro/QualificacaoTecnica/QualificacaoTecnica.vue'),
    beforeEnter: Guard.isAuthenticated,
  },
  {
    path: '/qualificacao-economico',
    name: 'qualificacao-economico',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cadastro/QualificacaoEconomica/QualificacaoEconomico.vue'),
    beforeEnter: Guard.isAuthenticated,
  },
  {
    path: '/fornecimento',
    name: 'fornecimento',
    component: () => import(/* webpackChunkName: "about" */ '../views/Consulta/Fornecimento/Fornecimento.vue'),
    beforeEnter: Guard.isAuthenticated,
  },
  {
    path: '/certificado',
    name: 'certificado',
    component: () => import(/* webpackChunkName: "about" */ '../views/Consulta/Certificado/Certificado.vue'),
    beforeEnter: Guard.isAuthenticated,
  },
  {
    path: '/situacao-fornecedor',
    name: 'situacao-fornecedor',
    component: () => import(/* webpackChunkName: "about" */ '../views/Consulta/Situacao/Situacao.vue'),
    beforeEnter: Guard.isAuthenticated,
  },
  {
    path: '/responsavel-cadastro',
    name: 'responsavel-cadastro',
    component: () => import(/* webpackChunkName: "about" */ '../views/Consulta/Cadastro/Cadastro.vue'),
    beforeEnter: Guard.isAuthenticated,
  },
  {
    path: '/empresa',
    name: 'empresa',
    component: () => import(/* webpackChunkName: "about" */ '../views/Seguranca/Empresa/Empresa.vue'),
    beforeEnter: Guard.isAuthenticated,
  },
  {
    path: '/responsavel-empresa',
    name: 'responsavel-empresa',
    component: () => import(/* webpackChunkName: "about" */ '../views/Seguranca/Responsavel/Responsavel.vue'),
    beforeEnter: Guard.isAuthenticated,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
