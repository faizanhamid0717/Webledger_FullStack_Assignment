
import {useSelector} from 'react-redux'
import{Navigate,useLocation} from 'react-router-dom'

export const PrivateRoute=({children})=>{
      const location=useLocation()
      console.log('Location',location)

      const auth=useSelector((store)=>store.authReducer.isAuth)
      console.log('auth',auth)

    return (
        !auth ?<Navigate to='/login' state={location.pathname} replace/> : children
    )
}