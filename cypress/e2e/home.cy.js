import { beforeEach } from 'mocha';
import pom from '../support/pom';

const nav = pom.get.nav;
const home = pom.get.home;
const portfolio = home.portfolio;
const recentTransactions = home.recentTransactions;

describe('Home Tests', () => {

  beforeEach(() => {
    cy.visit('http://localhost:8080')
  })

  it('Pages are visible and clickable', () => {
    nav.home().click();
    nav.portfolio().click();
    nav.transactions().click();
  })

  it('Home - Title is visible', ()=> {
    home.title().isVisible('Home Title')
  })

  it('Home - Portfolio contains data', () => {
    cy.wait(3000)
    portfolio.title().isVisible('Portfolio Title')
    portfolio.totalHoldings().isVisible('total Holdings')
    portfolio.totalMarketValue().isVisible('total Market Value')
    portfolio.totalUnrealisedProfitOrLoss().isVisible('total Unrealised Profit or Loss')
    portfolio.overAllReturnRate().isVisible('Overall Return Rate')
  })

  it('Home - Recent Transactions contains data', () => {
    cy.wait(3000)
    recentTransactions.title().isVisible('Recent Transactions Title')
    recentTransactions.transactions().should('have.length.greaterThan', 0)
  })
})