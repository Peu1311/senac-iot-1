//Verificar o tamanho da tela para decidir o css

if(innerWidth <= 600){
    let x = window.document.querySelectorAll('.default');
    for(i=0; i < x.length; i++){
        x[i].classList.add('phone');
    }
}
else{
    let x = window.document.querySelectorAll('.default');
    for(i=0; i < x.length; i++){
        x[i].classList.add('desktop');
    }
}