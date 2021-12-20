export function setUserInfo(store, userInfo) {
  return Object.assign({}, store.state, {
    userInfo: userInfo
  });
}