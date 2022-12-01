<template>
    <div id="list_atividade_EAD2">
        <ol>
            <Relogio />
            <RowList
                v-for="(pessoa, index) in listEAD2"
                :key="pessoa"
                :value="pessoa.nome"
                :index="index"
                :nomeList="'ead2'"
                @deletar-row="deletarRow(index)" />
            <p>
                Explicação do Componente
                <a href="https://youtu.be/kbZeirASoCA" target="_blank">AQUI!</a>
            </p>
        </ol>
    </div>
</template>

<script>
import RowList from "../components/RowList.vue";
import Relogio from "../components/Relogio.vue";
export default {
    data() {
        return {
            listEAD2: [
                { nome: "Rafael" },
                { nome: "Rodrigo" },
                { nome: "Renner" },
                { nome: "José" },
                { nome: "Madalena" },
            ],
        };
    },
    components: { Relogio, RowList },
    methods: {
        deletarRow(index) {
            this.listEAD2.slice(index, 1);
        },
    },
};
</script>

<style scoped>
#list_atividade_EAD2 {
    width: 90vw;
    min-height: 35vh;
    height: auto;
    background-color: #bbb;
    padding: 0;
    margin-top: 20px;
}
</style>
