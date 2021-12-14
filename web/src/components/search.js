import algoliasearch from 'algoliasearch'

const client = algoliasearch('BMIBV55N5H', 'f9163c551d5426a8e5c12b6c2daede42')

const index = client.initIndex('Designs')
