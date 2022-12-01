<template>
    <div id="atividade10">
        <form id="form_atividade10" @submit="checkForm">
            <label>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1"
                        >Nome Tarefa</span
                    >
                    <input
                        type="text"
                        class="form-control"
                        v-model="txtTarefaName"
                        placeholder="nome/codigo"
                    />
                </div>
            </label>
            <div style="display: flex; flex-direction: column">
                <div class="form-check">
                    <input
                        class="form-check-input"
                        v-model="prioridadeColor"
                        name="radio"
                        type="radio"
                        value="true"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                        Alta Prioridade
                    </label>
                </div>
                <div class="form-check">
                    <input
                        class="form-check-input"
                        v-model="prioridadeColor"
                        name="radio"
                        type="radio"
                        value="false"
                        checked
                        id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                        Baixa Prioridade
                    </label>
                </div>
                <div class="form-check">
                    <input
                        class="form-check-input"
                        type="checkbox"
                        v-model="cancelPrioridade"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                        Ignorar Prioridade
                    </label>
                </div>
            </div>

            <div class="form-floating">
                <select
                    class="form-select"
                    id="floatingSelect"
                    aria-label="Floating label select example"
                    v-model="daySelect"
                >
                    <option v-for="dia in daySemana" :key="dia">
                        {{ dia }}
                    </option>
                </select>
                <label id="label-dia-semana" for="floatingSelect"
                    >Dia da Semana</label
                >
            </div>

            <button class="btn btn-success">Salvar</button>
        </form>
        <div id="dados_form">
            <table id="tabela" class="table table-success table-striped">
                <thead>
                    <tr>
                        <td v-for="diaTable in daySemana" :key="diaTable">
                            {{ diaTable }}
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="tarefa in arrayTarefas" :key="tarefa">
                        <td v-if="tarefa.daySemana == 'Segunda'">
                            <div class="tarefaIcon">
                                {{ tarefa.nomeTarefa }}
                                <img :src="tarefa.prioridadeIMG" />
                            </div>
                        </td>
                        <td v-else>*</td>
                        <td v-if="tarefa.daySemana == 'Terça'">
                            <div class="tarefaIcon">
                                {{ tarefa.nomeTarefa }}
                                <img :src="tarefa.prioridadeIMG" />
                            </div>
                        </td>
                        <td v-else>*</td>
                        <td v-if="tarefa.daySemana == 'Quarta'">
                            <div class="tarefaIcon">
                                {{ tarefa.nomeTarefa }}
                                <img :src="tarefa.prioridadeIMG" />
                            </div>
                        </td>
                        <td v-else>*</td>
                        <td
                            class="td_vazio_table"
                            v-if="tarefa.daySemana == 'Quinta'"
                        >
                            <div class="tarefaIcon">
                                {{ tarefa.nomeTarefa }}
                                <img :src="tarefa.prioridadeIMG" />
                            </div>
                        </td>
                        <td v-else>*</td>
                        <td v-if="tarefa.daySemana == 'Sexta'">
                            <div class="tarefaIcon">
                                {{ tarefa.nomeTarefa }}
                                <img :src="tarefa.prioridadeIMG" />
                            </div>
                        </td>
                        <td v-else>*</td>
                        <td v-if="tarefa.daySemana == 'Sabado'">
                            <div class="tarefaIcon">
                                {{ tarefa.nomeTarefa }}
                                <img :src="tarefa.prioridadeIMG" />
                            </div>
                        </td>
                        <td v-else>*</td>
                        <td v-if="tarefa.daySemana == 'Domingo'">
                            <div class="tarefaIcon">
                                {{ tarefa.nomeTarefa }}
                                <img :src="tarefa.prioridadeIMG" />
                            </div>
                        </td>
                        <td v-else>*</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            arrayTarefas: [
                // { //Teste
                //     id: 1,
                //     nomeTarefa: "324324234234234234234",
                //     prioridadeIMG: require("../assets/icons/semPrioridade.svg"),
                //     daySemana: "Terça",
                // },
            ],

            daySemana: [
                "Segunda",
                "Terça",
                "Quarta",
                "Quinta",
                "Sexta",
                "Sabado",
                "Domingo",
            ],
            txtTarefaName: null,
            daySelect: null,
            prioridadeColor: null,
            cancelPrioridade: null,
            prioridadeIMG: null,
        };
    },
    methods: {
        checkForm(form) {
            form.preventDefault();
            console.table(this.arrayTarefas);
            if (this.cancelPrioridade === true) {
                this.prioridadeIMG = require("../assets/icons/semPrioridade.svg");
            } else if (this.prioridadeColor === "true") {
                this.prioridadeIMG = require("../assets/icons/altoPrioridade.svg");
            } else {
                this.prioridadeIMG = require("../assets/icons/baixaPrioridade.svg");
            }
            let auxTarefa = {
                nomeTarefa: this.txtTarefaName,
                prioridadeIMG: this.prioridadeIMG,
                daySemana: this.daySelect,
            };

            if (this.txtTarefaName == null || this.daySelect == null) {
                this.$refs.input_tarefa.focus(); //$refs referencia o "ID" em vue.js, porem a marcação e "ref='input_tarefa'"
                return;
            }
            this.arrayTarefas.push(auxTarefa);
        },
    },
};
</script>

<style scoped>
#form_atividade10 {
    display: flex;
    flex-direction: column;
    width: auto;
    min-height: 30vh;
    height: auto;
    justify-content: space-evenly;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 10 10 50 rgb(221, 207, 204);
}

*#form_atividade10 {
    width: max-content;
}

#form_atividade10 button {
    width: 100%;
    margin-top: 5px;
    margin-left: 0;
}

#dados_form {
    min-width: 30vw;
    width: auto;
    min-height: 30vh;
    max-height: 80vh;
    padding: 20px;
    background-color: rgb(245, 245, 245);
    border-radius: 10px;
    overflow-x: auto;
}

#atividade10 {
    padding: 20px;
    width: calc(100vw - 70px);
    background-color: #aaa;
    border-radius: 10px;
    display: flex;
    justify-content: space-evenly;
}

label-dia-semana {
    text-align: center;
}

#tabela {
    width: 100%;
}

.tarefaIcon {
    display: flex;
    align-items: center;
}

#tabela td {
    width: 100%;
}
</style>
