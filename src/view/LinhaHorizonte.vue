<template>
    <div>
        <div id="linha"></div>
        <h4>{{ atividade }}</h4>
    </div>
</template>

<script>
export default {
    props: {
        atividade: {
            type: String,
            required: true,
        },
    },
};
</script>

<style>
#linha {
    width: 100vw;
    height: 1px;
    background-color: #bbb;
}
h4 {
    font-weight: 900;
    margin-top: 20px;
}
</style>
