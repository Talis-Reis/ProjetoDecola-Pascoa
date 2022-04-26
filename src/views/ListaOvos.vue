<template>
    <v-container fluid>
        <div class="header">
        <h2 class="text-h5 text-left mb-3 mt-5">Ovos Caseiros</h2>
        <v-dialog
                v-model="dialog"
                persistent
                max-width="290"
                >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    icon
                    color="brown darken-1"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    >
                        <v-icon>mdi-filter</v-icon>
                    </v-btn>
                </template>
                <v-card>
                    <v-card-title class="text-h5">
                    Filtrar itens por:
                    </v-card-title>
                        <v-card-text>
                            <v-container class="px-0" fluid>
                                <v-row>
                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="6"
                                >
                                    <v-radio-group
                                    v-model="ex7"
                                    column
                                    >
                                    <v-radio
                                        label="Nome"
                                        color="brown darken-1"
                                        value="red"
                                        @click="dialog = false"
                                        @select="filtroNome()"
                                    ></v-radio>
                                    <v-radio
                                        label="Preço"
                                        color="brown darken-1"
                                        value="red darken-3"
                                        @click="dialog = false"
                                        @select="filtroPreco()"
                                    ></v-radio>
                                    <v-radio
                                        label="Estabelecimento"
                                        color="brown darken-1"
                                        value="indigo"
                                        @click="dialog = false"
                                    ></v-radio>                                    
                                    </v-radio-group>
                                </v-col>                                
                                </v-row>
                            </v-container>
                        </v-card-text>   
                    </v-card>
                </v-dialog>
        </div>       
        <TabelaOvos :ovos="listaOvos"/>
    </v-container>
</template>

<script>

    import TabelaOvos from '../components/TabelaOvos.vue'

    export default {
        name: 'ListaOvos',
        components: {
            TabelaOvos
        },
        data () {
            return {
                listaOvos: [],
                dialog: false,                
            }
        },
        created () {
            fetch('https://it3-hbn-default-rtdb.firebaseio.com/ovosPascoa.json')
                .then(response => response.json())
                .then(json => {
                    this.listaOvos = json;
                })
        },
        computed: {            
            filtroNome () {
                const listaNome = this.listaOvos.slice(0).sort(
                    (a, b) => a.nome > b.nome ? -1 : 1
                );
                return listaNome;
            },
            filtroPreco() {
                const listaPreco = this.listaOvos.slice(0).sort(
                    (a, b) => a.preco > b.preco ? -1 : 1
                );
                return listaPreco;
            }
        }
    }
</script>

<style scoped>
    .header {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }    
</style>