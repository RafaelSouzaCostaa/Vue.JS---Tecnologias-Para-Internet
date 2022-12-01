<template>
    <div id="app-atividade14">
        <div id="container-data-atividade14">
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button
                            class="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            <h6>
                                <span class="tarefasLength">
                                    {{
                                        tarefasAltaPrioridade.length > 0
                                            ? " +" +
                                              tarefasAltaPrioridade.length
                                            : "  " +
                                              tarefasAltaPrioridade.length
                                    }}
                                </span>
                                Prioridade Alta
                            </h6>
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        class="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                    >
                        <div class="accordion-body">
                            <!-- Aqui coloca todo o codigo -->
                            <span
                                v-for="(tarefa, index) in tarefasAltaPrioridade"
                                :key="tarefa"
                            >
                                <div class="container-details-tarefas">
                                    <div class="title-tarefa">
                                        {{ tarefa.nome }}
                                    </div>
                                    <div class="details-tarefa">
                                        <p>{{ tarefa.descricao }}</p>
                                    </div>
                                    <div>
                                        <button
                                            @click="
                                                this.delete(
                                                    index,
                                                    tarefasAltaPrioridade
                                                )
                                            "
                                            class="btnDeleteTarefa"
                                        >
                                            <img
                                                :src="
                                                    require('../assets/icons/trash-2.svg')
                                                "
                                            />
                                        </button>
                                    </div>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                            <h6>
                                <span class="tarefasLength">
                                    {{
                                        tarefasBaixaPrioridade.length > 0
                                            ? " +" +
                                              tarefasBaixaPrioridade.length
                                            : "  " +
                                              tarefasBaixaPrioridade.length
                                    }}
                                </span>
                                Prioridade Baixa
                            </h6>
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                    >
                        <div class="accordion-body">
                            <!-- Aqui coloca todo o codigo -->
                            <span
                                v-for="(
                                    tarefa, index
                                ) in tarefasBaixaPrioridade"
                                :key="tarefa"
                            >
                                <div class="container-details-tarefas">
                                    <div class="title-tarefa">
                                        {{ tarefa.nome }}
                                    </div>
                                    <div class="details-tarefa">
                                        <p>{{ tarefa.descricao }}</p>
                                    </div>
                                    <div>
                                        <button
                                            @click="
                                                this.delete(
                                                    index,
                                                    tarefasBaixaPrioridade
                                                )
                                            "
                                            class="btnDeleteTarefa"
                                        >
                                            <img
                                                :src="
                                                    require('../assets/icons/trash-2.svg')
                                                "
                                            />
                                        </button>
                                    </div>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                        >
                            <h6>
                                <span class="tarefasLength">
                                    {{
                                        tarefasSemPrioridade.length > 0
                                            ? " +" + tarefasSemPrioridade.length
                                            : " " + tarefasSemPrioridade.length
                                    }}
                                </span>
                                Sem Prioridade
                            </h6>
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                    >
                        <div class="accordion-body">
                            <!-- Aqui coloca todo o codigo -->
                            <span
                                v-for="(tarefa, index) in tarefasSemPrioridade"
                                :key="tarefa"
                            >
                                <div class="container-details-tarefas">
                                    <div class="title-tarefa">
                                        {{ tarefa.nome }}
                                    </div>
                                    <div class="details-tarefa">
                                        <p>{{ tarefa.descricao }}</p>
                                    </div>
                                    <div>
                                        <button
                                            @click="
                                                this.delete(
                                                    index,
                                                    tarefasSemPrioridade
                                                )
                                            "
                                            class="btnDeleteTarefa"
                                        >
                                            <img
                                                :src="
                                                    require('../assets/icons/trash-2.svg')
                                                "
                                            />
                                        </button>
                                    </div>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="container-form-atividade14">
            <form @submit="addTarefa">
                <div class="row mb-1">
                    <div>
                        <input
                            type="text"
                            class="form-control"
                            id="inputNomeTarefa"
                            placeholder="Nome Tarefa"
                            v-model="inputNameTarefa"
                            name="inputNomeTarefa"
                        />
                    </div>
                </div>
                <div class="row mb-1">
                    <div>
                        <textarea
                            type="text"
                            class="form-control"
                            id="inputDescricaoTarefa"
                            placeholder="Descrição Tarefa"
                            v-model="inputDescricaoTarefa"
                            name="inputDescricaoTarefa"
                        />
                    </div>
                </div>
                <fieldset class="row mb-0">
                    <div class="col-sm-10" id="containerInputRadio">
                        <div class="form-check">
                            <input
                                class="form-check-input"
                                type="radio"
                                name="gridRadios"
                                id="gridRadios1"
                                :value="true"
                                v-model="prioridadeBool"
                            />
                            <label class="form-check-label" for="gridRadios1">
                                Alta Prioridade
                            </label>
                        </div>
                        <div class="form-check">
                            <input
                                class="form-check-input"
                                type="radio"
                                name="gridRadios"
                                id="gridRadios2"
                                :value="false"
                                v-model="prioridadeBool"
                                checked
                            />
                            <label class="form-check-label" for="gridRadios2">
                                Baixa Prioridade
                            </label>
                        </div>
                        <div class="row mb-1">
                            <div class="col-sm-10 offset-sm-2">
                                <div class="form-check">
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        id="gridCheck1"
                                        v-model="semPrioridadeCheckbox"
                                    />
                                    <label
                                        class="form-check-label"
                                        for="gridCheck1"
                                    >
                                        Sem Prioridade
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <button type="submit" class="btn btn-primary">Cadastrar</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            inputNameTarefa: null,
            inputDescricaoTarefa: null,
            semPrioridadeCheckbox: null,
            prioridadeBool: false,
            tarefasSemPrioridade: [],
            tarefasAltaPrioridade: [
                //################################ TESTE ESTATICO#####################################
                // {
                //     nome: "Tarefa01",
                //     descricao:
                //         "loremIpsum wsdwqd qwed qwd qweed qasasd asd asd asd asddasasdadas qweed qweed qwed qwe we wd qwdwqd qwd wqd s",
                // },
            ],
            tarefasBaixaPrioridade: [],
        };
    },
    methods: {
        addTarefa(form) {
            form.preventDefault();
            if (
                this.inputDescricaoTarefa != null &&
                this.inputDescricaoTarefa != ""
            ) {
                if (
                    this.inputNameTarefa != null &&
                    this.inputNameTarefa != ""
                ) {
                    if (this.semPrioridadeCheckbox) {
                        //sem prioridade
                        this.tarefasSemPrioridade.push({
                            nome: this.inputNameTarefa,
                            descricao: this.inputDescricaoTarefa,
                        });
                    } else {
                        //check alta/baixa prioridade
                        if (this.prioridadeBool) {
                            this.tarefasAltaPrioridade.push({
                                nome: this.inputNameTarefa,
                                descricao: this.inputDescricaoTarefa,
                            });
                        } else {
                            this.tarefasBaixaPrioridade.push({
                                nome: this.inputNameTarefa,
                                descricao: this.inputDescricaoTarefa,
                            });
                        }
                    }
                }
            }
            this.inputNameTarefa = null;
            this.inputDescricaoTarefa = null;
        },
        delete(index, lista) {
            if (
                confirm(
                    "Deseja realmente deletar essa tarefa? ( " +
                        lista[index].nome +
                        " )"
                )
            ) {
                lista.splice(index, 1);
            }
        },
    },
};
</script>

<style>
#app-atividade14 {
    width: calc(100vw - 28px);
    height: min-content;
    padding: 10px;
    background-color: #bbb;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#app-atividade14 form {
    padding: 20px;
    width: 100%;
}

#app-atividade14 .form-check-label {
    width: max-content;
}

#inputNomeTarefa {
    margin-left: 0;
}
#container-form-atividade14 {
    width: 50%;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin: 0px 0 20px 0;
}

#containerInputRadio {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
}

#container-data-atividade14 {
    width: calc(50% + 40px);
    margin: 10px 40px 0px 40px;
    padding: 20px;
}

#container-data-atividade14 button {
    margin: 0;
}

@font-face {
    font-family: AlmondCookies;
    src: url(../assets/font/AlmondCookies.ttf);
}

.tarefasLength {
    font-family: AlmondCookies;
    font-size: 1.1em;
    margin-left: 5px;
}

.container-details-tarefas {
    width: 100%;
    display: flex;
    border: 1px solid rgba(204, 204, 204, 0.623);
    border-radius: 10px;
}

.title-tarefa {
    flex: 1;
    margin: 4px;
}

.details-tarefa {
    flex: 4;
    padding: 5px;
    border-left: 3px solid rgba(187, 187, 187, 0.801);
    border-right: 3px solid rgba(187, 187, 187, 0.801);
    background-color: rgba(187, 187, 187, 0.178);
    margin-right: 5px;
    border-radius: 10px;
    width: min-content;
}

.details-tarefa p {
    text-align: justify;
}

.btnDeleteTarefa {
    flex: 1;
    border-radius: 10px;
}
</style>
