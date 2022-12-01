<template>
    <div @click="trocarIMG_TITULO">
        <p>Click na Image (v-bind esta simplificado em ":". v-if no title)</p>
        <i>@click de brinde!</i>
        <h2 v-if="chaveIMG == true">Study</h2>
        <h2 v-else>Teach</h2>
        <img
            :style="'display:' + (chaveIMG ? 'block' : 'none') + ';'"
            src="https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&w=500"
        />
        <img
            :style="'display:' + (chaveIMG ? 'none' : 'block') + ';'"
            src="https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=500"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            chaveIMG: true,
        };
    },
    methods: {
        trocarIMG_TITULO() {
            this.chaveIMG = !this.chaveIMG;
        },
    },
};
</script>

<style></style>
