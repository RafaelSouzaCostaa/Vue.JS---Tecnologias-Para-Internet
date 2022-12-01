<template>
    <div id="atividade8">
        <form id="form_atividade8" @submit="checkForm">
            <label class="label-atividade08">
                Digite uma tarefa
                <input
                    type="text"
                    v-model="txtTarefaName"
                    placeholder="nome ou codigo da tarefa"
                    ref="input_tarefa" />
            </label>
            <div style="display: flex; flex-direction: column">
                <label class="label-atividade08"
                    >Alta Prioridade<input
                        v-model="prioridadeColor"
                        name="radio"
                        type="radio"
                        value="classRedPrioridade" />
                </label>
                <label class="label-atividade08"
                    >Baixa Prioridade<input
                        v-model="prioridadeColor"
                        name="radio"
                        type="radio"
                        value="classYellowPrioridade"
                        checked />
                </label>
            </div>
            <label class="label-atividade08">
                Ignorar Prioridade
                <input type="checkbox" v-model="checkSemPrioridade" />
            </label>
            <select v-model="daySelect">
                <option v-for="dia in daySemana" :key="dia">{{ dia }}</option>
            </select>
            <button>Salvar</button>
        </form>
        <div id="dados_form">
            <table id="tabela">
                <tr id="tr_cabecalho_table">
                    <td v-for="diaTable in daySemana" :key="diaTable">
                        {{ diaTable }}
                    </td>
                </tr>
                <tr v-for="tarefa in arrayTarefas" :key="tarefa">
                    <td
                        v-if="tarefa.daySemana == 'Segunda'"
                        :class="tarefa.prioridadeTarefaColor">
                        {{ tarefa.nomeTarefa }}
                    </td>
                    <td v-else>*</td>
                    <td
                        v-if="tarefa.daySemana == 'Terça'"
                        :class="tarefa.prioridadeTarefaColor">
                        {{ tarefa.nomeTarefa }}
                    </td>
                    <td v-else>*</td>
                    <td
                        v-if="tarefa.daySemana == 'Quarta'"
                        :class="tarefa.prioridadeTarefaColor">
                        {{ tarefa.nomeTarefa }}
                    </td>
                    <td v-else>*</td>
                    <td
                        class="td_vazio_table"
                        v-if="tarefa.daySemana == 'Quinta'"
                        :class="tarefa.prioridadeTarefaColor">
                        {{ tarefa.nomeTarefa }}
                    </td>
                    <td v-else>*</td>
                    <td
                        v-if="tarefa.daySemana == 'Sexta'"
                        :class="tarefa.prioridadeTarefaColor">
                        {{ tarefa.nomeTarefa }}
                    </td>
                    <td v-else>*</td>
                    <td
                        v-if="tarefa.daySemana == 'Sabado'"
                        :class="tarefa.prioridadeTarefaColor">
                        {{ tarefa.nomeTarefa }}
                    </td>
                    <td v-else>*</td>
                    <td
                        v-if="tarefa.daySemana == 'Domingo'"
                        :class="tarefa.prioridadeTarefaColor">
                        {{ tarefa.nomeTarefa }}
                    </td>
                    <td v-else>*</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            arrayTarefas: [],
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
            checkSemPrioridade: null,
            daySelect: null,
            prioridadeColor: "classYellowPrioridade",
        };
    },
    methods: {
        checkForm(form) {
            form.preventDefault();
            let auxTarefa = {
                nomeTarefa: this.txtTarefaName,
                prioridadeTarefaColor: this.prioridadeColor,
                daySemana: this.daySelect,
            };
            if (this.checkSemPrioridade) {
                auxTarefa.prioridadeTarefaColor = "classGreenPrioridade";
            }
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
#form_atividade8 {
    display: flex;
    flex-direction: column;
    width: min-content;
    min-height: 30vh;
    height: auto;
    justify-content: space-evenly;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 10 10 50 #ccd;
}

#form_atividade8 {
    width: max-content;
}

#form_atividade8 button {
    width: 100%;
    margin-top: 5px;
    margin-left: 0;
}

#dados_form {
    width: 60vw;
    height: 30vh;
    padding: 20px;
    background-color: #bbb;
    border-radius: 10px;
    overflow-x: auto;
}
#atividade8 {
    padding: 20px;
    width: calc(100vw - 70px);
    background-color: #aaa;
    border-radius: 10px;
    display: flex;
    justify-content: space-evenly;
}

.label-atividade08 {
    text-align: center;
}

#tabela {
    width: 100%;
    gap: 0;
}

#tr_cabecalho_table {
    background-color: rgb(114, 114, 114);
    color: rgb(0, 0, 0);
}

#tabela td {
    border: 1px solid rgb(69, 54, 78);
    padding: 5px;
    text-align: center;
}

.classRedPrioridade {
    background-color: rgb(199, 17, 17);
}
.classYellowPrioridade {
    background-color: rgb(187, 199, 17);
}
.classGreenPrioridade {
    background-color: rgb(0, 218, 0);
}

.td_vazio_table {
    text-align: center;
}
</style>
