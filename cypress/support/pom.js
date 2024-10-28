const get = {
    nav: {
        home: () => cy.contains('Home'),
        portfolio: () => cy.contains('Portfolio'),
        transactions: () => cy.contains('Transactions')
    },
    home: {
        title: () => cy.get('h1[class="title"]'),
        portfolio: {
            data: () => cy.get('.portfolio-data').find('p'),
            title: () => cy.get('h2').eq(0),
            totalHoldings: () => get.home.portfolio.data().eq(0),
            totalMarketValue: () => get.home.portfolio.data().eq(1),
            totalUnrealisedProfitOrLoss: () => get.home.portfolio.data().eq(2),
            overAllReturnRate: () => get.home.portfolio.data().eq(3)
        },
        recentTransactions:{
            section: () => cy.contains('Recent Transactions').parent(),
            title: () => get.home.recentTransactions.section().find('h3'),
            transactions: () => get.home.recentTransactions.section().find('li')
        }
    },
    portfolio: {
        title: () => cy.get('h1[class="title"]'),
        subtitle: () => cy.get('h2[class="subtitle"]'),
        headers: {
            data:() => cy.get('div[class="table-scroll"]').find('th'),
            ticker:() => get.portfolio.headers.data().eq(0),
            quantity: () => get.portfolio.headers.data().eq(1),
            costBasis: () => get.portfolio.headers.data().eq(2),
            marketValue: () => get.portfolio.headers.data().eq(3),
            unrealisedProfitOrLoss: () => get.portfolio.headers.data().eq(4),
            unrealisedReturnRate: () => get.portfolio.headers.data().eq(5),
        },
        values: {
            rows:() => cy.get('tbody').find('tr'),
            ticker:(index) => get.portfolio.values.rows().eq(index).find('td').eq(0),
            quantity: (index) => get.portfolio.values.rows().eq(index).find('td').eq(1),
            costBasis: (index) => get.portfolio.values.rows().eq(index).find('td').eq(2),
            marketValue: (index) => get.portfolio.values.rows().eq(index).find('td').eq(3),
            unrealisedProfitOrLoss: (index) => get.portfolio.values.rows().eq(index).find('td').eq(4),
            unrealisedReturnRate: (index) => get.portfolio.values.rows().eq(index).find('td').eq(5),
        }

    },
    transactions:{
        title: () => cy.get('h1[class="title"]'),
        form: () => cy.get('form[class="search-form"]'),
        subtitle: () => get.transactions.form().find('label'),
        searchField: () => get.transactions.form().find('input[id="ticker"]'),
        search: () => get.transactions.form().find('button[type="submit"]'),

        transactionDetails: () => cy.contains('Current Price').parent(),
        name: () => get.transactions.transactionDetails().find('h2'),
        currentPrice:() => get.transactions.transactionDetails().find('p').eq(0),
        bid: () => get.transactions.transactionDetails().find('p').eq(1),
        ask: () => get.transactions.transactionDetails().find('p').eq(2),
        changeValue: () => get.transactions.transactionDetails().find('p').eq(3),
        changePercentage: () => get.transactions.transactionDetails().find('p').eq(4),

        quantity: () => cy.get('.transaction-form').find('input'),
        transactionType:()=> cy.get('.transaction-form').find('select'),
        submit: () => cy.contains('Submit')
    }
}
export default{
    get
}