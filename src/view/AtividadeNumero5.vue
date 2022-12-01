<template>
    <div>
        {{ texto }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            texto: `
                Vue.componente e resposavel por criar um componente para compor a lista, como realizado na atividade 04\n<br>
                porem na ativide ele foi criado de forma diferente do que está no slide, pois estou usando o Vue.js \n
                instalado e não online como o da sala, então possui diferenças significativas.
            `,
        };
    },
};
</script>

<style>
#txt {
    font-weight: 500;
}
</style>
