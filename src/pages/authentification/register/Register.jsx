import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Input, Stack} from "@chakra-ui/react";
import {useForm} from "react-hook-form";
import {ErrorMessage} from '@hookform/error-message';
import Button from "../../../components/Button";
import registerConfig from "./register.config";
import authCommonStyle from "../authCommon.style";
import registerStyle from "./register.style";
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
        <Stack style={authCommonStyle.container}>
            <h1 style={authCommonStyle.title}>Sign Up</h1>
            <form style={authCommonStyle.form}
                  onSubmit={handleSubmit(onSubmit)}>
                {!userAlreadyExist ? (<p></p>) : (
                    <p style={registerStyle.registerFormApiMainError}>{userAlreadyExist}</p>)}
                <div style={registerStyle.formChildrenDiv}>
                    {registerConfig.inputs.map((input, key) => {
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
                <Button customeStyle={authCommonStyle.button}
                        value={'Sign Up'}
                        type={'submit'}
                />
                <p style={authCommonStyle.p}>You have a account ?
                    <Link to='/sign-in'>
                        <span style={authCommonStyle.span}> sign-In here</span>
                    </Link>
                </p>
            </form>
        </Stack>
    )
}

export default Register;