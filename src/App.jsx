import {BrowserRouter, Route} from "react-router-dom";
import {ChakraProvider} from '@chakra-ui/react';
import {Routes} from 'react-router';
import Home from "./pages/home/Home";
import SignIn from "./pages/authentification/sign-in/SignIn";
import Register from "./pages/authentification/register/Register";
import Layout from "./components/layout/Layout";

function App() {
    return (
        <ChakraProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path='/sign-in' element={<SignIn/>}/>
                        <Route path='/register' element={<Register/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
    );
}

export default App;
