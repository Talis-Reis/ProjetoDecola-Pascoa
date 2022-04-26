<template>     
    <v-container class= 'cor'>        
        <h2 class="text-uppercase mb-4 mt-6 font-weight-bold">Sobre o Projeto</h2>
        <p class="text-justify mb-4 mt-6">O projeto "Páscoa Inclusiva" foi desenvolvido durante o hackaton do Projeto Decola, no processo de seleção de estágio para a empresa
            <a href="www.iteris.com.br">Iteris</a>.</p>

        <div class="titulo">
            <p class="text-justify mb-4 mt-6">Desenvolvedores envolvidos no projeto</p> 
        </div>
        <div class="texto"> 
            <tbody>           
                <tr v-for="desenvolvedor of desenvolvedores" :key="desenvolvedor.id" >
                    <td>
                        <v-avatar size=62 mb-50 mt-5>
                            <img
                                :src="desenvolvedor.avatar" 
                                :alt="desenvolvedor.nome"
                            >
                        </v-avatar>
                    </td>
                    <td class="link"><a :href="desenvolvedor.link"> {{desenvolvedor.nome}}</a></td>     
                </tr>
            </tbody> 
        </div>        
    </v-container>

</template>

<script>
export default {
    name: 'SobreNos',
    data() {
        return {
            desenvolvedores: [
                {
                    "id": 2,
                    "link": "https://github.com/lipecd/",
                    "nome": "Felipe Cardoso Duarte",
                    "avatar": "https://github.com/lipecd.png"
                },
                {
                    "id": 4,
                    "link": "https://github.com/JessicaTroiano/",
                    "nome": "Jessica Troiano",
                    "avatar": "https://github.com/JessicaTroiano.png"
                },
                {
                    "id": 1,
                    "link": "https://github.com/luizgnclvs/",
                    "nome": "Luis Gonçalves",
                    "avatar": "https://github.com/luizgnclvs.png"
                },
              
                {
                    "id": 5,
                    "link": "https://github.com/paulinhac/",
                    "nome": "Paula Cabral",
                    "avatar": "https://github.com/paulinhac.png"
                },
                 {
                    "id": 3,
                    "link": "https://github.com/talis-reis/",
                    "nome": "Talis Reis",
                    "avatar": "https://github.com/talis-reis.png"
                },
            ]
        };
    },
    
};
</script>

<style scoped>
    .texto a {
        text-decoration: none;
        color: #000;
    }
    
    .titulo {
        display: flex;
        justify-content: center;
        align-content: center;
    }
    .texto {
        display: flex;
        justify-content: center;
        align-content: center;
    }
    .cor {
    background-image: linear-gradient(180deg, #6D4C41, #A1887F, #ffffff);
    }
</style>
