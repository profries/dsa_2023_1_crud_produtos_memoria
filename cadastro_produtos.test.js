const cadastro = require('./cadastro_produtos')

let listaInicialEsperada = [
    {id:1, nome:"Produto 1", preco:10},
    {id:2, nome:"Produto 2", preco:20},
    {id:3, nome:"Produto 3", preco:30},
]

let listaInseridoEsperado = [
    {id:1, nome:"Produto 1", preco:10},
    {id:2, nome:"Produto 2", preco:20},
    {id:3, nome:"Produto 3", preco:30},
    {id:4, nome:"Produto 4", preco:40},
]

let listaAtualizadaEsperada = [
    {id:1, nome:"Produto X", preco:100},
    {id:2, nome:"Produto 2", preco:20},
    {id:3, nome:"Produto 3", preco:30},
]

let listaDeletadoEsperado = [
    {id:2, nome:"Produto 2", preco:20},
    {id:3, nome:"Produto 3", preco:30},
]

beforeEach(() => {
    cadastro.limpar();
    cadastro.inserir({nome:"Produto 1", preco:10});
    cadastro.inserir({nome:"Produto 2", preco:20});
    cadastro.inserir({nome:"Produto 3", preco:30});
});

/*test('Listar Produtos sem cadastrar deve retornar vazio', () => {
    expect(cadastro.listar()).toEqual([]);
    expect(cadastro.listar().length).toBe(0);
})*/

//Cenario de Sucesso!
test("Listar Produtos retorna a lista inicial esperada",
    function() {
        expect(cadastro.listar())
            .toEqual(listaInicialEsperada)
    }
)

//Cenario de Sucesso!
test ('Buscar Por Id 2 deve retornar Produto 2',
    function() {
        let produto2 = {
            id:2, 
            nome:"Produto 2", 
            preco:20
        };

        expect(cadastro.buscarPorId(2))
            .toEqual(produto2);
    }
)

//Cenario de Insucesso - Não existe produto 6!
test ('Buscar Por Id 6 deve gerar exceção id nao encontrado',
    function() {
        const errIdNaoEncontrado = new Error({
            numero: 404,
            msg: "Erro: Produto nao encontrado."
        });
        expect(() => cadastro.buscarPorId(6))
            .toThrow(errIdNaoEncontrado);
    }
)

// Cenario de sucesso - inserir produto 4
test ('Inserir produto 4 deve retornar produto cadastrado com id=4 e deve trabalhar na lista corretamente',
    function(){
        const produto4 = {nome: "Produto 4", preco: 40};
        const produtoEsperado = {id:4, nome:"Produto 4", preco: 40};

        expect(cadastro.inserir(produto4))
            .toEqual(produtoEsperado);
        
        expect(cadastro.listar())
            .toEqual(listaInseridoEsperado);
    })

// Cenario de erro - inserir produto 4 sem nome
test ('Inserir produto sem nome deve lançar o erro',
    function() {
        const produtoSemNome = {preco: 40};        
        const erroEsperado = new Error({
            numero: 400,
            msg: "Erro: Os parametros de produto estao invalidos"
        });

        expect(() => cadastro.inserir(produtoSemNome))
            .toThrow(erroEsperado);

    });


//Cenário de Sucesso
test ('Alterar Produto com id 1 para nome "Produto X" e preco 100 deve atualizar na lista',
    function() {
        const produtoAtualizadoEsperado = {id:1, nome:"Produto X", preco:100};
        const produtoAtualizar = {nome:"Produto X", preco:100};
        const idAtualizar = 1;

        expect(cadastro.atualizar(idAtualizar, produtoAtualizar))
            .toEqual(produtoAtualizadoEsperado);

        expect(cadastro.listar())
            .toEqual(listaAtualizadaEsperada);

    }
)

//Cenario de Insucesso - Não existe produto 6!
test ('Atualizar o produto com Id 6 deve gerar exceção id nao encontrado',
    function() {
        const produtoAtualizar = {
            nome:"Produto 6", 
            preco:600
        };
        const errIdNaoEncontrado = new Error({
            numero: 404,
            msg: "Erro: Produto nao encontrado."
        });
        expect(() => cadastro.atualizar(6, produtoAtualizar))
            .toThrow(errIdNaoEncontrado);
    }
)

//Cenário de Sucesso
test ('Deletar o produto com id 1 deve remover tal produto da lista',
    function() {
        const produto1 = {id:1, nome:"Produto 1", preco: 10};

        expect(cadastro.deletar(1))
            .toEqual(produto1);

        expect(cadastro.listar())
            .toEqual(listaDeletadoEsperado);
    }
)

//Cenario de Insucesso - Não existe produto 6!
test ('Deletar o produto com Id 6 deve gerar exceção id nao encontrado',
    function() {
        const errIdNaoEncontrado = new Error({
            numero: 404,
            msg: "Erro: Produto nao encontrado."
        });
        expect(() => cadastro.deletar(6))
            .toThrow(errIdNaoEncontrado);
    }
)
