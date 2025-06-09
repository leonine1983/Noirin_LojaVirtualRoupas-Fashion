import axios from "axios";

/** POR QUE USAR O AXIOS
 * 
 *  Estou usando o axios para facilitar o processo de manutenção do webapp,
 * evitando que sempre que o domínio da plataforma mudar, não ser necessário 
 * alterar diversas partes do codigo, dessa forma ao inves de alterar linha por linha,
 * só é necessário alterar conteúdo da variável baseURL para o novo domínio. * 
 */

export const API = axios.create(
    {
        baseURL: 'https://fakestoreapi.com'
    }
)