describe('button', () => {
  it('accent', () => {
    // Screenshot a full page
    // cy.argosScreenshot('home');
    cy.mount(<button>Text</button>);

    // match element snapshot
    cy.get('button').matchImageSnapshot();
  });
});
