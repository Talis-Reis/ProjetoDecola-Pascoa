import Vue from "vue";
import VueRouter from "vue-router";
import MeuInicio from "../views/MeuInicio";
import SobreProjeto from "../components/SobreProjeto"
import CadastroProdutos from "../components/CadastroProdutos"
import CadastroVendedores from "../components/CadastroVendedores"
import ListaOvos from "../views/ListaOvos"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MeuInicio",
    component: MeuInicio,
  },
  {
    path: "/sobreprojeto",
    name: "SobreProjeto",
    component: SobreProjeto,
  },
  {
    path: "/cadastroprodutos",
    name: "Cadastro",
    component: CadastroProdutos,
  },
  {
    path: "/cadastrovendedores",
    name: "CadastroVendedores",
    component: CadastroVendedores,
  },
  {
    path: "/listaovos",
    name: "ListaOvos",
    component: ListaOvos,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
