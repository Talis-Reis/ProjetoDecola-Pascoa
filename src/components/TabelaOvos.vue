<template>
    <v-card
    class="mx-auto"
    max-width="400"
    tile
    >
        <v-list>
            <v-list-item-group v-model="group" active-class="red lighten-2 text--accent-4">
                <v-list-item two-line v-for="ovo of ovos" :key="ovo.id">

                    <v-list-item-avatar>
                        <v-img :src="ovo.imagem" :alt="ovo.nome"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title class="text-left text-capitalize">{{ ovo.nome }}</v-list-item-title>
                        <v-list-item-subtitle class="text-left">{{"R$ "+ ovo.preco + " - " + ovo.sabor}}</v-list-item-subtitle>
                    </v-list-item-content>        
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-card>
</template>

<script>
    export default {
        name: 'TabelaOvos',
        props: {
            ovos: {
                type: Array,
                required:true
            }
        }
    }
</script>