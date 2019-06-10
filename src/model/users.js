export default {
  namespace: 'users',
  state: {
    user: {
      id: 0,
      name: '未登录',
      role: 'guest',
      img:null,
    }
  },
  reducers:{
      userLogin(state, { payload: newUser }) {
        // const nextCounter = state.counter + 1;
        const newUserWithId = { ...newUser};
        // const nextData = state.data.concat(newUserWithId);
        return {
          user: newUserWithId,
          // counter: nextCounter,
        };
      },
      userLogout(state, { payload: newUser }) {
        // const nextCounter = state.counter + 1;
        const newUserWithId = { ...newUser};
        // const nextData = state.data.concat(newUserWithId);
        return {
          user: newUserWithId,
          // counter: nextCounter,
        };
      }
    },
};