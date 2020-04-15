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
  available_filter: [
    {
      name: '나이',
      column: 'age',
      type: 'number'
    },
    {
      name: '성별',
      column: 'sex',
      type: 'constant',
      constant_type: ['male', 'female']
    },
    {
      name: '이름',
      column: 'name',
      type: 'string'
    },
  ],
  available_order: [
    {
      name: '나이',
      column: 'age'
    },
  ]
}

paging_manager.paging_info_generator(params)