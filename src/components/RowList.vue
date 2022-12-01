<template>
    <li class="RowsList" :id="nomeList + index">
        {{ value }}
        <img
            class="img-deletar"
            src="../assets/icons/trash-2.svg"
            alt="deletar"
            @click="deletarRows(index)" />
    </li>
</template>
<script>
export default {
    name: "RowList",
    props: {
        value: {
            type: String,
            required: true,
        },
        index: String,
        nomeList: {
            type: String,
            required: true,
        },
    },
    emits: ["deletar-row"],
    methods: {
        deletarRows(index) {
            this.$emit("deletar-row", index);
            document.querySelector(this.nomeList + index).remove();
        },
    },
};
</script>

<style>
.RowsList {
    display: flex;
    justify-content: space-between;
    border: solid 1px #bbb;
    background-color: aquamarine;
    padding: 5px;
}
</style>
