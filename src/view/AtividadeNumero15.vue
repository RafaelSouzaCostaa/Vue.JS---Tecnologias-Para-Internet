<template>
    <div id="container_aula_15">
        <h1>{{ titulo }}</h1>
        <button class="btn btn-primary" @click="enviar()">Enviar</button>
        <p>
            Explicação do Codigo
            <a href="https://youtu.be/7krkaouEmgw" target="_blank">AQUI!</a>
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            titulo: "Aula de Vue JS",
        };
    },
    methods: {
        enviar() {
            alert("Enviado: " + this.titulo);
        },
    },
};
</script>

<style>
#container_aula_15 {
    width: 100vw;
    min-height: 15vh;
    background-color: #bbb;
    padding: 20px;
}
</style>
