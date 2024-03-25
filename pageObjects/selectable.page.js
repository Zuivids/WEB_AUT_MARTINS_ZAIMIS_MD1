export class SelectablePage{
    static visit() {
        return cy.visit("https://demoqa.com/selectable");
    }

    static get gridOption(){
        return cy.get("#demo-tab-grid");
    }

    static get gridContainer(){
        return cy.get("#gridContainer");
    }
    
    static get validateSelectedButtons(){
        return cy.get("[class='list-group-item active list-group-item-action']");
    }

    static get validateNonSelectedButtons(){
        return cy.get("[class='list-group-item list-group-item-action']");
    }

}