<template>
    <div>
        Click no numero
        <h5 @click="numero++, font++" :style="'font-size: ' + font + 'px'">
            {{ numero }}
        </h5>
    </div>
</template>

<script>
export default {
    data() {
        return {
            numero: 0,
            font: 16,
        };
    },
};
</script>

<style></style>
