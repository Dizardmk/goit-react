// get is authenticated
export const getIsAuthenticated = state => state.auth.token;

// get username
export const getUsername = state => state.auth.user.name;
