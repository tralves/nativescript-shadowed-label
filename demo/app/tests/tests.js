var ShadowedLabel = require("nativescript-shadowed-label").ShadowedLabel;
var shadowedLabel = new ShadowedLabel();

describe("greet function", function() {
    it("exists", function() {
        expect(shadowedLabel.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(shadowedLabel.greet()).toEqual("Hello, NS");
    });
});