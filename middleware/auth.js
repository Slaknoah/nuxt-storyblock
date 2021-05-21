export default function({route, redirect, store, $fire}) {
  if(route.path !== '/login' && !store.$fire.auth.currentUser) {
    return redirect('/login')
  } else if(route.path === '/login' && $fire.auth.currentUser) {
    return redirect('/')
  }
}