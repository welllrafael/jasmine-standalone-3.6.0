var meuMatcher = {
    toBeValidEmail : function() {
        var emailRegex = /\S+@\S+\.\S/;
        return {
            compare: function(actual, expected) {
                var result = {};
                if (expected === undefined)
                    result.pass = emailRegex.test(actual);
                else 
                    result.pass = expected.test(expected);

                if (result.pass) 
                    result.message = actual + " e um email valido";
                else
                    result.message = actual + " nao e um email valido"

                return result
            }
        }
    }
};

describe("Testes do objeto jasmine.addMatchers", function() {

    beforeEach(function() {
        jasmine.addMatchers(meuMatcher);
    });

    it("Deve verificar se um email e valido", function() {
        expect("email@dominio.com").toBeValidEmail();
        expect("email@.com").not.toBeValidEmail();
    });

});