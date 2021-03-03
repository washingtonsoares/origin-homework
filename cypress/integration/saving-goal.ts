context('Saving goal page', () => {
  beforeEach(() => {
    const now = new Date(2021, 5, 1).getTime();
    cy.clock(now);

    cy.visit('/');
  });

  it('Should simulate a saving goal', () => {
    cy.findByLabelText('Total amount').type('25000');

    cy.findByTestId('month-picker').focus();
    cy.findByTestId('month-picker').type('{rightArrow}');
    cy.findByTestId('month-picker').type('{rightArrow}');
    cy.findByTestId('month-picker').type('{leftArrow}');

    cy.findByText('Buy a house').should('exist');
    cy.findByText('Saving goal').should('exist');
    cy.findAllByDisplayValue('25,000').should('exist');
    cy.findByText('August').should('exist');
    cy.findByText('2021').should('exist');
    cy.findByText('$12,500').should('exist');

    cy.findByTestId('goal-simulation-details')
      .contains(
        "You're planning 2 monthly deposits to reach your $25,000 goal by August 2021."
      )
      .should('exist');
  });
});
