const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/sharingbasket"
);

const userSeed = [
  {
    email: "nancy@example.com",
    password: "testpw",
    date: new Date(Date.now())
  },
  {
    email: "bobby@example.com",
    password: "testpw",
    date: new Date(Date.now())
  },
  {
    email: "ella@example.com",
    password: "testpw",
    date: new Date(Date.now())
  },
  {
    email: "sam@example.com",
    password: "testpw",
    date: new Date(Date.now())
  }
];

const pantrySeed = [
  {
    name: "Friends Food",
    ein: "1234567",
    email: "nancy@test.com",
    password: "test",
    ein: 1234567,
    date: new Date(Date.now()),
    wishItem:
    [
          {
            desctiption: "all good things",
            createdate: new Date(Date.now()),
      },
      {
        desctiption: "item number 2",
        createdate: new Date(Date.now()),
      }
    ]
  },
  {
    name: "Sam's Kitchen",
    ein: "222222",
    email: "sam@test.com",
    password: "test",
    ein: 22234567,
    date: new Date(Date.now()),
    wishItem:
    [
          {
            desctiption: "a good thing",
            createdate: new Date(Date.now()),
      },
      {
        desctiption: "item number 2",
        createdate: new Date(Date.now()),
      }
    ]
  },
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Pantry
  .remove({})
  .then(() => db.Pantry.collection.insertMany(pantrySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
