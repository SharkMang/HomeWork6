window.onload = function(){
    let divResult = document.querySelector('div');
    let result = document.querySelectorAll('p.phrase');
    
    for(let i = 0; i < result.length; i++){
        let label = document.createElement('LABEL');
        label.innerHTML = result[i].innerHTML + '<br>';
        divResult.appendChild(label);
    }
    
}