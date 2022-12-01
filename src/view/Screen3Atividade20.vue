<template>
    <div>
        Tela 3 - Atividade 20
        <button @click="screen_atividade20">Voltar</button>
    </div>
</template>

<script>
import router from "../routes/router";
export default {
    methods: {
        screen_atividade20: function () {
            router.push({ name: "home" });
        },
    },
};
</script>

<style></style>
