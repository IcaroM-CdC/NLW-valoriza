/*
    ADICIONANDO O CAMPO user_id NO CORPO DA REQUIÇÃO, ALTERANDO A TIPAGEM DO EXPRESS

    CASO FOR ADICIONAR UM NOVO TIPO COMO ESTE, ALTERAR O DOCUMENTO tsconfig.json NO CAMPO typeRoots
    E ADICIONAR O CAMINHO PARA ESTE AQUIVO
*/


declare namespace Express {
    export interface Request {
        user_id: string
    }
}