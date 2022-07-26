// import * as React from "react";
import React, { useEffect, useRef } from "react";
import { LabelWithIcon } from "../../atoms/LabelWithIcon/labelWithIcon";
import { useForm } from "react-hook-form";

export const PasswordValidator = ({ ...props }) => {
    const [isCharLengthPass, setCharLengthPass] = React.useState(false)
    const [isAlphabethPass, setAlphabethPass] = React.useState(false)
    const [isSpecialCharPass, setSpecialCharPass] = React.useState(false)
    const [isNotContainPass, setNotContainPass] = React.useState(false)
    const [isHasTripleCharPass, setHasTripleCharPass] = React.useState(false)

    useEffect(() => {
        if (props.isShowValidation) {
            let lengthRegex = new RegExp('.{8,20}');
            let alphabethRegex = new RegExp('[A-Za-z]');
            let specialRegex = new RegExp('[@#$%^&-+=()]');
            let hasTripleRegex = new RegExp('([a-z\\d])\\1\\1');

            setCharLengthPass(lengthRegex.test(props.password));
            setAlphabethPass(alphabethRegex.test(props.password));
            setSpecialCharPass(specialRegex.test(props.password));
            setNotContainPass(props.password.indexOf(props.username) == -1);
            setHasTripleCharPass(hasTripleRegex.test(props.password));
        }
    }, [props]);

    return (
        <div style={{ display: "block" }} >

            {props.isShowValidation ?
                <>
                    <LabelWithIcon error={!isCharLengthPass} label="Password length should range from 8 to 20 characters" />
                    <LabelWithIcon
                        error={!isAlphabethPass}
                        label="Password should contain at least one alphabet (a-z)"
                    />
                    <LabelWithIcon
                        error={!isSpecialCharPass}
                        label="Password should contain at least one special character"
                    />
                    <LabelWithIcon
                        error={!isNotContainPass}
                        label="Password should not contain your username"
                    />
                    <LabelWithIcon
                        error={true}
                        label="Password should not be match with your previously used password"
                    />
                    <LabelWithIcon
                        error={isHasTripleCharPass}
                        label="Password should not contain 3 or more identical characters consecutively (ex. Emploooooye, Sys@@@tem, abcabcabc, 123123123, etc.) "
                    />
                </> : null}
        </div >
    );
}

export default PasswordValidator