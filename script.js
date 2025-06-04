function capturarCarta(){

    const comissao = {
      1: {leve: 0.0022, pesada: 0.0033},
      2: {leve: 0.0012, pesada: 0.0044},
      3: {leve: 0.0012, pesada: 0.0055},
      4: {leve: 0.0012, pesada: 0.0066},
      5: {leve: 0.0011, pesada: 0.0077},
      6: {leve: 0.0011, pesada: 0.0088},
    }
    
    const inputs = document.getElementsByClassName('parcelacarta');
    const valores = Array.from(inputs).map(input => input.value.replace(/\./g, ''));
    console.log(valores)
    
    const parc = document.getElementById('peso').value === 'leve'? 
    valores.map((p, i) => p * comissao[i+1].leve) :
    valores.map((p, i) => p * comissao[i+1].pesada);
    const soma = parc.reduce(  (accumulator, currentValue) => accumulator + currentValue, 0,);

    
    document.querySelector(".total").innerHTML = `
      <div class="liberado"><p><big>Total Comissão: <strong>${brl(soma)}</strong></big></p></div>
      <ul id="listaParcelas"></ul>
    `;
    document.getElementById('listaParcelas').innerHTML = parc.map((p, i) => `
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


const inputs = document.getElementsByClassName('parcelacarta');

document.querySelectorAll('.parcelacarta').forEach(input => {
  input.addEventListener('input', () => {
    let valor = input.value.replace(/\D/g, '');
    valor = valor.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    input.value = valor;
  });
});
