// middlewares.js
const expireMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  const adminLogin = state.adminLogin;

  if (adminLogin && adminLogin.timestamps) {
    const currentTime = Date.now();
    const timeElapsed = currentTime - adminLogin.timestamps;

    if (timeElapsed > 3600000) {
      // 20000 ms = 20 seconds
      // Dispatch a CLOSE_SESSION action to clear the state
      next({ type: "CLOSE_SESSION" });
    }
  }

  return next(action);
};

// Function to check expiration at the app start
const checkExpirationAtStart = (store) => {
  const state = store.getState();
  const adminLogin = state.adminLogin;

  if (adminLogin && adminLogin.timestamps) {
    const currentTime = Date.now();
    const timeElapsed = currentTime - adminLogin.timestamps;

    if (timeElapsed > 3600000) {
      // 20000 ms = 20 seconds
      store.dispatch({ type: "CLOSE_SESSION" });
    }
  }
};

export { expireMiddleware, checkExpirationAtStart };
