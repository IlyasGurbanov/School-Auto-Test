describe('Login', () => {
    it('should log in with credentials', () => {
       cy.visit('https://dev.ltdo.xyz/auth/login');
       cy.get("#mat-input-0").type('emperio-farm@mail.ru');
       // поменять локаторы
       cy.get("#mat-input-1").type('Mk930#Ao_$IA');
       cy.get("button[type='submit']").click().wait(10000); 
       cy.get("do-sidebar-link:nth-child(3)")
       .click().wait(10000);
       cy.get("#mat-slide-toggle-1").click().wait(10000);
       cy.get('#mat-input-6').type('Дпт 9').type('{enter}');
   });
});