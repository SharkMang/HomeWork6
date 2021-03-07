window.onload = function(){
    let divResult = document.querySelector('div');
    let result = document.querySelectorAll('A');
    
    for(let i = 0; i < result.length; i++){
        let label = document.createElement('LABEL');
        label.innerHTML = result[i].getAttribute('href') + '<br>';
        divResult.appendChild(label);
    }
    
}