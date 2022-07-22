const elis = {
    name: 'Elis',
    idade: 4,
    trabalho: 'Desenvolvedor'
}

enum Profissao {
    Desenvolvedor,
    Engenheiro,
    Pintor
}

type Pessoa = {
    name: string,
    idade: number,
    trabalho: Profissao
}

const Alceu: Pessoa = {
    name: 'Alceu',
    idade: 2,
    trabalho: Profissao.Pintor
}