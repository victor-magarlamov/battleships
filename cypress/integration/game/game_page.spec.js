context('Game Page', () => {
  function moveShip(row, shipIndex, cellIndex) {
    cy.get('.ship-list__row').eq(row).within(() => {
      cy.get('.ship--horizontal')
        .eq(shipIndex)
        .trigger('mousedown');
    });
    
    cy.getCellByIndex(cellIndex).click();
  }

  function setUserShips() {
    const submarinePositions = [0, 9, 90, 99];
    const destroyerPositions = [2, 6, 22];
    const cruiserPositions = [25, 42];
    const battleshipPosition = 72;
    
    submarinePositions.forEach((item, index) => {
      cy.moveShipToBoard(0, index, item);
    });
    
    destroyerPositions.forEach((item, index) => {
      cy.moveShipToBoard(1, index, item);
    });
    
    cruiserPositions.forEach((item, index) => {
      cy.moveShipToBoard(2, index, item);
    });
    
    cy.moveShipToBoard(3, 0, battleshipPosition);
  }

  before(() => {
    cy.visit('/');

    setUserShips();
    cy.contains('Battle!').click();
  });

  it('renders two boards', () => {
    cy.get('.board').should('have.length', 2);
  });

  it('renders users ships', () => {
    cy.get('.board').eq(0).within(() => {
      [0, 2, 3, 6, 7, 9, 22, 23, 25, 26, 27, 42, 43, 44, 72, 73, 74, 75, 90, 99].forEach(index => {
        cy.get('.cell').eq(index).should('have.class', 'cell--ship');
      });
    });
  });

  it('renders blank computer board', () => {
    cy.get('.board').eq(1).within(() => {
      cy.get('.cell--ship').should('have.length', 0);
      cy.get('.cell--inactive').should('have.length', 0);
    });
  });
});
