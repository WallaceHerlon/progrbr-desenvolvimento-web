var ulr = {
    rates:{
        BRL:"5.50"
    },
    date:"2022-11-17",
    base:"USD"};

function converter() {
    let input = document.getElementById("valor");
    let valor = input.value;
    console.log(valor);

    fetch(url)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data)
            let rate = data.rates.BRL;

            let resultado = `${valor} dolares = ${rate * valor} em reais`;
            document.getElementById("resultado").innerHTML = resultado;
        })
}

