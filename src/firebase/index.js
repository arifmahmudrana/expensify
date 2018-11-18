import * as firebase from 'firebase';
// import moment from 'moment';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);
const database = firebase.database();

export {firebase, database as default};
// database.ref().on('child_changed', (snapshot, prevChildKey) => {
//   console.log('====================================');
//   console.log(prevChildKey, snapshot.key, snapshot.val());
//   console.log('====================================');
// });
// const expenses = [{
//   description: 'Gum',
//   note: '',
//   amount: 195,
//   createdAt: 0
// }, {
//   description: 'Rent',
//   note: '',
//   amount: 109500,
//   createdAt: moment(0).subtract(4, 'days').valueOf()
// }, {
//   description: 'Credit Card',
//   note: '',
//   amount: 4500,
//   createdAt: moment(0).add(4, 'days').valueOf()
// }];
// database.ref('expenses').on('value', (snapshot) => {
//   const exps = [];
//   snapshot.forEach((s) => {
//     exps.push({
//       id: s.key,
//       ...s.val()
//     });
//   });

//   console.log('====================================');
//   console.log(exps);
//   console.log('====================================');
// });
// setTimeout(() => {
//   database.ref('expenses').push(expenses[0]);
// }, 2000);
// setTimeout(() => {
//   database.ref('expenses').push(expenses[1]);
// }, 4000);
// setTimeout(() => {
//   database.ref('expenses').push(expenses[2]);
// }, 6000);



/* const callback = database.ref('name').on('value', (snapshot) => {
  console.log('====================================');
  console.log('name = ', snapshot.val());
  console.log('====================================');
});
setTimeout(() => {
  database.ref('name').set('Arif');
}, 2000);
setTimeout(() => {
  database.ref('name').off('value', callback);
}, 4000);
setTimeout(() => {
  database.ref('name').set('Arif Mahmud');
}, 6000);
const data = {
  name: 'Arif',
  age: 36,
  is_single: false,
  location: {
    city: 'Dhaka',
    country: 'Bangladesh'
  }
};

database.ref().set(data).then(() => {
  console.log('====================================');
  console.log('Yay data saved to firebase');
  console.log('====================================');
}).catch(e => {
  console.log('====================================');
  console.log('OOOOpss! what happend to you firebase ', e);
  console.log('====================================');
});
database.ref('age').set(37);

const attributes = {
  height: 68,
  weight: 94
};
database.ref('attributes').set(attributes);
const expenses = [{
  id: '1',
  description: 'Gum',
  note: '',
  amount: 195,
  createdAt: 0
}, {
  id: '2',
  description: 'Rent',
  note: '',
  amount: 109500,
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description: 'Credit Card',
  note: '',
  amount: 4500,
  createdAt: moment(0).add(4, 'days').valueOf()
}];
database.ref('expenses').set(expenses).then(() => {
  console.log('====================================');
  console.log('Yay data saved to firebase');
  console.log('====================================');
}).catch(e => {
  console.log('====================================');
  console.log('OOOOpss! what happend to you firebase ', e);
  console.log('====================================');
});

const removeURL = 'expenses/0';
database.ref(removeURL).remove().then(() => {
  console.log('====================================');
  console.log('Yay data remove from firebase');
  console.log('====================================');
}).catch(e => {
  console.log('====================================');
  console.log('OOOOpss! what happend to you firebase why can\'t you delete ', e);
  console.log('====================================');
});

const messageListRef = firebase.database().ref('message_list');
const newMessageRef = messageListRef.push();
newMessageRef.set({
  'user_id': 'ada',
  'text': 'The Analytical Engine weaves algebraical patterns just as the Jacquard loom weaves flowers and leaves.'
});
const path = newMessageRef.toString();
console.log('====================================');
console.log(path);
console.log('====================================');

const key = messageListRef.push({
  'user_id': '2. ada',
  'text': '2. The Analytical Engine weaves algebraical patterns just as the Jacquard loom weaves flowers and leaves.'
}).key;
console.log('====================================');
console.log('Yayyyyy here is the key "', key, '"');
console.log('====================================');

const update = {
  name: 'Arif Mahmud Rana',
  'expenses/1/amount': 3109500,
  'location/city': 'Comilla'
};
database.ref().update(update).then(() => {
  console.log('====================================');
  console.log('Yay data saved to firebase');
  console.log('====================================');
}).catch(e => {
  console.log('====================================');
  console.log('OOOOpss! what happend to you firebase ', e);
  console.log('====================================');
}); */