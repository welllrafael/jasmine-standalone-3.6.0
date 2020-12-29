describe("Teste do toEqual", function() {
    it("Deve validar o uso do toEqual", function() {
        var obj1 = {valor: true, nome: '1'};
        var obj2 = {valor: true, nome: '1'};
        expect(true).toEqual(true);
        expect(obj1).toEqual(obj2);
    });
});