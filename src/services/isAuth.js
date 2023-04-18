export const selectorIsToken = (state) => Boolean(state.auth.token);
export const selectorIsUser = (state) => (state.auth.user);
export const selectorIsTokenID = (state) => (state.auth.token);

