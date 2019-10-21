context('Settings Page', () => {
  const submarineIndex = 12;
  const destroyerIndex = 5;
  const cruiserIndex = 26;
  const battleshipIndex = 55;
  
  before(() => {
    cy.visit('/')
  })

  it('renders only one board', () => {
    cy.get('.board').should('have.length', 1);
  });

  describe('when move a submarine to the board', () => {
    before(() => {
      cy.moveShipToBoard(0, 0, submarineIndex);
    });

    it('renders occupied cells', () => {
      cy.get('.board > .cell--ship').should('have.length', 1);
    });

    it('renders inactive cells', () => {
      cy.get('.board > .cell--inactive').should('have.length', 8);
    });
    
    it('renders right inactive cells', () => {
      cy.cellShouldBeInactive(submarineIndex - 9);
      cy.cellShouldBeInactive(submarineIndex - 10);
      cy.cellShouldBeInactive(submarineIndex - 11);
      cy.cellShouldBeInactive(submarineIndex + 9);
      cy.cellShouldBeInactive(submarineIndex + 10);
      cy.cellShouldBeInactive(submarineIndex + 11);
      cy.cellShouldBeInactive(submarineIndex - 1);
      cy.cellShouldBeInactive(submarineIndex + 1);
    });

    it('marks the ship as inactive', () => {
      cy.get('.ship-list__row').eq(0).within(() => {
        cy.get('.ship').first().within(() => {
          cy.get('.cell').first().should('have.class', 'cell--inactive');
        });
      });
    });
  });

  describe('when move a destroyer to the board', () => {
    before(() => {
      cy.moveShipToBoard(1, 0, destroyerIndex);
    });

    it('renders occupied cells', () => {
      cy.get('.board > .cell--ship').should('have.length', 3);
    });

    it('renders inactive cells', () => {
      cy.get('.board > .cell--inactive').should('have.length', 14);
    });
    
    it('renders right inactive cells', () => {
      cy.cellShouldBeInactive(destroyerIndex + 9);
      cy.cellShouldBeInactive(destroyerIndex + 10);
      cy.cellShouldBeInactive(destroyerIndex + 11);
      cy.cellShouldBeInactive(destroyerIndex + 12);
      cy.cellShouldBeInactive(destroyerIndex - 1);
      cy.cellShouldBeInactive(destroyerIndex + 2);
    });
    
    it('marks the ship as inactive', () => {
      cy.get('.ship-list__row').eq(1).within(() => {
        cy.get('.ship').first().within(() => {
          cy.get('.cell').first().should('have.class', 'cell--inactive');
        });
      });
    });
  });

  describe('when move a cruiser to the board', () => {
    before(() => {
      cy.moveShipToBoard(2, 0, cruiserIndex);
    });

    it('renders occupied cells', () => {
      cy.get('.board > .cell--ship').should('have.length', 6);
    });

    it('renders inactive cells', () => {
      cy.get('.board > .cell--inactive').should('have.length', 23);
    });
    
    it('renders right inactive cells', () => {
      cy.cellShouldBeInactive(cruiserIndex + 9);
      cy.cellShouldBeInactive(cruiserIndex + 10);
      cy.cellShouldBeInactive(cruiserIndex + 11);
      cy.cellShouldBeInactive(cruiserIndex + 12);
      cy.cellShouldBeInactive(cruiserIndex - 1);
      cy.cellShouldBeInactive(cruiserIndex + 3);
    });

    it('marks the ship as inactive', () => {
      cy.get('.ship-list__row').eq(2).within(() => {
        cy.get('.ship').first().within(() => {
          cy.get('.cell').first().should('have.class', 'cell--inactive');
        });
      });
    });
  });

  describe('when move a battleship to the board', () => {
    before(() => {
      cy.moveShipToBoard(3, 0, battleshipIndex);
    });

    it('renders occupied cells', () => {
      cy.get('.board > .cell--ship').should('have.length', 10);
    });

    it('renders inactive cells', () => {
      cy.get('.board > .cell--inactive').should('have.length', 37);
    });
    
    it('renders right inactive cells', () => {
      cy.cellShouldBeInactive(battleshipIndex - 11);
      cy.cellShouldBeInactive(battleshipIndex - 10);
      cy.cellShouldBeInactive(battleshipIndex - 9);
      cy.cellShouldBeInactive(battleshipIndex - 8);
      cy.cellShouldBeInactive(battleshipIndex - 7);
      cy.cellShouldBeInactive(battleshipIndex - 6);
      cy.cellShouldBeInactive(battleshipIndex + 9);
      cy.cellShouldBeInactive(battleshipIndex + 10);
      cy.cellShouldBeInactive(battleshipIndex + 11);
      cy.cellShouldBeInactive(battleshipIndex + 12);
      cy.cellShouldBeInactive(battleshipIndex + 13);
      cy.cellShouldBeInactive(battleshipIndex + 14);
      cy.cellShouldBeInactive(battleshipIndex - 1);
      cy.cellShouldBeInactive(battleshipIndex + 4);
    });
    
    it('marks the ship as inactive', () => {
      cy.get('.ship-list__row').eq(3).within(() => {
        cy.get('.ship').first().within(() => {
          cy.get('.cell').first().should('have.class', 'cell--inactive');
        });
      });
    });
  });
  
  describe('when move a ship to another position', () => {
    let newSubmarinePosition = 90;
    
    before(() => {
      cy.getCellByIndex(submarineIndex).trigger('mousedown');
      cy.getCellByIndex(newSubmarinePosition).click();
    });
    
    it('renders right count of occupied cells', () => {
      cy.get('.board > .cell--ship').should('have.length', 10);
    });
    
    it('renders previous inactive cells as active now', () => {
      cy.cellShouldBeActive(submarineIndex - 9);
      cy.cellShouldBeActive(submarineIndex - 10);
      cy.cellShouldBeActive(submarineIndex - 11);
      cy.cellShouldBeActive(submarineIndex + 9);
      cy.cellShouldBeActive(submarineIndex + 10);
      cy.cellShouldBeActive(submarineIndex + 11);
      cy.cellShouldBeActive(submarineIndex - 1);
      cy.cellShouldBeActive(submarineIndex + 1);
    });
    
    it('renders new inactive cells', () => {
      cy.cellShouldBeInactive(newSubmarinePosition - 10);
      cy.cellShouldBeInactive(newSubmarinePosition - 9);
      cy.cellShouldBeInactive(newSubmarinePosition + 1);
    });
  });

  describe('when move a ship to an occupied position', () => {
    before(() => {
      cy.moveShipToBoard(0, 1, battleshipIndex);
    });
    
    it('renders right count of occupied cells', () => {
      cy.get('.board > .cell--ship').should('have.length', 10);
    });
    
    it('does not mark the ship as inactive', () => {
      cy.get('.ship-list__row').eq(0).within(() => {
        cy.get('.ship').eq(1).within(() => {
          cy.get('.cell').first().should('not.have.class', 'ship--inactive');
        });
      });
    });
  });

  describe('when move a ship to an inactive position', () => {
    before(() => {
      cy.moveShipToBoard(0, 1, battleshipIndex + 12);
    });
    
    it('renders right count of occupied cells', () => {
      cy.get('.board > .cell--ship').should('have.length', 10);
    });
    
    it('does not mark the ship as inactive', () => {
      cy.get('.ship-list__row').eq(0).within(() => {
        cy.get('.ship').eq(1).within(() => {
          cy.get('.cell').first().should('not.have.class', 'ship--inactive');
        });
      });
    });
  });
});
