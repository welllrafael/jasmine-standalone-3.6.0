xdescribe("Testes do objeto jasmine.createSpyObj",function() {
    var Calculadora;

    beforeAll(function() {
        Calculadora = jasmine.createSpyObj("Calculador",
                                        ["somar","subtrair"]);
        Calculadora.somar.and.returnValue(5);
    });

    it("Deve demonstrar o uso do jasmine.creaSpyObj", function() {
        var retorno = Calculadora.somar(1,2);

        expect(Calculadora.somar).toHaveBeenCalled();
        expect(Calculadora.somar).toHaveBeenCalledWith(1,2);
        expect(retorno).toEqual(5);
    });

});

xdescribe("Testes do objeto jasmine.objectContaining",function() {
    var carro;

    beforeAll(function() {
        carro = {
            'ano': 2017
        };
    });

    it("Deve demonstrar o uso do jasmine.objectContaining", function() {
        expect(carro).toEqual(jasmine.objectContaining({'ano' : 2017}));
        expect(carro).not.toEqual(jasmine.objectContaining(
            {'ano' : 2016}
        ));
    });

});

xdescribe("Testes do objeto jasmine.arrayContaining",function() {
    var numeros;

    beforeAll(function() {
        numeros = [1, 2, 3, 4, 5];
    });

    it("Deve demonstrar o uso do jasmine.arrayContaining", function() {
        expect(numeros).toEqual(jasmine.arrayContaining([3]));
        expect(numeros).toEqual(jasmine.arrayContaining([2,4]));
        expect(numeros).not.toEqual(jasmine.arrayContaining([6]));

    });

});

xdescribe("Testes do objeto jasmine.stringMatching",function() {
    var exibirTexto;

    beforeAll(function() {
        exibirTexto = jasmine.createSpy("exibiTexto");
    });

    it("Deve demonstrar o uso do jasmine.arrayContaining", function() {
        exibirTexto("Curso de Jasmine");
        expect(exibirTexto).toHaveBeenCalledWith(jasmine.stringMatching("Jasmine"));
        expect(exibirTexto).toHaveBeenCalledWith(jasmine.stringMatching(/jasmine/i));
    });

});

describe("Testes do objeto jasmine.clock",function() {

    beforeEach(function() {
        jasmine.clock().install();
    });

    afterEach(function() {
        jasmine.clock().uninstall();
    });

    var dobro;

    beforeAll(function() {
        dobro = jasmine.createSpy("dobro")
    });

    it("Deve demonstrar o uso do setTimeout", function() {
        setTimeout(function() {
            dobro(10);
        },
        1000);
        jasmine.clock().tick(1000);
        expect(dobro).toHaveBeenCalled();
    });

    it("Deve demonstrar o uso do setInterval", function() {
        setInterval(function() {
            dobro(2);
        },
        500);
        jasmine.clock().tick(500);
        expect(dobro).toHaveBeenCalled();
    });

});