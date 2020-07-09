// eslint-disable-next-line strict
var models = require('./server.js').models;

// Create user
models.Profile.create({name: 'Nick'}, (err, profile) => {
  console.log('data', err, profile);
})

// Update atributes

models.Profile.findOrCreate({name: 'Carlota'}, (err, profile) => {
  if  (err) {
    console.log('There was an error', err)
  } else if (profile) {
    profile.email = 'cucanegra@gmail.com';
    profile.save((err, update) => {
        console.log("Updated?", err, update);
    });
  }
})

// Query
var filter = {
  where: { name: 'Carlota'},
  order: 'date ASC',
 }


 //Find one
models.Profile.findOne(filter, (err, found) =>{
    console.log('found', found);
})

//Delete one
models.Profile.findById('5f06321bc8fd840444924b01', (err, found) =>{
    console.log('found', found);
    found.destroy();
})