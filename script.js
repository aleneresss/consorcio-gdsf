function capturarCarta(){

    const comissao = {
      1: 0.0022,
      2: 0.0022,
      3: 0.0022,
      4: 0.0022,
      5: 0.0022,
      6: 0.0022
    }
    const inputs = document.getElementsByClassName('parcelacarta');
    const valores = Array.from(inputs).map(input => input.value);
    console.log(valores)
    
    const parc = valores.map((p, i) => p * comissao[i+1])
    const soma = parc.reduce(  (accumulator, currentValue) => accumulator + currentValue, 0,);
    const listaParcelas = document.getElementById('listaParcelas')

    
    document.querySelector(".total").innerHTML = `
      <div class="liberado"><p><big>Total Comissão: <strong>${brl(soma)}</strong></big></p></div>
      <ul id="listaParcelas"></ul>
    `;
    listaParcelas.innerHTML = parc.map((p, i) => `
      <li>
        <span>Parcela: ${i+1|| "N/A"} - Valor: ${brl(p)}</span>
      </li>
    `).join('');
}

function brl(float) {
        return float.toLocaleString('pt-br',{style: 'currency', currency: 'brl'});
}
