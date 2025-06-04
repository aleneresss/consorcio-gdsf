function capturarCarta(){

    const comissao = {
      1: {leve: 0.0022, pesada: 0.0033},
      2: {leve: 0.0022, pesada: 0.0033},
      3: {leve: 0.0022, pesada: 0.0033},
      4: {leve: 0.0022, pesada: 0.0033},
      5: {leve: 0.0022, pesada: 0.0033},
      6: {leve: 0.0022, pesada: 0.0033},
    }
    const inputs = document.getElementsByClassName('parcelacarta');
    const valores = Array.from(inputs).map(input => input.value);
    console.log(valores)
    
    const peso = document.getElementById('peso').value
    const parc = peso === 'leve'? valores.map((p, i) => p * comissao[i+1].leve) :valores.map((p, i) => p * comissao[i+1].pesada)
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
window.addEventListener('change', capturarCarta);
window.addEventListener('DOMContentLoaded', capturarCarta);
