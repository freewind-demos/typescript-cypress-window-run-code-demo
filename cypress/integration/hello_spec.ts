describe('cypress', () => {

  it('can get window object and run code', () => {
    cy.window().then(win => {
      win.console.log('Hello, cypress!')
    })
  })

})
