<template>
  <div>
    <Breadcrumb page="Credenciamento"/>
    <div class="card">
      <h5 class="card-header">Pesquisar Empresa</h5>
      <div class="card-body">
        <p>Tipo Pessoa</p>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
            checked
          />
          <label class="form-check-label" for="inlineRadio1">Pessoa Jurídica</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="option2"
          />
          <label class="form-check-label" for="inlineRadio2">Pessoa Fisíca</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio3"
            value="option3"
          />
          <label class="form-check-label" for="inlineRadio3">Estrangeiro</label>
        </div>

        <div class="card-body">
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-4">
                        <div class="mb-3">
                            <label for="documento" class="form-label">Documento:</label>
                            <input type="text" class="form-control" id="documento" placeholder="00.000.000/0000-00">
                        </div>
                    </div>
                </div>
            </div>
            <button class="btn btn-primary">Pesquisar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";

export default {
  name: "Credenciamento",
  components: {
    Breadcrumb,
  },
};
</script>

<style scoped>
</style>