import {BrowserRouter, Route} from "react-router-dom";
import {ChakraProvider} from '@chakra-ui/react';
import {Routes} from 'react-router';
import Home from "./pages/home/Home";
import SignIn from "./pages/authentification/sign-in/SignIn";
import Register from "./pages/authentification/register/Register";
import Layout from "./components/layout/Layout";
import User from "./pages/user/User";
import NotFound from "./pages/404-notFound/NotFound";
import PrivateRoute from "./routes/PrivateRoute";
import Logout from "./pages/authentification/Logout";

function App() {
    return (
        <ChakraProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout/>}>
                        <Route element={<PrivateRoute/>}>
                            <Route index element={<Home/>}/>
                            <Route path='/logout' element={<Logout/>}/>
                        </Route>
                        <Route path='/sign-in' element={<SignIn/>}/>
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
