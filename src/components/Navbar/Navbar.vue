<template>
    <nav class="navbar navbar-expand-lg bg-body-light shadow-sm mb-3">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">LicitaDocs</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link to="/" class="nav-link">Dashboard</router-link>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Cadastro
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <router-link to="/credenciamento" class="dropdown-item">Credenciamento</router-link>
                        </li>
                        <li><hr class="dropdown-divider"></li>
                        <li>
                            <router-link to="/habilitacao-juridica" class="dropdown-item">Habilitação Jurídica</router-link>
                        </li>
                        <li><hr class="dropdown-divider"></li>
                        <li>
                            <router-link to="/regularidade-fiscal" class="dropdown-item">Regularidade Fiscal e Trabalhista</router-link>
                        </li>
                        <li><hr class="dropdown-divider"></li>
                        <li>
                            <router-link to="/regularidade-governamental" class="dropdown-item">Regularidade Fiscal Estadual/Distrital e Municipal</router-link>
                        </li>
                        <li><hr class="dropdown-divider"></li>
                        <li>
                            <router-link to="/qualificacao-tecnica" class="dropdown-item">Qualificação Técnica</router-link>
                        </li>
                        <li><hr class="dropdown-divider"></li>
                        <li>
                            <router-link to="/qualificacao-economico" class="dropdown-item">Qualificação Econônico-Financeira</router-link>
                        </li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Consulta
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <router-link to="/fornecimento" class="dropdown-item">Linha de Fornecimento - Material/Serviço</router-link>
                        </li>
                        <li><hr class="dropdown-divider"></li>
                        <li>
                            <router-link to="/certificado" class="dropdown-item">Certificado de Registro Cadastral - CRC</router-link>
                        </li>
                        <li><hr class="dropdown-divider"></li>
                        <li>
                            <router-link to="/situacao-fornecedor" class="dropdown-item">Situação do Fornecedor</router-link>
                        </li>
                        <li><hr class="dropdown-divider"></li>
                        <li>
                            <router-link to="/responsavel-cadastro" class="dropdown-item">Fornecedores do Responsável pelo cadastro</router-link>
                        </li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Segurança
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <router-link to="/empresa" class="dropdown-item">Alterar Dados Cadastrais</router-link>
                        </li>
                        <li><hr class="dropdown-divider"></li>
                        <li>
                            <router-link to="/responsavel-empresa" class="dropdown-item">Alterar Responsável pelo Cadastro da Empresa</router-link>
                        </li>
                    </ul>
                </li>
            </ul>
            <form class="d-flex" role="search">
                <router-link to="/empresa" class="nav-link"><strong>Sair</strong></router-link>
            </form>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style>
    
</style>