describe('Visual regression tests', () => {
  it('Should match previous screenshot "about Page"', () => {
    // cy.visit('/#about')
    cy.visit('www.wp.pl')
    cy.screenshot()
    cy.matchImageSnapshot()

  })
})
