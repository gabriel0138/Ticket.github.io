// redeem.js
function start() {
    window.location.href = "vales.html";
}

function redeem(type) {
    switch (type) {
        case 'beijo':
            window.location.href = "ticket beijo.html"; // Redireciona para a página de resgate do Vale Beijo
            break;
        case 'pescoço':
            window.location.href = "ticket pescoço.html"; // Redireciona para a página de resgate do Vale Testa
            break;
        case 'testa':
            window.location.href = "ticket testa.html";
            break;
        case 'bochecha':
            window.location.href = "ticket bochecha.html";
            break;
        case 'apaixonado':
            window.location.href = "ticket apaixonado.html";
            break;
        default:
            // Se o tipo não corresponder a nenhum caso, redirecione para uma página padrão ou exiba uma mensagem de erro
            window.location.href = "pagina_default.html";
            break;
    }
}
function selectTicket(ticketElement) {
    ticketElement.style.boxShadow = generateAuroraBorealis();
}

function generateAuroraBorealis() {
    var colors = [];
    for (var i = 0; i < 5; i++) {
        colors.push(getRandomColor());
    }
    return "0 0 10px " + colors.join(", ");
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

