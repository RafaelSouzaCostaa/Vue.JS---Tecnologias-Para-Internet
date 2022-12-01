<script>
export default {
    name: "RelogioAtual",
    data() {
        return {
            txt: "",
        };
    },
    mounted() {
        setInterval(() => {
            this.txt = instanteFormatado();
        }, 1000);
    },
};

function instanteFormatado() {
    let data = new Date();
    return data.toLocaleDateString() + " " + data.toLocaleTimeString();
}
</script>

<template>
    <h4>{{ txt }}</h4>
</template>
