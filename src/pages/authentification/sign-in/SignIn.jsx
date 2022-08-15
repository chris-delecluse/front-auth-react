import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Button from "../../../components/Button";
import {signInCss} from "./signIn.css";
import {Input, Stack} from "@chakra-ui/react";
import {useForm} from "react-hook-form";
import {getConnected} from "../../../api/signIn.axios";
import {useNavigate} from "react-router";
import {ErrorMessage} from '@hookform/error-message';
import authCommonCss from "../authCommon.css";
import config from "./config";
import {useCookies} from "react-cookie";

const SignIn = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState([])
    const [connectionError, setConnectionError] = useState()
    const {register, handleSubmit, formState: {errors}} = useForm()

    const [cookie, setCookie] = useCookies(["xsrfToken"])

    const onSubmit = async (data) => {
        try {
            const res = await getConnected(data)

            if (res.status === 200) {
                setUser(res.data)

                console.log(res)
                // navigate('/')

                setCookie('accessToken', res.data.accessToken, {
                    maxAge: 120,
                    path: '/'
                })

                window.localStorage.setItem('accessToken', cookie.accessToken);
            }
        } catch (error) {
            setConnectionError(error.response.data.message)
            console.log(error)
        }
    }

    // get token from api when connect

    return (
        <Stack style={authCommonCss.container}>
            <h1 style={authCommonCss.title}>Sign In</h1>
            <form onSubmit={handleSubmit(onSubmit)}
                  style={authCommonCss.form}>
                {!connectionError ? (<p></p>) : (<p style={signInCss.signInFormApiMainError}>{connectionError}</p>)}
                <div style={signInCss.stackBox}>
                    {config.input.map((input, key) => {
                        return (
                            <div key={key}>
                                <Input style={input.style}
                                       variant='flushed'
                                       placeholder={input.placeholder}
                                       type={input.type}
                                       {...register(input.register, {
                                           required: {
                                               value: true,
                                               message: input.requiredMessage
                                           }
                                       })}/>
                                <ErrorMessage errors={errors} name={input.register}/>
                            </div>
                        )
                    })}
                </div>
                <Button customeStyle={authCommonCss.button}
                        value={'Sign In'}
                        type={'submit'}/>
                <p style={authCommonCss.p}>You don't have a account ?
                    <Link to='/register'>
                        <span style={authCommonCss.span}> register here</span>
                    </Link>
                </p>
            </form>
        </Stack>
    );
};

export default SignIn;