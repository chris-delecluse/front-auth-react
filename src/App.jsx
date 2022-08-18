import {BrowserRouter, Route} from "react-router-dom";
import {ChakraProvider} from '@chakra-ui/react';
import {Routes} from 'react-router';
import Home from "./pages/home/Home";
import SignIn from "./pages/authentification/sign-in/SignIn";
import Register from "./pages/authentification/register/Register";
import LayoutLogged from "./components/layouts/LayoutLogged";
import User from "./pages/user/User";
import NotFound from "./pages/404-notFound/NotFound";
import PrivateRoute from "./routes/PrivateRoute";
import {useCookies} from "react-cookie";
import LayoutNotLogged from "./components/layouts/LayoutNotLogged";

function App() {
    const [cookie, setCookie, removeCookie] = useCookies()

    return (
        <ChakraProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/'
                           element={cookie.accessToken ?
                               <LayoutLogged removeToken={removeCookie} token={cookie.accessToken}/> :
                               <LayoutNotLogged/>}>

                        <Route element={<PrivateRoute token={cookie.accessToken}/>}>
                            <Route index element={<Home/>}/>
                        </Route>

                        <Route path='/sign-in' element={<SignIn setCookie={setCookie}/>}/>
                        <Route path='/register' element={<Register/>}/>
                        <Route path='/user/:id' element={<User/>}/>
                        <Route path='/*' element={<NotFound/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
    );
}

export default App;
