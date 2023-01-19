const controles = document.querySelectorAll(".controle-parte");
const estatisticas = document.querySelectorAll("[data-estatistica]");
console.log(estatisticas);

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controles.forEach(elemento => {
    const input = elemento.querySelector(".controle-contador");
    const soma = elemento.querySelector("#somar").addEventListener("click", (evento)=>
    {
        manipulaDados("somar",input);
        atualizaEstatisticas(evento.target.dataset.peca);
    });
    const subtrai = elemento.querySelector("#subtrair").addEventListener("click", (evento)=>
    {
        if (input.value >0 ){
        manipulaDados("subtrair",input);
        atualizaEstatisticas(evento.target.dataset.peca);
        }
    });
  

});


function manipulaDados(operacao, mostrador)
{
    if (operacao == "subtrair")
    {        
        mostrador.value = parseInt(mostrador.value) -1;
    }
    if (operacao == "somar")
    {
        mostrador.value = parseInt(mostrador.value) +1;
    }
}

function atualizaEstatisticas(peca){

estatisticas.forEach((elemento) =>
{
elemento.textContent = parseInt(elemento.textContent) + parseInt(pecas[peca][elemento.dataset.estatistica]);
})

}


    
