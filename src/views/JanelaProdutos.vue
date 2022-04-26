<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      :src="ovo.imagem"
      :alt="ovo.nome"
    ></v-img>

    <v-card-title >
      Ovo de páscoa
    </v-card-title>

    <v-card-subtitle >
     Preço: R$
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
       Compre aqui!
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
         Descrição do ovo de páscoa
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
  export default {
    name: 'produtoSelec',
    props: {
            ovos: {
                type: Array,
                required:true
            }
        },
    data () {
      return {
        
      }
    }
  }
</script>