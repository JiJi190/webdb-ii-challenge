
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments();
      tbl.string("vin", 128).unique().notNullable();
      
  })
};

exports.down = function(knex) {
  
};
