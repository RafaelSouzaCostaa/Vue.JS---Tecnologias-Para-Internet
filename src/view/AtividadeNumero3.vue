<template>
    <div id="app-atividade03">
        <ol>
            <li v-for="item in items" :key="item.txt">
                {{ item.txt }}
            </li>
        </ol>

        <input type="text" v-model="input" placeholder="Digite um valor..." />

        <button @click="add">Adicionar</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [],
            input: null,
        };
    },
    methods: {
        add: function () {
            if (!(this.input == null || this.input == "")) {
                this.items.push({ txt: this.input });
                this.input = null;
            }
        },
    },
};
</script>

<style>
#app-atividade03 {
    margin-top: 10px;
}
#app-atividade03 ol,
input,
button {
    margin-left: 20px;
}
#app-atividade03 input {
    background-color: #bbb;
    padding: 4px;
}
#app-atividade03 button {
    padding: 4px;
    background-color: #bbb;
}
#app-atividade03 button:hover {
    padding: 4px;
    background-color: rgb(71, 71, 71);
    color: white;
}
</style>
