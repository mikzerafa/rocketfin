import pom from "../support/pom"

const portfolio = pom.get.portfolio


describe('Portfolio Tests', () => {
    beforeEach(() => {
        cy.visit('http://192.168.1.246:8080/')
        pom.get.nav.portfolio().click()
      })
    it('Portfolio titles are visible', () => {
        portfolio.title().isVisible('Title')
        portfolio.subtitle().isVisible('SubTitle')
    })
    it('Portfolio headers are visible', () => {
        portfolio.headers.ticker().isVisible('Ticker header')
        portfolio.headers.quantity().isVisible('Quantity header')
        portfolio.headers.costBasis().isVisible('Cost Basis header')
        portfolio.headers.marketValue().isVisible('Market Value header')
        portfolio.headers.unrealisedProfitOrLoss().isVisible('Unrealised Profit or Loss header')
        portfolio.headers.unrealisedReturnRate().isVisible('Unrealised Return Rate header')
    })

    it('Portfolio contains rows', () => {
        portfolio.values.rows().should('have.length.greaterThan', 0)
    })

    it('Portfolio rows contain data', () => {
        portfolio.values.ticker(0).isVisible('Ticker')
        portfolio.values.quantity(0).isVisible('quantity')
        portfolio.values.marketValue(0).isVisible('market value')
        portfolio.values.costBasis(0).isVisible('cost basis')
        portfolio.values.unrealisedProfitOrLoss(0).isVisible('unrealised profit or loss')
        portfolio.values.unrealisedReturnRate(0).isVisible('Unrealised Return Rate')
    })


})