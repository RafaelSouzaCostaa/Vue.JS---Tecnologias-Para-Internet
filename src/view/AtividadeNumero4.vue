<template>
    <div id="container-listas">
        <div>
            <p>Lista v-for</p>
            <ol class="listas">
                <li class="rowsList1" v-for="item1 in itens1" :key="item1.txt">
                    {{ item1.txt }}
                </li>
            </ol>
            <input
                v-model="input1"
                placeholder="Digite um item para a lista..." />
            <button @click="add1">Adicionar</button>
        </div>
        <div>
            <p>Lista Vue.component</p>
            <ol class="listas">
                <RowList
                    v-for="item2 in itens"
                    :key="item2.txt"
                    :value="item2.txt"
                    :index="item2.index"
                    :nomeList="'lista4'"
                    @deletar-row="deletarRow(index)" />
            </ol>
            <input
                v-model="input2"
                placeholder="Digite um item para a lista..." />
            <button @click="add2">Adicionar</button>
        </div>
    </div>
</template>

<script>
import RowList from "../components/RowList.vue";

export default {
    nome: "AtividadeNumero4",
    components: {
        RowList,
    },
    data() {
        return {
            input1: null,
            input2: null,
            itens1: [],
            itens: [],
        };
    },
    methods: {
        validar(value) {
            if (value == "" || value == null) {
                return false;
            } else {
                return true;
            }
        },
        add1() {
            if (this.validar(this.input1)) {
                this.itens1.push({ txt: this.input1 });
                this.input1 = null;
            }
        },
        add2() {
            if (this.validar(this.input2)) {
                this.itens.push({ txt: this.input2, index: this.itens.length });
                this.input2 = null;
            }
        },
        deletarRow(index) {
            this.itens1.slice(index, 1);
        },
    },
};
</script>

<style scoper>
#container-listas {
    width: max-content;
    padding: 20px;
    height: auto;
    display: flex;
    justify-content: space-between;
    background-color: aliceblue;
}

#container-listas div {
    padding: 10px;
}

.rowsList1 {
    display: flex;
    justify-content: space-between;
    border: solid 1px #bbb;
    background-color: aquamarine;
    padding: 5px;
}

.listas {
    height: auto;
    max-height: 150px;
    overflow-y: auto;
}
</style>
