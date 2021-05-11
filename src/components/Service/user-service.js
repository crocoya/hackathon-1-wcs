import axios from './axios-orders';

const UserService = {
  user: null,

  getUser() {
    const storedUser = localStorage.getItem('user');
    if (!this.user && storedUser) {
      this.user = JSON.parse(storedUser);
    }
    return this.user || null;
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

  async createUserInDatabase(uid, name) {
    let usersData = await axios.get('/users.json').then((res) => res.data);
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
    this.logUser(usersData);
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
