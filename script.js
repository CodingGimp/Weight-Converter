document.getElementById('output').style.visibility = 'hidden';

document.querySelector('#lbs-input').addEventListener('input', conversion)

function conversion(e) {
    let pounds = e.target.value;  

    document.getElementById('output').style.visibility = 'visible';
    document.getElementById('gramsOutput').innerHTML = pounds/0.0022046;
    document.getElementById('kgOutput').innerHTML = pounds/2.2046;
    document.getElementById('ouncesOutput').innerHTML = pounds * 16;      
}

