<template>
    <div>
        <button @click="screen_atividade20(1)">Screen 1</button>
        <button @click="screen_atividade20(2)">Screen 2</button>
        <button @click="screen_atividade20(3)">Screen 3</button>

        <p>
            Explicação das Rotas
            <a href="https://youtu.be/5XnFaQVjU7k" target="_blank">AQUI!</a>
        </p>
    </div>
</template>

<script>
import router from "../routes/router";
export default {
    methods: {
        screen_atividade20: function (screen) {
            switch (screen) {
                case 1:
                    router.push({ name: "screen1_atividade20" });
                    break;
                case 2:
                    router.push({ name: "screen2_atividade20" });
                    break;
                case 3:
                    router.push({ name: "screen3_atividade20" });
                    break;
            }
        },
    },
};
</script>

<style></style>
