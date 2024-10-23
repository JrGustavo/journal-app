import {Navigate, Route, Routes} from "react-router-dom";
import {AuthRoutes} from "../auth/routes/AuthRoutes.jsx";
import {JournalRoutes} from "../journal/routes/JournalRoutes.jsx";
import { useSelector} from "react-redux";
import {CheckingAuth} from "../ui/index.js";
import {useEffect} from "react";
import {login, logout} from "../store/auth/index.js";


export const AppRouter = () => {

    const {status} = useSelector(state => state.auth)
    const useDispatch = useDispatch()

    useEffect(() => {
    onAuthStateChanged(authFirebase, async(user) => {
        if (!user) return dispatch(logout ())
        const {uid, email, displayName, photoURL} = user;
        dispatch(login({uid, email, displayName, photoURL}))

    })

    }, []);
    
    
    

    if (status === 'checking') {
        return <CheckingAuth/>
    }

    return (
        <Routes>
            {
                (status === 'authenticated')
                    ? <Route path="/*" element={<JournalRoutes/>}   />
                    : <Route path="/auth/*" element={<AuthRoutes/>} />
            }

            <Route path='/*' element={ <Navigate to='/auth/login'/> } />
        </Routes>



    )
}
