<template>
    <v-container>
      <v-card-title primary-title class=" title mb-4">
        Cadastro de Vendedores
      </v-card-title>
    <form ref=form>
      <v-text-field
        v-model="nome"
        :rules="nameRules"
        :counter="10"
        label="Nome da empresa"
        required
        @input="$v.nome.$touch()"
        @blur="$v.nome.$touch()"
      ></v-text-field>
      
      <v-text-field
        v-model="cep"
        :rules="CepRules"
        label="CEP"
        required
        @input="$v.cep.$touch()"
        @blur="$v.cep.$touch()"
      ></v-text-field>
      
      <v-text-field
        v-model="endereco"
        :rules="EnderecoRules"
        :counter="10"
        label="Endereço"
        required
        @input="$v.endereco.$touch()"
        @blur="$v.endereco.$touch()"
      ></v-text-field>      
      
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="#6D4C41"
          dark
          v-bind="attrs"
          v-on="on"
          class="mr-4"
        >
          Cadastrar
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5 text-center">
          Cadastro concluido <br> com sucesso!
        </v-card-title>        
        <v-card-actions>
          <v-spacer></v-spacer>
          <router-link to="/cadastroprodutos">
            <v-btn
            class="botaoModal"
            dark
            text
            @click="dialog = false"
            >
            Ok
            </v-btn>  
          </router-link>        
        </v-card-actions>
      </v-card>
    </v-dialog>

      
      <v-btn @click="reset"> Limpar </v-btn>
    </form>
  </v-container>
</template>

<script>
export default {
    data() {
        return {
        dialog: false,
        valid: true,
        name: '',
        nameRules: [
            v => !!v || 'Name é obrigatório'
        ],
        CepRules: [
            v => !!v || 'CEP é obrigatório'
        ],
        EnderecoRules: [
            v => !!v || 'Endereço é obrigatório'
        ],
        items: [
            'Item 1',
            'Item 2',
            'Item 3',
            'Item 4',
        ], 
        }
    },
    methods: {
        reset () {
            this.$refs.form.reset()
      },
    }
}
</script>

<style scoped>  
    .parallax {
  background-image: url("../assets/pascoa.jpg");

  height: 100%;
  padding: 0px !important;

  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}
.fundo {
  width: 100%;
  background-color: white;
  padding: 10px 10px 20px 10px;
}

    .botaoModal {
        background-color: #6D4C41!important;;
    }
</style>