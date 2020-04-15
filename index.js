const knex = require('knex')({client: 'mysql'})
const paging_manager = require('./paging_manager')

const params = {
  select: ['a', 'b', 'c'],
  from: ['cat'],
  pagination: {
    START_OFFSET: 20,
    SIZE: 10
  },
  filter: {

  },
  order: [
    {
      column: 'age',
      order: 'desc'
    },
    {
      column: 'created_at',
      order: 'asc'
    }
  ],
  available_filter: [],
  available_order: []
}

paging_manager.paging_info_generator(params)