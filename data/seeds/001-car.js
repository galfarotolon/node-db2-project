
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert(generateData());
    });
};



function generateData() {
  return [
    {
      VIN: '123153',
      Make: 'Aston Martin',
      Model: 'DB 11',
      Mileage: 25000,
      Transmission_Type: 'Automatic',
      Status_of_the_Title: 'Clean',
    },
    {
      VIN: '155333',
      Make: 'Bentley',
      Model: 'Continental GT',
      Mileage: 44600,
      Transmission_Type: 'Manual',
      Status_of_the_Title: 'Salvage',
    },
    {
      VIN: '4412323',
      Make: 'Jaguar',
      Model: 'XF Sportbrake',
      Mileage: 15000,
      Transmission_Type: 'Automatic',
      Status_of_the_Title: 'Clean',
    },
  ]
}

