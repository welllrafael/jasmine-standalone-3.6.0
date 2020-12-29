xdescribe("Testes do objeto jasmine.createSpy",function() {
    var somar;

    beforeAll(function() {
        somar = jasmine.createSpy("somar");
    });

    it("Deve demonstrar o uso do jasmine.creaSpy", function() {
        somar(1,2);

        expect(somar).toHaveBeenCalled();
        expect(somar).toHaveBeenCalledWith(1,2);
    });

});

xdescribe("Testes do objeto jasmine.any",function() {
    var dobro;

    beforeAll(function() {
        dobro = jasmine.createSpy("dobroo");
    });

    it("Deve demonstrar o uso do jasmine.any", function() {
        dobro(10);
        expect(dobro).toHaveBeenCalledWith(jasmine.any(Number));
    });

});

describe("Testes do objeto jasmine.anything",function() {
    var dobro;

    beforeAll(function() {
        dobro = jasmine.createSpy("dobroo");
    });

    it("Deve demonstrar o uso do jasmine.anything", function() {
        dobro(10);
        expect(dobro).toHaveBeenCalledWith(jasmine.anything());
    });

});