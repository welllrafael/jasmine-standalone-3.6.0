describe("Suite externa",function() {
    var contadorExterno = 0;

    beforeEach(function() {
        contadorExterno++;
    });

    it("deve conter 1 para o contadorExterno", function() {
        expect(contadorExterno).toBe(1);
        pending("implementar...");
    })

    describe("Suite interna", function() {
        var contadorInterno = 0;

        beforeEach(function() {
            contadorInterno++;
        });
    
        xit("deve conter 1 para o contadorExterno", function() {
            expect(contadorInterno).toBe(1);
            expect(contadorExterno).toBe(2);
        })
    });
});