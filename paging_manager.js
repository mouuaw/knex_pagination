const knex = require('knex')({client: 'mysql'})

async function paging_info_generator(params) {
  const {
    select,
    from,
    pagination,
    filter,
    order,
    available_filter,
    available_order
  } = params

  console.log('LOGG: functionpaging_info_generator -> select', select)
  console.log('LOGG: functionpaging_info_generator -> from', from)
  console.log('LOGG: functionpaging_info_generator -> pagination', pagination)
  console.log('LOGG: functionpaging_info_generator -> filter', filter)
  console.log('LOGG: functionpaging_info_generator -> order', order)
  console.log('LOGG: functionpaging_info_generator -> available_filter', available_filter)
  console.log('LOGG: functionpaging_info_generator -> available_order', available_order)

  base_knex = knex.select(select).from(from)
  total_knex = knex.from(from).count('* as total')


  if(pagination){
    base_knex = pagination_gen(base_knex, pagination)
  }

  if(filter){
    base_knex = filter_gen(base_knex, filter)
    total_knex = filter_gen(total_knex, filter)
  }

  if(order) {
    base_knex = order_gen(base_knex, order)
  }



  const base_query = base_knex.toQuery()
  const total_query = total_knex.toQuery()

  console.log('LOGG: functionpaging_info_generator -> base_query', base_query)
  console.log('LOGG: functionpaging_info_generator -> total_query', total_query)
}

function pagination_gen(base_knex, pagination) {
  if(pagination.SIZE){
    base_knex.limit(pagination.SIZE)
    if(pagination.START_OFFSET){
      base_knex.offset(pagination.START_OFFSET)
    }
  }

  return base_knex
}

function filter_gen(base_knex, filter) {
  if(filter && filter.length){

  }

  return base_knex
}

function order_gen(base_knex, order) {
  if(order && order.length){
    base_knex.orderBy(order)
  }

  return base_knex
}

exports.paging_info_generator = paging_info_generator