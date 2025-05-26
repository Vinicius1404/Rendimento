function calcularRendimento() {
    const ValorRendimento = parseFloat(document.getElementById("rendimento").value);

    if (ValorRendimento > 0) {
        const despesasFixa = ValorRendimento * (50 / 100);
        const despesasVariadas = ValorRendimento * (30 / 100);
        const investimento = ValorRendimento * (20 / 100);

        document.getElementById("resultadoFinanceiro").style.display = "block";
        document.getElementById("resultadoDespesasFixas").innerText = `R$ ${despesasFixa.toFixed(2)}`;
        document.getElementById("resultadoDespesasVariaveis").innerText = `R$ ${despesasVariadas.toFixed(2)}`;
        document.getElementById("resultadoInvestimento").innerText = `R$ ${investimento.toFixed(2)}`;
    } else {
        alert("É necessário informar um valor acima de 0!!!")

    }
}








