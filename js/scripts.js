/**
 * Série de scripts que deixam varias coisas mais práticas
 */

/**
 * Economiza tempo... e troca a página
 * @param {string} nome 
 * @param {string} pasta 
 */
function irParaPagina(nome, pasta) {
    window.location.href = pasta + "/" + nome + ".html";
}