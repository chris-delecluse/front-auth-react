import React from "react";
import SpanError from "../../../components/SpanError";
import {signInCss} from "./signIn.css";

const config = {
    input: [
        {
            style: signInCss.input,
            placeholder: 'Email',
            type: 'email',
            register: 'email',
            name: 'email',
            requiredMessage: (<SpanError customeStyle={{top: 45, left: 0}}
                                         value={'Please enter your email'}/>),
        },
        {
            placeholder: 'Password',
            type: 'password',
            register: 'password',
            name: 'password',
            requiredMessage: (<SpanError customeStyle={{top: 137, left: 0}}
                                         value={'Please enter your password'}/>),
        }
    ]
}

export {config};