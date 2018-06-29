const mongoose = require('mongoose');
const seeder = require('../utilities/seeder');



module.exports = (settings) => {
  mongoose.connect(settings.db);
  let db = mongoose.connection;

  db.once('open', err => {
    if (err) {
      throw err;
    }

    console.log('MongoDB ready!');

    db.db.listCollections({}).next((err, coll) => {
      if (err) {
        console.log(err);
        return;
      }

      if (!coll) {
        seeder.seedRolesAndAdmin();
        seeder.seedCategoriesAndProducts();
      }
    });    
  });

  db.on('error', err => console.log(`Database error: ${err}`));
};
