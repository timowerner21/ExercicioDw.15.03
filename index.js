
    function desconto(valorVenda, convenio, cartaoDaLoja){
        if(cartaoDaLoja && convenio){
            console.log('voce possui um desconto de 15%')
            valorVenda = valorVenda - (valorVenda * 0.15);
            return valorVenda;
            
        }else if(CartaoDaLoja || convenio){
            valorVenda = valorVenda - (valorVenda * 0.10);
            return valorVenda
        }else {
            console.log('Voce não possui desconto')
            return
        }


        const vai = desconto(50, true, true)
        console.log(vai)
