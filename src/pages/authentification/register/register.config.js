import React from "react";
import registerStyle from "./register.style";
import SpanError from "../../../components/SpanError";

const regexText = /^[a-zA-Z]{3,20}$/
const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const regexPassword = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{5,16}$/

const registerConfig = {
    inputs: [
        {
            style: registerStyle.grid.firstname,
            placeholder: 'Firstname',
            type: 'text',
            register: 'firstname',
            requiredMessage: (<SpanError customeStyle={{top: 145, left: 67}}
                                         value={'Please enter your firstname'}/>),
            pattern: regexText,
            patternMessage: (<SpanError customeStyle={{top: 145, left: 67}}
                                        value={'Mini 4 letters no symbol'}/>),
        },
        {
            style: registerStyle.grid.lastname,
            placeholder: 'Lastname',
            type: 'text',
            register: 'lastname',
            requiredMessage: (<SpanError customeStyle={{top: 145, left: 275}}
                                         value={'Please enter your lastname'}/>),
            pattern: regexText,
            patternMessage: (<SpanError customeStyle={{top: 145, left: 275}}
                                        value={'Mini 4 letters no symbol'}/>),
        },
        {
            style: registerStyle.grid.email,
            placeholder: 'Email',
            type: 'email',
            register: 'email',
            requiredMessage: (
                <SpanError customeStyle={{top: 270, left: 67}}
                           value={'Please enter your email'}/>),
            pattern: regexEmail,
            patternMessage: (
                <SpanError customeStyle={{top: 270, left: 67}}
                           value={'Example: helloWord@gmail.com'}/>),
        },
        {
            style: registerStyle.grid.password,
            placeholder: 'Password',
            type: 'password',
            register: 'password',
            requiredMessage: (<SpanError customeStyle={{top: 385, left: 67}}
                                         value={'Please enter your password'}/>),
            pattern: regexPassword,
            patternMessage: (<SpanError customeStyle={{top: 385, left: 67}}
                                        value={'Example: 1qwerty'}/>),
        },
        {
            style: registerStyle.grid.confirmPassword,
            placeholder: 'Confirm password',
            type: 'password',
            register: 'confirmPassword',
            requiredMessage: (<SpanError customeStyle={{top: 385, left: 275}}
                                         value={'Please enter your password'}/>),
            pattern: regexPassword,
            patternMessage: (<SpanError customeStyle={{top: 385, left: 275}}
                                        value={'Example: 1qwerty'}/>),
        }
    ]
}

export default registerConfig;