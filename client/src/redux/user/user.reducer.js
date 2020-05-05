import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  hidden: true,
  active: true
};

const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default UserReducer;
