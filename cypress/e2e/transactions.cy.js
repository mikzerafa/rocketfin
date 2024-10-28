import pom from "../support/pom";

const transactions = pom.get.transactions;

describe('Transaction tests', () => {
    beforeEach(()=> {
        cy.visit('http://localhost:8080')
        pom.get.nav.transactions().click()
        cy.wait(3000)
    })
    it('Titles are visible', () => {
        transactions.title().isVisible('Transactions Title')
        transactions.subtitle().isVisible('Transactions SubTitle')
    })

    it('Search field and button is visible', () => {
        transactions.searchField().isVisible('Search Field')
        transactions.search().isVisible('Search Button')
    })

    it('Transactions are searchable', () => {
        transactions.searchField().type('AAPL')
        transactions.search().click()
        transactions.name().isVisible('Transaction - name')
        transactions.bid().isVisible('Transaction - bid')
        transactions.ask().isVisible('Transaction - ask')
        transactions.currentPrice().isVisible('Transaction - current price')
        transactions.changePercentage().isVisible('Transaction - change percentage')
        transactions.quantity().isVisible('Transaction - quantity')
        transactions.transactionType().isVisible('Transaction - transaction type')
        transactions.submit().isVisible('Transaction - submit')
    })

    it('Shares can be purchased', () => {
        transactions.searchField().type('AAPL')
        transactions.search().click()
        transactions.quantity().type('2')
        transactions.transactionType().select('Buy')
        transactions.submit().click()
        cy.contains('Yes, proceed').click()
    })

    it('Shares can be sold', () => {
        transactions.searchField().type('AAPL')
        transactions.search().click()
        transactions.quantity().type('2')
        transactions.transactionType().select('Sell')
        transactions.submit().click()
        cy.contains('Yes, proceed').click()
    })


    it('Purchased shares show in recent transactions', () => {
        transactions.searchField().type('AAPL')
        transactions.search().click()
        transactions.quantity().type('2')
        transactions.transactionType().select('Buy')
        transactions.submit().click()
        cy.contains('Yes, proceed').click()

        pom.get.nav.home().click()
        cy.wait(3000)
        pom.get.home.recentTransactions.transactions().first().should('contain', 'Bought 2 shares of AAPL')
    })

    it('Sold shares show in recent transactions', () => {
        transactions.searchField().type('AAPL')
        transactions.search().click()
        transactions.quantity().type('2')
        transactions.transactionType().select('Sell')
        transactions.submit().click()
        cy.contains('Yes, proceed').click()

        pom.get.nav.home().click()
        cy.wait(3000)
        pom.get.home.recentTransactions.transactions().first().should('contain', 'Sold 2 shares of AAPL')
    })


})