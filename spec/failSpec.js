describe("Teste do fail", function() {
    it("Deve demonstrar o uso do fail", function() {
        var operacao = function(executar, callback) {
            if (executar)
                callback()
        }

        operacao(false,function() {
            fail("nao deve executar funcao de callback");
        });
    });
});