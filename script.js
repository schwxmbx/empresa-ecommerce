document.getElementById("buscarDados").addEventListener("click", function () {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let resposta = JSON.parse(xhr.responseText);
            exibirDados(resposta);
        }
    };
    
    xhr.send();
});

function exibirDados(dados) {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    dados.slice(0, 5).forEach(item => {
        let p = document.createElement("p");
        p.textContent = `ID: ${item.id} - ${item.title}`;
        resultado.appendChild(p);
    });
}
