<template>
    <div>
        <input
            type="number"
            v-model="inputCEP"
            :placeholder="placeholderFinal"
            :class="inputBorder ? 'inputSuccess' : 'InputError'"
            ref="inputRefCEP"
            id="inputCep" />

        <div id="container_result_cep">
            <p v-if="dados.cep != null && dados.cep != ''">
                CEP: {{ dados.cep }}
            </p>
            <p v-if="dados.logradouro != null && dados.logradouro != ''">
                Logradouro: {{ dados.logradouro }}
            </p>
            <p v-if="dados.complemento != null && dados.complemento != ''">
                Complemento: {{ dados.complemento }}
            </p>

            <p v-if="dados.bairro != null && dados.bairro != ''">
                Bairro: {{ dados.bairro }}
            </p>
            <p v-if="dados.localidade != null && dados.localidade != ''">
                Localidade: {{ dados.localidade }}
            </p>
            <p v-if="dados.uf != null && dados.uf != ''">UF: {{ dados.uf }}</p>

            <p v-if="dados.ibge != null && dados.ibge != ''">
                IBGE: {{ dados.ibge }}
            </p>
            <p v-if="dados.gia != null && dados.gia != ''">
                GIA: {{ dados.gia }}
            </p>
            <p v-if="dados.ddd != null && dados.ddd != ''">
                DDD: {{ dados.ddd }}
            </p>
            <p v-if="dados.siafi != null && dados.siafi != ''">
                SIAFI: {{ dados.siafi }}
            </p>
        </div>
        <div>
            <button
                class="btn btn-primary"
                @click="buscarCepAPI"
                v-if="!spinner">
                Buscar
            </button>
            <div
                class="spinner-border text-success"
                role="status"
                v-if="spinner">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            inputCEP: "",
            dados: [],
            placeholderFinal: "Digite um CEP valido...",
            inputBorder: null,
            regexCEP: new RegExp("^[0-9]{8}$"),
            spinner: false,
        };
    },
    methods: {
        async buscarCepAPI() {
            if (this.regexCEP.test(this.inputCEP)) {
                if (this.inputCEP != null && this.inputCEP != "") {
                    this.spinner = true;
                    await fetch(
                        `https://viacep.com.br/ws/${this.inputCEP}/json/`
                    )
                        .then((resp) => resp.json())
                        .then((data) => (this.dados = data));

                    this.placeholderFinal = "Ultima busca: " + this.inputCEP;
                    this.inputCEP = null;
                    this.spinner = false;
                }
            }
            this.inputBorder = false;
            this.$refs.inputRefCEP.focus();
        },
    },
    watch: {
        inputCEP() {
            if (this.regexCEP.test(this.inputCEP)) {
                this.$refs.inputRefCEP.blur();
                this.inputBorder = true;
            }
        },
    },
};
</script>

<style>
.inputError {
    border: 1px solid red;
}

.inputSuccess {
    border: 1px solid rgb(5, 153, 25);
}

#inputCep {
    width: min-content;
}

.container_infos {
    display: flex;
    justify-content: space-between;
    border: solid 1px #bbb;
}
</style>
