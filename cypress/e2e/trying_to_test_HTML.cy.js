
describe("testing inside tag", () => {
    it("Class check", () => {

        cy.visit("https://postcard.qa.studio/").contains("Форма отправки открытки");

        cy.get(".email>h2").should("have.class", "requered");

        cy.get(".email>h2").should("have.attr", "class", "requered");

        cy.get(".photo-input__photo-plus").should("have.attr",
            "class", "photo-input__photo photo-input__photo-plus toHide");

        cy.get(".photo-input__photo-plus").should("have.attr", "class")
            .and("equal", "photo-input__photo photo-input__photo-plus toHide");
    });

    it('check all the atrr in one TAG', () => {
        cy.visit("https://postcard.qa.studio/").contains("Форма отправки открытки");



    });
})