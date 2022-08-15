import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Input, Stack} from "@chakra-ui/react";
import {useForm} from "react-hook-form";
import {ErrorMessage} from '@hookform/error-message';
import Button from "../../../components/Button";
import config from "./config";
import authCommonCss from "../authCommon.css";
import registerCss from "./register.css";
import registerUser from "../../../api/register.axios";
import {useNavigate} from "react-router";

const Register = () => {
    const navigate = useNavigate()
    const {register, handleSubmit, formState: {errors}} = useForm()
    const [userAlreadyExist, setUserAlreadyExist] = useState()

    const onSubmit = async (data) => {
        try {
            const res = await registerUser(data)

            if (res.status === 201) {
                console.log(res)
                navigate('/sign-in')
            }

        } catch (error) {
            setUserAlreadyExist(error.response.data.Error)
        }
    }

    return (
        <Stack style={authCommonCss.container}>
            <h1 style={authCommonCss.title}>Sign Up</h1>
            <form style={authCommonCss.form}
                  onSubmit={handleSubmit(onSubmit)}>
                {!userAlreadyExist ? (<p></p>) : (
                    <p style={registerCss.registerFormApiMainError}>{userAlreadyExist}</p>)}
                <div style={registerCss.formChildrenDiv}>
                    {config.inputs.map((input, key) => {
                        return (
                            <div key={key} style={input.style}>
                                <Input style={{position: 'relative'}}
                                       variant='flushed'
                                       placeholder={input.placeholder}
                                       type={input.type}
                                       {...register(input.register, {
                                           required: {
                                               value: true,
                                               message: input.requiredMessage
                                           },
                                           pattern: {
                                               message: input.patternMessage,
                                               value: input.pattern
                                           }
                                       })}/>
                                <ErrorMessage errors={errors} name={input.register}/>
                            </div>
                        )
                    })}
                </div>
                <Button customeStyle={authCommonCss.button}
                        value={'Sign Up'}
                        type={'submit'}
                />
                <p style={authCommonCss.p}>You have a account ?
                    <Link to='/sign-in'>
                        <span style={authCommonCss.span}> sign-In here</span>
                    </Link>
                </p>
            </form>
        </Stack>
    )
}

export default Register;