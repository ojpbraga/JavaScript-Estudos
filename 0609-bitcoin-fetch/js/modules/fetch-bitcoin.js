export default function initFetchBitcoin() {
    async function fetchBitcoin() {
        try {
            const bitcoinResponse = await fetch('https://blockchain.info/ticker');
            const bitcoinJSON = await bitcoinResponse.json();
            
            brlBitcoin(bitcoinJSON);
        } catch(erro) {
            console.log(erro);
        }
    }

    function brlBitcoin(bitcoins) {
        //              Valor
        const brlPreco = (100 / bitcoins.BRL.sell).toFixed(4);
        const btcShow = document.querySelector('.btc-preco');
        btcShow.innerHTML = brlPreco;
    }

    fetchBitcoin()
}