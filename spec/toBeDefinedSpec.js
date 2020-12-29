describe("Teste do toBeDefined", function() {
    it("Deve demonstrar o uso do toBeDefined", function() {
        var n1 = 10;
        var n2;
        expect(n1).toBeDefined();
        expect(null).toBeDefined();
        expect(NaN).toBeDefined();
        expect(n2).not.toBeDefined();
        expect(undefined).not.toBeDefined();
    });
});