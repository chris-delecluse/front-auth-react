import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Button from "../../../components/Button";
import {signInStyle} from "./signIn.style";
import {Input, Stack} from "@chakra-ui/react";
import {useForm} from "react-hook-form";
import {getConnected} from "../../../api/signIn.axios";
import {useNavigate} from "react-router";
import {ErrorMessage} from '@hookform/error-message';
import authCommonStyle from "../authCommon.style";
import signInConfig from "./signIn.config";

const SignIn = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState([])
    const [connectionError, setConnectionError] = useState()
    const {register, handleSubmit, formState: {errors}} = useForm()

    const onSubmit = async (data) => {
        try {
            const res = await getConnected(data)

            if (res.status === 200) {
                setUser(res.data)
                // navigate('/')
            }
        } catch (error) {
            setConnectionError(error.response.data.message)
            console.log(error)
        }
    }

    console.log(user)
    // get token from api when connect

    return (
        <Stack style={authCommonStyle.container}>
            <h1 style={authCommonStyle.title}>Sign In</h1>
            <form onSubmit={handleSubmit(onSubmit)}
                  style={authCommonStyle.form}>
                {!connectionError ? (<p></p>) : (<p style={signInStyle.signInFormApiMainError}>{connectionError}</p>)}
                <div style={signInStyle.stackBox}>
                    {signInConfig.input.map((input, key) => {
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
                <Button customeStyle={authCommonStyle.button}
                        value={'Sign In'}
                        type={'submit'}/>
                <p style={authCommonStyle.p}>You don't have a account ?
                    <Link to='/register'>
                        <span style={authCommonStyle.span}> register here</span>
                    </Link>
                </p>
            </form>
        </Stack>
    );
};

export default SignIn;