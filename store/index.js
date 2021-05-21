export const state = () => ({
  authUser: null
})

export const actions = {
  async onAuthStateChangedAction({ commit, dispatch }, { authUser, claims }) {
    if(!authUser) {
      state.commit('SET_USER', null);

      return
    }

    const { uid, email, emailVerified, displayName, photoURL } = authUser

    commit('SET_USER', {
      uid,
      email,
      emailVerified,
      displayName,
      photoURL,
      isAdmin: claims.custom_claim
    })
  },

  async nuxtServerInit({ dispatch, commit }, { res }) {
    if(res && res.locals && res.locals.user) {
      const { allClaims: claims, idToken: token, ...authUser } = res.locals.user

      await dispatch('onAuthStateChangedAction', {
        authUser,
        claims,
        token
      })
    }
  }
}

export const mutations = {
  SET_USER(state, payload) {
    state.authUser = payload;
  }
}

export const getters = {
  getAuthUser(state) {
    return state.authUser;
  }
}