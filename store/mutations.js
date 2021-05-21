export default {
  ON_AUTH_STATE_CHANGED_MUTATION(state, { authUser, claims }) {
    const { uid, email, emailVerified, displayName, photoURL } = authUser

    state.authUser = {
      uid,
      displayName,
      email,
      emailVerified,
      photoURL: photoURL || null,
      isAdmin: claims.custom_claim
    }
  },
  SET_USER(state, authUser) {
    const { uid, email, emailVerified, displayName, photoURL, isAdmin } = authUser

    state.authUser = {
      uid,
      displayName,
      email,
      emailVerified,
      photoURL: photoURL || null,
      isAdmin: isAdmin
    }
  }
}