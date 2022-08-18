import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Button from "../../../components/Button";
import {signInCss} from "./signIn.css";
import {Input, Stack} from "@chakra-ui/react";
import {useForm} from "react-hook-form";
import {signInUserAxios} from "../../../api/signIn.axios";
import {useNavigate} from "react-router";
import {ErrorMessage} from '@hookform/error-message';
import commonCss from "../common.css";
import {config} from "./config";
import refreshTokenAxios from "../../../api/refreshToken.axios";


const SignIn = (props) => {
    const navigate = useNavigate()
    const [connectionError, setConnectionError] = useState()
    const {register, handleSubmit, formState: {errors}} = useForm()

    const onSubmit = async (data) => {
        let accessToken

        try {
            const res = await signInUserAxios(data)

            if (res.status === 200) {
                accessToken = res.data.accessToken
            }
        } catch (error) {
            setConnectionError(error.response.data.message)
            console.log(error)
        }

        try {
            const res = await refreshTokenAxios(accessToken)

            if (res.status === 200) {
                const refreshToken = await res.data.refreshToken
                const expireIn = new Date(res.data.expireIn).getTime()

                props.setCookie("accessToken", refreshToken, {
                    sameSite: true,
                    secure: true,
                    maxAge: expireIn
                })

                navigate('/')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Stack style={commonCss.container}>
            <h1 style={commonCss.title}>Sign In</h1>
            <form onSubmit={handleSubmit(onSubmit)}
                  style={commonCss.form}>
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
                <Button customStyle={commonCss.button}
                        value={'Sign In'}
                        type={'submit'}/>
                <p style={commonCss.p}>You don't have a account ?
                    <Link to='/register'>
                        <span style={commonCss.span}> register here</span>
                    </Link>
                </p>
            </form>
        </Stack>
    );
};

export default SignIn;