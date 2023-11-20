
describe("testing inside tag", () => {
    it("Class check", () => {

        cy.visit("https://postcard.qa.studio/").contains("Форма отправки открытки");

        cy.get(".email>h2").should("have.class", "requered");

        cy.get(".email>h2").should("have.attr", "class", "requered");

        cy.get(".photo-input__photo-plus").should("have.attr",
            "class", "photo-input__photo photo-input__photo-plus toHide");

        cy.get(".photo-input__photo-plus").should("have.attr", "class")
            .and("equal", "photo-input__photo photo-input__photo-plus toHide");

        // cy.get("input[type='email']").type("nikolaenko.rus@mail.ru");
        // cy.get('.photo-input__photo-parent:last-child').click();
        // cy.get('#send').click();

        cy.get("[type='file']").should("be.not.visible");
        cy.get("[type='file']").selectFile("cypress/img/OIP.jpg", {force: true});
        cy.get("div.photo-input__photo-parent:last-child").click();
        cy.get(".modal>h3").should("not.be.visible");


    });
    it('check all the atrr in one TAG', () => {

        cy.visit("https://postcard.qa.studio/").contains("Форма отправки открытки");

        cy.get("input[type='email']").should("have.attr", "type", "email")
            .and("have.attr", "placeholder", "hello@qa.studio")
            .and("have.attr", "name", "email")
            .and("have.attr", "id", "email");
        
        cy.get("input[type='email']").type("nikolaenko.rus@mail.ru");
        cy.get("#send").contains("Отправить");
        cy.get("#send").click();

        cy.get(".requered.toHide.error").should("have.class", "requered toHide error")

    });
})