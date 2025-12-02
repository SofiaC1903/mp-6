"use client";
import { useState} from "react";
import styled from "styled-components";
import {signIn} from "next-auth/react";


const StyledHelperText = styled.h2`
    color: var(--color-black);
    font-size: calc(5px + 2vw);
    padding-bottom: 20px;
    font-family: var(--font-playfair), serif;
`

const StyledText = styled.p`
    color: var(--color-black);
    font-size: calc(2px + 1.5vw);
    margin: 25px;
    font-family: var(--font-playfair), serif;
`

export const StyledButton = styled.button`
    margin: 10px;
    padding: 10px;
    background-color: var(--color-royal-gold);
    border-radius: 15px;
    color: var(--color-black);
    font-family: var(--font-playfair), serif;
    height: 15%;
    width: 30%;
`

const StyledDiv = styled.div`
    font-family: var(--font-playfair), serif;
    font-size: calc(2px + 2vw);
    box-shadow: 1px 2px 8px #78678E;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-bright-snow);
    margin: 5% auto;
    width: 80%;
    padding: 8%;
    border-radius: 30px;
`

export default function LoginForm() {

    const [loading, setLoading] = useState(false);

    const HandleAPI = async () => {
        try{
            setLoading(true);
            await signIn("google")
        }catch(err){
        console.error(err);
        }
    }

    return(
        <StyledDiv>
                <StyledHelperText>Login Page</StyledHelperText>

                <StyledText>Click on the button below to begin the login process through your Google account.</StyledText>

                <StyledButton
                    onClick={() =>
                        HandleAPI()
                    }
                    disabled={loading}
                >
                    {loading ? "Redirecting ..." : "Login with Google"}
                </StyledButton>
        </StyledDiv>
    )
}