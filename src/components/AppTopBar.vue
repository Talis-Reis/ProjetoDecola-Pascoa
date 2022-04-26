<template>
<div class="app-top-bar">
    <v-app-bar app elevation="4" color="brown darken-1" class="title-camp cor">
      <v-app-bar-nav-icon color="white" @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title class="cor"> Pascoa Inclusiva </v-toolbar-title>
      <v-spacer />
      <v-btn
        v-on="on"
        v-bind="attrs"
        color="transparent"
        small
        fab
        @click="darkMode"
      >
        <v-icon v-if="!$vuetify.theme.dark" class="mr-1"
          >mdi-moon-waxing-crescent</v-icon
        >
        <v-icon v-else>mdi-white-balance-sunny</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="brown lighten-3 text--accent-4">
          <router-link to="/">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/sobreprojeto">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-information</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Sobre</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/cadastroprodutos">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-cash-register</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Cadastro Produtos</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/cadastrovendedores">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account-plus</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Cadastro Vendedores</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/listaovos">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-egg-easter</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Lista Ovos</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    </div>
 
</template>

<script>
export default {
  name: "AppTopBar",
  data: () => ({
    drawer: false,
    group: null,
  }),
  methods: {
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>


<style scoped>
.title-camp {
  display: flex;
  justify-content: center;
  align-content: center;
}

.app-top-bar a {
  text-decoration: none;
  color: black;
}

.cor{font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 20px; color:blanchedalmond}
</style>