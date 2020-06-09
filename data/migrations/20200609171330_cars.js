
exports.up = function (knex) {

    return knex.schema.createTable('cars', tbl => {

        tbl.increments();
        tbl.integer('VIN').notNullable().unique();
        tbl.string('Make').notNullable();
        tbl.string('Model').notNullable();
        tbl.integer('Mileage').notNullable();
        tbl.string('Transmission_Type');
        tbl.string('Status_of_the_Title');



    })


};

exports.down = function (knex) {

    return knex.schema.dropTableIfExists('cars');


};
