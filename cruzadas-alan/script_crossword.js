function verificarResposta() {
    let resposta = "'" + document.querySelector("input").value + "'";
    for (let node of document.querySelectorAll("td")) {
        if (node.className.indexOf(resposta) >= 0) {
            node.style = "color: black"
    }
    }
    document.querySelector("input").value = ''
    }


