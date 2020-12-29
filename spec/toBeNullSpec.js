describe("Teste do toBeNull",function() {

    it("Deve demonstrar o uso do toBeNull", function() {
        let texto = "Jasmine";
        let texto2 = null;
    
        expect(texto).not.toBeNull();
        expect(texto2).toBeNull();
    });
});