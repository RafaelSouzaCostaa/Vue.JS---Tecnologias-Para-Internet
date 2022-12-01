<script>
export default {
    data() {
        return {
            nome: "app2",
            message_livros: "Alguns livros legais!",
            livros_preferidos: [
                { text: "Clean Code" },
                { text: "Codigo Limpo" },
                { text: "Styles CSS" },
            ],
            message_materiais: "Alguns materiais!",
            materiais_escolares: [
                { text: "Caneta" },
                { text: "Lapis" },
                { text: "Borracha" },
            ],
            message_nome: "Alguns nomes de caras!",
            nome_de_pessoas: [
                { text: "Renner o cara" },
                { text: "Luiggi irmão do cara" },
                { text: "LuFrei " },
            ],
        };
    },
};
</script>

<template>
    <div id="app-atividade02">
        <ol v-bind:title="message_livros">
            Livros:
            <li v-for="livro in livros_preferidos" :key="livro">
                {{ livro.text }}
            </li>
        </ol>

        <ol v-bind:title="message_materiais">
            Materiais Escolares:
            <li v-for="material in materiais_escolares" :key="material.text">
                {{ material.text }}
            </li>
        </ol>
        <ol v-bind:title="message_nome">
            Nomes:
            <li v-for="nome in nome_de_pessoas" :key="nome.text">
                {{ nome.text }}
            </li>
        </ol>
    </div>
</template>

<style>
#app-atividade02 li {
    margin-left: 50px;
}
#app-atividade02 ol {
    margin-left: 5px;
}
</style>
