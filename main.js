const cadastroProdutos = require('./cadastro_produtos')

try{ 
    cadastroProdutos.inserir({
        nome: "arroz", 
        preco: 5
    })
    console.log("Cadastrado com sucesso!");
} 
catch (err) {
    console.log("Ocorreu um erro!");
    console.log(err);
}

try {
    cadastroProdutos.inserir({
        nome: "feijao", 
        preco: 8
    })
    console.log("Cadastrado com sucesso!");
} 
catch (err) {
    console.log("Ocorreu um erro!");
    console.log(err);
    console.log("Cadastrado com sucesso!");
}
try{
    cadastroProdutos.inserir()
} 
catch (err) {
    console.log("Ocorreu um erro!");
    console.log(err);
}
try {
    cadastroProdutos.inserir({
        nome: "sal", 
        preco: 2
    })
    console.log("Cadastrado com sucesso!");
} 
catch (err) {
    console.log("Ocorreu um erro!");
    console.log(err);
}


console.log("Produtos:", cadastroProdutos.listar())

console.log("Buscar Por Id(2): ", 
    cadastroProdutos.buscarPorId(2));
console.log("Buscar Por Id(3): ", 
    cadastroProdutos.buscarPorId(3));

console.log("Buscar Por Id(6): ", 
    cadastroProdutos.buscarPorId(6));

cadastroProdutos.atualizar(1, {nome:"arroz", preco:4.5});
cadastroProdutos.deletar(3);

console.log("Produtos:", cadastroProdutos.listar());
