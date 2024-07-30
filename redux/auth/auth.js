export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

export const Logout_redux = () => async dispatch => {
  dispatch(LogoutSuccess());
};

export const Register_redux = (email, password) => async dispatch => {
  dispatch(RegisterSuccess({ email, password }));
};

export const Login_redux = (email,password) => async dispatch => {
  dispatch(LoginSuccess(email));
};

export const RegisterSuccess = (user) => {
  return {
    type: REGISTER_SUCCESS,
    payload: user,
  };
};

export const LoginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
};

export const LogoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};
const initialState = {
  success_register: false,
  is_login: false,
  users: [], // Liste des utilisateurs enregistrés
  user_email:''
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        is_login: true,
        user_email: action.payload
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        is_login: false,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        success_register: true,
        users: [...state.users, action.payload], // Ajoute le nouvel utilisateur
      };
    default:
      return state;
  }
};

export default AuthReducer;
