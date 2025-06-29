function capturarCarta(){

    const comissao = {
      1: {leve: 0.0022, pesada: 0.0012},
      2: {leve: 0.0012, pesada: 0.0008},
      3: {leve: 0.0012, pesada: 0.0010},
      4: {leve: 0.0012, pesada: 0.0012},
      5: {leve: 0.0011, pesada: 0.0012},
      6: {leve: 0.0011, pesada: 0.0014},
    }

    const tipos = ['leve', 'pesada'];

    const parc = {};
    const soma = {};

    tipos.forEach(tipo => {
      const valores = Array.from(document.getElementsByClassName(`parcela${tipo}`))
        .map(input => +input.value.replace(/\./g, ''));

      parc[tipo[0]] = valores.map((v, i) => v * comissao[i + 1][tipo]);

      soma[tipo[0]] = parc[tipo[0]].reduce((a, b) => a + b, 0);
    });

    document.querySelector(".total").innerHTML = `
      <div class="liberado"><p><big>Total: <strong>${brl(soma.l)}</strong></big></p></div>
      <ul id="listaParcelas"></ul>
    `;
    document.getElementById('listaParcelas').innerHTML = parc.l.map((p, i) => `
      <li>
        <span>Parcela: ${i+1|| "N/A"} - Valor: ${brl(p)}</span>
      </li>
    `).join('');

    document.querySelector(".total2").innerHTML = `
      <div class="liberado"><p><big>Total: <strong>${brl(soma.p)}</strong></big></p></div>
      <ul id="listaParcelas"></ul>
    `;
    document.getElementById('listaParcelas2').innerHTML = parc.p.map((p, i) => `
      <li>
        <span>Parcela: ${i+1|| "N/A"} - Valor: ${brl(p)}</span>
      </li>
    `).join('');
}

function brl(float) {
   return float.toLocaleString('pt-br',{style: 'currency', currency: 'brl'});
}
window.addEventListener('input', capturarCarta);
window.addEventListener('DOMContentLoaded', capturarCarta);

document.querySelectorAll('.parcelaleve, .parcelapesada').forEach(input => {
  input.addEventListener('input', () => {
    let valor = input.value.replace(/\D/g, '');
    valor = valor.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    input.value = valor;
  });
});
