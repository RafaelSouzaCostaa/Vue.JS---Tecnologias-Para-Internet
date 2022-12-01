<template>
    <div id="atividade_18">
        <input type="text" v-model="inputTxt" />
        <button :disabled="enabled" @click="addList">ADD</button>
        <ol id="list_atividade_18">
            <RowList
                v-for="(titulo, index) in listaTitulos"
                :key="titulo.descricao"
                :value="titulo.descricao"
                :index="index"
                :nomeList="'lista18'"
                @deletar-row="deletarRow(index)" />
        </ol>
        <button v-if="listaTitulos.length > 0" @click="limparList">
            Limpar Lista
        </button>
    </div>
</template>

<script>
import RowList from "../components/RowList.vue";
export default {
    components: { RowList },
    data() {
        return {
            inputTxt: null,
            enabled: true,
            listaTitulos: [],
        };
    },
    methods: {
        addList() {
            this.listaTitulos.push({ descricao: this.inputTxt });
            this.inputTxt = null;
        },
        limparList() {
            this.listaTitulos = [];
        },
        deletarRow(index) {
            this.listaTitulos.slice(index, 1);
        },
    },
    watch: {
        inputTxt() {
            if (this.inputTxt == null || this.inputTxt == "") {
                this.enabled = true;
            } else {
                this.enabled = false;
            }
        },
    },
};
</script>

<style scoped>
#list_atividade_18 {
    width: 90vw;
    min-height: 35vh;
    height: auto;
    background-color: #bbb;
    padding: 0;
    margin-top: 20px;
}
#atividade_18 input {
    border: 1px solid #bbb;
    border-radius: 10px;
    padding: 3px;
}

#atividade_18 button {
    padding: 4px;
    border-radius: 10px;
    width: 100px;
    margin-bottom: 20px;
}
</style>
