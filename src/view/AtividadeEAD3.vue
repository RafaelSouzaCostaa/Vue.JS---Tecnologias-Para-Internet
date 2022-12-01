<template>
    <div id="atividade_EAD_2">
        <h5>Vue.js</h5>
        <p>
            Vue.js e um projeto open source ou seja e mantido por uma comunidade
            e voluntarios espalhados pelo mundo. Em 2014 Evan You inicia-se a
            criação de um projeto paralelo pessoal, dando origem ao grande
            VUE.JS. Hoje Evan atua como lider desse grande projeto, que e
            financeiramente mantido desde de 2016, por meio de patrocinadores.
            <a
                href="https://www.youtube.com/watch?v=OrxmtDw4pVI&ab_channel=Honeypot"
                target="_blank"
                >(DOCUMENTARIO)</a
            ><br /><br />
            Vue.js e um framework javascript/typescript utilizado para construir
            interfaces de usuário, sendo um dos mais usados atualmente, baseado
            em HTML, CSS e Javascript, fornecendo um modelo de programação
            declarativa, onde melhora o desenvolvimento de intefaces de
            usuarios. Utilizado em produção por grandes nomes, como: Wikimedia
            Foundation, NASA, Apple, Google, Microsoft, GitLab, Zoom, Tencent,
            Weibo, Bilibili, Kuaishou e muitos outras empresas.<br /><br />
            Um exemplo da sua estrutura basica: <br /><br />
        </p>
        <pre>
            <p>A estrutura e dividia em três partes: <br /><br />
            #Template: Onde cria-se o codigo HTML<br />
            #Script: Onde cria-se a logica da pagina, ou seja JS/TS <br />
            #Style: Onde cria-se o estilo da pagina
            </p>
            <img src="../assets/img/html_vue.png" alt="html_vue">
        </pre>

        <p>
            O Vue possui algumas particularidades ao manipular o DOM,
            utilizando-se as DIRETIVAS, ou seja, um conjunto de regras pre
            definidas que facilita a manipulação de forma bastante facilitada.
        </p>
        <h6>Diretivas</h6>

        São usadas para manipular o DOM, ou seja e utilizada dentro das tags "templates" como mostrado na images acima;
        <p>
            <pre>
                <p>
                    #v-model: e responsavel por realizar o link de uma variavel ao input por exemplo;
                    ao preencher o input ele já salva o valor na variavel corespondente 
                    ex:. v-model="variavel"

                    #v-on: e responsavel por realizar uma ação de submit de form, click entre outras
                    ex:. v-on:click="função" ou apenas coloque @click="função" @submit="função"

                    #v-for: e responsavel por realizar loop, por exemplo para percorrer um array
                    ex:. v-for="item in listItens" :key="item"
                         { {item} } //aqui estou usando o valor no HTML no local correspondente;
                </p>
            </pre>
        </p>
         <h6>Definições e parametros de Script Vue</h6>

        São usados para dar vida a screen, e onde  fica toda a logica da tela e os tratamentos de dados, como a modificação do estado da aplicação
        <p>
            <pre>
                <p>
                    + Abaixo definimos a 'data()', onde fica nossas variaveis, que faz parte da nossa screen ou componente.

                    data() {
                        return {
                            variavel1: 0,
                            variavel2: null,
                            variavel10: []
                        }
                    }

                    + Abaixo estamos utilizando o 'methods', onde fica todos os metodos que será utilizado na screen/componente;
                            obs: lembrando que dentro de 'methods' não ira funcionar metodos independent, como setInteval();

                    methods: {
                        meuMethod() {
                            this.variavel1++;
                        }
                    }

                    + Abaixo estamos utilizando o 'created()', onde podemos executar alguma tarefa apos a screen/componente for 
                    totalmente criado;

                    created() {
                        meuMethod(); //Chamando meu metodo assim que foi criado a screen/componente; 
                    } 

                    + Abaixo estamos utilizando o 'watch', onde podemos obsevarar uma variavel e realizar tarefas quando o seu valor alterar;

                    watch: {
                        variavel1: function(newValue, oldValue) { //Repare que estamos usando o nome da variavel a ser observada;
                                //Com os parametros acima conseguimos usar o valor novo e o antigo valor;
                            this.variavel2 = this.variavel1;
                        }
                    }

                    + Abaixo estamos utilizando o 'computed', onde podemos gerar valores apartir de outros valores;
                    por exemplo: tenho uma lista de compras, computed vai observar essa lista, parecido com o watch,
                    porem quando essa lista sofrer alteração eu posso executar uma tarefa dentro de computed que vai
                    retornar um valor, por exemplo return lista.length, assim toda vez que a lista for alterada o 
                    computed vai retornar a quantidade de itens da lista; veja um exemplo pratico:

                    computed: {
                        lengthVariavel10() {
                                //veja que estou referenciando a variavel10 que esta em data e pegando seu length;
                            return this.variavel10.length; 
                        },
                    }

                    Como mostrado acima, a cada vez que a variavel10 sofrer alteração ele vai buscar o length e retornar,
                    nesse momento eu consigo utilizar o nome dado a função como se fosse uma variavel de data;
                    ex:. 
                        { { lengthVariavel10 } } 

                            //toda vez que o valor da variavel10 mudar ele vai refletir o retorno nesse metodo como uma variavel;
                            //Isso e incrivel, N possibilidade de implementar ideias; 

                    + Abaixo estamos utilizando o 'emit', onde podemos declarar eventos personalizados para nossos componentes,
                    semelhante ao props, porém o emits faz com que o component pai possa ouvir evento dos filhos; Ou seja se tem
                    um componente de botão, ao clicar eu consigo disparar eventos no seu componente pai;
                    codigo de ex:. 

                    Componente FILHO
                    <img src="../assets/img/emit_filho.png" alt="emit_vue"> 

                    Etapas marcadas por setas coloridas no codigo: 
                        
                        -- Amarela: E realizado um evento de click ao precionar a imagem, chamando o metodo deletarRows passando a
                        o index da linha para o metodo de deletar, assim sendo possivel apagar o componente da TELA.

                        -- Vermelha: E o metodo que recebe o valor do index da linha, vindo do click, assim ele deleta da tela a linha;
                        
                        -- Verde: Ele emit um evento chamando deletar-row, assim seu componente pai poderar perceber esse evento e trata-lo;

                        --Rosa: A segunda propriedade e o valor que será retornado para seu pai, ou seja, ao emitir o evento ele tbm retorna
                        o index da linha, permitindo então seu pai a deletar o item da lista principal; 



                    Componente PAI
                    <img src="../assets/img/emit_pai.png" alt="emit_vue"> 
                    
                    Etapas marcadas por setas coloridas no codigo:

                        -- Amarela: Assintura do Vue, que possibilita reconhecer o evento emitido pelo filho, ou seja, quando o filho emitir
                        o evento ele vai disparar aqui, como se fosse um @click="função";

                        -- Vermelha: Esse e um metodo implementado no pai, ta o mesmo nome do metodo filho, porem poderia ser outro nome, e
                        apenas o metodo que sera dispadado quando o evento do filho for emitido, perceba que index e um parametro que recebe
                        o valor que retornei do filho. ( Seta Rosa da imagem do Componente Filho )

                        -- Branca: Lista de dados que foi renderizado em cada componente filho, cada linha da lista foi criado uma Row que
                        quando apagada terá que refletir nessa lista, por isso o grande emit e tão precioso, evita ter que implementar gerencia
                        de estado em coisas simples;

                        -- Verde: Metrodo que recebe o index retornado pelo evento filho, assim posso deletar o item da minha lista principal;
                </p>
            </pre>
        </p>
    </div>
</template>

<script>
export default {};
</script>

<style>
#atividade_EAD_2 {
    width: 90vw;
    height: auto;
    min-height: 20vh;

    border: 1px solid #ccc;
    margin: 10px;
    padding: 10px;
}

#atividade_EAD_2 p {
    text-align: justify;
}
</style>
