import axios from './axios-orders';
import { firestore } from '../Firebase/Firebase';

const UserService = {
  user: null,

  async getUser(uid) {
    const userSnapShot = await firestore.collection('users').doc(uid).get();
    const user = userSnapShot.data();
    return user;
  },

  getCurrentUser() {
    this.user = JSON.parse(localStorage.getItem('user'));
  },

  logUser(user) {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(this.user));
  },

  logOut() {
    this.user = null;
    localStorage.removeItem('user');
  },

  async getAllUsers() {
    const usersData = await axios.get('/users.json').then((res) => res.data);
    return usersData;
  },

  async createUserInDatabase(uid, name, email) {
    console.log('createUserInDatabase');
    const result = await firestore.collection('users').doc(uid).set(
      {
        pseudo: name,
        email: email,
      },
      { merge: true }
    );
    console.log(result);

    this.user = {
      uid,
      pseudo: name,
    };
    // const result = await firestore.collection('users').add({date: date, départ: départ, destination: destination,})

    /* let usersData = await axios.get('/users.json').then((res) => res.data);
    // check if the user isn't already existing, if not, create it
    if (!usersData || !usersData[uid]) {
      usersData = await axios
        .put(
          `/users/${uid}/.json`,
          {
            id: uid,
            pseudo: name,
          },
          {
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json',
            },
          }
        )
        .then((res) => {
          return res.data;
        });
    } else {
      usersData = usersData[uid];
    }
    this.logUser(usersData); */
  },

  updateUser(property, value) {
    localStorage.setItem('user', JSON.stringify(this.user));

    axios.patch(
      `/users/${this.user.user_ID}/.json`,
      { [property]: value },
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      }
    );
  },
};

export default UserService;
