describe("Testes do objeto spy", function() {
    var Calculadora = {
        somar: function(n1, n2) {
            return n1 + n2;
        },
        subtrair: function(n1, n2) {
            return n1 - n2;
        }
    };

    beforeAll(function() {
        // spyOn(Calculadora, "somar");
        spyOn(Calculadora, "somar").and.returnValue(10);
        // spyOn(Calculadora, "somar").and.callThrough();
        // spyOn(Calculadora, "somar").and.returnValues(1,5);
        // spyOn(Calculadora, "somar").and.callFake(function(n1, n2) {
        //     return n1 - n2;
        // });
        // spyOn(Calculadora, "somar").and.throwError("erro");
        // spyOn(Calculadora, "subtrair");
    });

    it("deve demonstrar o uso do calls.reset", function() {
        Calculadora.somar(1,1);
        Calculadora.somar(2,2);

        expect(Calculadora.somar.calls.any()).toBeTruthy();
        Calculadora.somar.calls.reset();
        expect(Calculadora.somar.calls.any()).toBeFalsy();
    });

    // it("deve demonstrar o uso do calls.first", function() {
    //     Calculadora.somar(1,1);
    //     Calculadora.somar(2,2);
    //     var retorno = Calculadora.somar.calls.first();

    //     expect(retorno.object).toEqual(Calculadora);
    //     expect(retorno.args).toEqual([1,1]);
    //     expect(retorno.returnValue).toEqual(10);
        
    // });

    // it("deve demonstrar o uso do calls.mostRecent", function() {
    //     Calculadora.somar(1,1);
    //     Calculadora.somar(2,2);
    //     var retorno = Calculadora.somar.calls.mostRecent();

    //     expect(retorno.object).toEqual(Calculadora);
    //     expect(retorno.args).toEqual([2,2]);
    //     expect(retorno.returnValue).toEqual(10);
        
    // });

    // it("deve demonstrar o uso do calls", function() {
    //     Calculadora.somar(1,1);
    //     Calculadora.somar(2,2);
    //     var retorno = Calculadora.somar.calls.all()
        
    //     expect(retorno[1].object).toEqual(Calculadora);
    //     expect(retorno[1].args).toEqual([2,2]);
    //     expect(retorno[1].returnValue).toEqual(10);
    // });

    // it("deve demonstrar o uso do calls.allArgs", function() {
    //     Calculadora.somar(1,1);
    //     Calculadora.somar(2,2);
    //     expect(Calculadora.somar.calls.allArgs()).toEqual([[1,1],[2,2]]);
    // });

    // it("deve demonstrar o uso do calls.argsFor", function() {
    //     Calculadora.somar(1,1);
    //     Calculadora.somar(2,2);
    //     expect(Calculadora.somar.calls.argsFor(0)).toEqual([1,1]);
    //     expect(Calculadora.somar.calls.argsFor(1)).toEqual([2,2]);
    // });

    // it("deve demonstrar o uso do calls.count", function() {
    //     Calculadora.somar(1,1);
    //     Calculadora.somar(2,2);
    //     expect(Calculadora.somar.calls.count()).toEqual(2);
    // });

    // it("deve lancar um erro ao somar", function() {
    //     Calculadora.somar(1,1);
    //     expect(Calculadora.somar.calls.any()).toBeTruthy();
    // });

    // it("deve lancar um erro ao somar", function() {
    //     expect(function() { Calculadora.somar(1,1)})
    //         .toThrowError("erro");
    // });

    // it("deve transformar o metodo somar em substracao",function() {
    //     expect(Calculadora.somar(5,2)).toEqual(3);
    // });

    // it("deve retornar vals dstntos para o método somar", function() {
    //     expect(Calculadora.somar(1, 1)).toEqual(1);
    //     expect(Calculadora.somar(1, 1)).toEqual(5);
    // });

    // it("deve retornar 10 para o metodo somar", function() {
    //     expect(Calculadora.somar(1, 1)).toEqual(10);
    // });

    // it("deve executar o metodo somar original", function() {
    //     expect(Calculadora.somar(1, 1)).toEqual(2);
    //     expect(Calculadora.subtrair(1, 1)).toBeUndefined();
    // });

    // it("Deve possuir o metodo somar como nao definido", function() {
    //     expect(Calculadora.somar(1,1)).toBeUndefined();
    // });

    // it("Deve chamar o metodo somar ao menos uma vez", function() {
    //     expect(Calculadora.somar).not.toHaveBeenCalled();
    //     Calculadora.somar(1,1);
    //     expect(Calculadora.somar).toHaveBeenCalled();
    // });

    // it("Deve chamar o metodo somar com os parametros validos", function() {
    //     Calculadora.somar(1,1);
    //     Calculadora.somar(1,2);
    //     expect(Calculadora.somar).toHaveBeenCalledWith(1,1);
    //     expect(Calculadora.somar).toHaveBeenCalledWith(1,2);
    // });
});