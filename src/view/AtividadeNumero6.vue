<template>
    <div>
        <h1>{{ inputTitulo }}</h1>
        <p>{{ inputParagrafo }}</p>
        <input
            type="text"
            v-model="inputTitulo"
            placeholder="Digite um titulo"
        />
        <input
            type="text"
            v-model="inputParagrafo"
            placeholder="Digite um paragrafo"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            inputTitulo: null,
            inputParagrafo: null,
        };
    },
};
</script>
