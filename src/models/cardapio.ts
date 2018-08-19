import { Produto } from './produto';
import { Categoria } from './categoria';
export interface Cardapio{
    categorias: Categoria[];
    produtos: Produto[];
}