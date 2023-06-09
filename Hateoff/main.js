'use strict';

const interval = setInterval(()=>{

    //pegar o texto
    const texto = 
    document.querySelector('div > article > div > div > div:nth-child(3) > div:nth-child(1)'
        )?.innerText.replace(/\n/g, '') || '';

    // selecionar conteiner
    const container = document.querySelector(
        'div > article > div > div > div:nth-child(3) > div:nth-child(1)')


    
    //exibir tweet no console
     if (texto)  { 
            const url = 'http://localhost:8989/analise?texto='+texto+' '
            fetch(url)
            .then((response) => response.json()).then((dados) => {

                
                console.log(dados.racista);
        
                let analisetweet = dados.racista

              
                //if do texto
                if (dados.racista == 0) {
                    analisetweet = "provavelmente não seja racista";
                } else {
                    analisetweet = "provavelmente seja racista";
                }
        
                // inserir no conteiner
                container.insertAdjacentHTML('beforebegin', 
                `   
                <ul class="mlext-container">
                    <li class="a">Esse tweet ${analisetweet}</li>
                </ul>
                `
                );
                
            })
       

        
        

clearInterval(interval)
}
},1000)
