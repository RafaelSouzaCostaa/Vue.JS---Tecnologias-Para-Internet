<template>
    <div>
        <div class="atividade_19">
            <input type="text" v-model="inputTxt1" />
            <button :disabled="enabled1" @click="addList1">ADD</button>
            <ol id="list_atividade_19">
                <RowList
                    v-for="(titulo, index) in listaTitulos1"
                    :key="titulo.descricao"
                    :value="titulo.descricao"
                    :index="index"
                    :nomeList="'lista19'"
                    @deletar-row="deletarRow1(index)" />
            </ol>

            <button v-if="listaTitulos1.length" @click="limparList1">
                Limpar Lista
            </button>
        </div>
        <button id="btn_copiaLista" @click="copiarLista">
            Copiar Lista 1 > 2
        </button>
        <div class="atividade_19">
            <input type="text" v-model="inputTxt2" />
            <button :disabled="enabled2" @click="addList2">ADD</button>
            <ol id="list_atividade_19">
                <RowList
                    v-for="(titulo, index) in listaTitulos2"
                    :key="titulo.descricao"
                    :value="titulo.descricao"
                    :index="index"
                    :nomeList="'lista19_2'"
                    @deletar-row="deletarRow2(index)" />
            </ol>

            <button v-if="listaTitulos2.length" @click="limparList2">
                Limpar Lista
            </button>
        </div>
    </div>
</template>

<script>
import RowList from "../components/RowList.vue";
export default {
    components: { RowList },
    data() {
        return {
            inputTxt1: null,
            enabled1: true,
            listaTitulos1: [],
            inputTxt2: null,
            enabled2: true,
            listaTitulos2: [],
        };
    },
    methods: {
        addList1() {
            this.listaTitulos1.push({ descricao: this.inputTxt1 });
            this.inputTxt1 = null;
        },
        limparList1() {
            this.listaTitulos1 = [];
        },
        addList2() {
            this.listaTitulos2.push({ descricao: this.inputTxt2 });
            this.inputTxt2 = null;
        },
        limparList2() {
            this.listaTitulos2 = [];
        },
        copiarLista() {
            this.limparList2();
            this.listaTitulos1.forEach((element) => {
                this.listaTitulos2.push(element);
            });
        },
        deletarRow1(index) {
            alert(index);
            this.listaTitulos1.splice(index, 1);
        },

        deletarRow2(index) {
            this.listaTitulos2.splice(index, 1);
        },
    },
    watch: {
        inputTxt1() {
            if (this.inputTxt1 == null || this.inputTxt1 == "") {
                this.enabled1 = true;
            } else {
                this.enabled1 = false;
            }
        },
        inputTxt2() {
            if (this.inputTxt2 == null || this.inputTxt2 == "") {
                this.enabled2 = true;
            } else {
                this.enabled2 = false;
            }
        },
    },
};
</script>

<style scoped>
#list_atividade_19 {
    width: 90vw;
    min-height: 35vh;
    height: auto;
    background-color: #bbb;
    padding: 0;
    margin-top: 20px;
}
.atividade_19 input {
    border: 1px solid #bbb;
    border-radius: 10px;
    padding: 3px;
}

.atividade_19 button {
    padding: 4px;
    border-radius: 10px;
    width: 100px;
    margin-bottom: 20px;
}

#btn_copiaLista {
    padding: 10px;
    margin: 20px;
}
</style>
