<template>
    <div>
        <span v-bind:title="message" v-if="visualizar"
            >Pare o ponteiro do rato aqui... e veja o rato!</span
        >
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: "O rato correu! voce demorou... hehehe",
            visualizar: true,
        };
    },
};
</script>

<style></style>
