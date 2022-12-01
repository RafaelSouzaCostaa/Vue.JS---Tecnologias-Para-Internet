<template>
    <div>
        <button id="btn_atividade_11" @click="increment">Contar +1</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 0,
        };
    },
    methods: {
        increment() {
            console.log(this.count);
            this.count++;
            if (this.count >= 4) {
                alert("MaiorSim");
            }
        },
    },
};
</script>

<style>
#btn_atividade_11 {
    padding: 10px;
    border-radius: 10px;
}
</style>
