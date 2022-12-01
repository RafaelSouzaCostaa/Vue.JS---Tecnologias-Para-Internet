<template>
    <div>
        <div class="form-floating">
            <select
                class="form-select"
                id="floatingSelect"
                aria-label="Floating label select example"
                v-model="selecionadoAutor"
            >
                <option
                    v-for="(autor, index) in lista"
                    :key="autor"
                    :value="index"
                >
                    {{ autor.nome }}
                </option>
            </select>
            <label for="floatingSelect">Select Autores</label>
        </div>

        <p>{{ fraseAutor }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            lista: [
                {
                    nome: "Bill Gates",
                    msg: "A primeira regra de qualquer tecnologia utilizada nos negócios é que a automação aplicada a uma operação eficiente aumentará a eficiência. A segunda é que a automação aplicada a uma operação ineficiente aumentará a ineficiência.",
                },
                {
                    nome: "Alan Kay",
                    msg: "Tecnologia é qualquer coisa que não estava por aí quando você nasceu.",
                },
                {
                    nome: "Marco Aurélio Ferreira",
                    msg: "Quanto mais avança a tecnologia, mais respeitado será o Ser que se mantiver Humano.",
                },
                {
                    nome: "Elbert Hubbard",
                    msg: "Uma máquina consegue fazer o trabalho de 50 homens ordinários. Nenhuma máquina consegue fazer o trabalho de um homem extraordinário.",
                },
                {
                    nome: "Platão",
                    msg: "A necessidade é a mãe da inovação.",
                },
                {
                    nome: "Albert Einstein",
                    msg: "Se, a princípio, a ideia não é absurda, então não há esperança para ela.",
                },
                {
                    nome: "Nolan Bushnell",
                    msg: "Se você contar sua ideia para 10 pessoas e 9 delas disser que você está maluco, provavelmente você está fazendo algo inovador.",
                },
                {
                    nome: "Thomas Edison",
                    msg: "Eu não falhei. Apenas descobri 10 mil maneiras que não funcionam.",
                },
            ],
            selecionadoAutor: null,
            fraseAutor: null,
        };
    },
    watch: {
        selecionadoAutor(newValor) {
            this.fraseAutor = this.minuscula(this.lista[newValor].msg);
        },
    },
    methods: {
        minuscula: function (value) {
            return value.toLowerCase();
        },
    },
};
</script>

<style></style>
