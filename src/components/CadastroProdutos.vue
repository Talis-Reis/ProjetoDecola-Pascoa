<template>
  <v-container class="container-form">
    <div class="fundo">
      <v-card-title primary-title> Cadastro Produtos </v-card-title>
      <form>
        <v-text-field
          v-model="produto"
          :counter="100"
          label="Produto"
          required
        ></v-text-field>
        <v-text-field
          v-model="preco"
          label="Preco entre R$ 0,00 e R$ 30,00"
          prefix="R$"
          required
        ></v-text-field>
        <v-text-field
          v-model="sabor"
          :counter="100"
          label="Sabor"
          required
        ></v-text-field>
        <v-file-input accept="image/*" label="Imagem" v-model="file"
          >imagem</v-file-input
        >

        <v-btn class="mr-4" color="#6D4C41" dark @click="submit"> Cadastrar </v-btn>
        <v-btn @click="clear">Limpar</v-btn>
        <v-dialog v-model="dialog" max-width="290">
          <v-card>
            <v-card-title class="text-h5"> Cadastro de Produto </v-card-title>

            <v-card-text>
              Desculpe! Algum campo não foi presenchido corretamente ou o preço
              está maior do que o permitido!
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="dialog = false">
                OK
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogSucess" hide-overlay persistent width="300">
          <v-card color="primary" dark>
            <v-card-text>
              Cadastrando Produto
              <v-progress-linear
                indeterminate
                color="white"
                class="mb-0"
              ></v-progress-linear>
            </v-card-text>
          </v-card>
        </v-dialog>
        <v-alert v-if="sucesso" color="green" dismissible type="success"
          >Produto cadastrado com Sucesso!</v-alert
        >
      </form>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "CadastroProdutos",
  data: () => ({
    produto: "",
    preco: 0,
    sabor: "",
    file: null,
    dialog: false,
    dialogSucess: false,
    sucesso: false,
  }),
  watch: {
    dialogSucess(val) {
      if (!val) return;

      setTimeout(() => (this.dialogSucess = false), 4000);
      setTimeout(() => (this.sucesso = true), 4000);
    },
  },
  methods: {
    submit() {
      const storageinfos = [];
      const erros = [];

      if (this.produto != "") {
        storageinfos.push(this.produto);
      } else {
        erros.push("Erro campo produto");
        console.log(erros);
      }

      if (this.preco != 0 && this.preco <= 30) {
        storageinfos.push(this.preco);
      } else {
        erros.push("Erro campo preco");
        console.log(erros);
      }

      if (this.sabor != "") {
        storageinfos.push(this.sabor);
      } else {
        erros.push("Erro campo sabor");
        console.log(erros);
      }

      if (this.file != null) {
        storageinfos.push(this.file);
      } else {
        erros.push("Erro campo file");
        console.log(erros);
      }

      if (erros.length === 0) {
        this.dialogSucess = true;
        console.log(storageinfos)
      } else {
        this.dialog = true;
      }
      this.clear();
    },
    clear() {
      this.produto = "";
      this.preco = 0;
      this.sabor = "";
      this.file = null;
    },
  },
};
</script>

<style scoped>
.container-form {
  height: 100%;
  padding: 0px !important;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}
.fundo {
  width: 100%;
  padding: 10px 10px 20px 10px;
}
</style>