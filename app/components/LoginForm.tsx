"use client"
import { useState, useEffect } from "react";
import styled from "styled-components";


const StyledHelperText = styled.h2`
    color: var(--color-black);
    text-shadow: 1px 2px 8px #78678E;
    font-size: calc(5px + 2vw);
    padding-bottom: 50px;
    font-family: var(--font-playfair), serif;
`

const StyledText = styled.p`
    color: var(--color-black);
    text-shadow: 1px 2px 8px #78678E;
    font-size: calc(2px + 1.5vw);
    margin: 20px;
    font-family: var(--font-playfair), serif;
`

const StyledButton = styled.button`
    margin: 20px;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: var(--color-bright-snow);
    margin: 5% auto;
    width: 80%;
    padding: 10%;
    border-radius: 30px;
`

export default function LoginForm() {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [domain, setDomain] = useState("");


    async function performLogin(){
        setLoading(true);
        setError("");

        try{
            const Res =  await createNewLink();
            if(Res.length > 0){
                setError(Res);
            }else{
                setShortURL(`${domain}/${alias}`);
            }
        }catch(err){
            console.error(err);
            setError("An error occurred while creating all. Please try again later.");
        }finally {
            setLoading(false);
        }
    }


    useEffect(() =>{
        setDomain(window.location.origin);
    }, []);


    return(
        <StyledDiv>
                <StyledHelperText>Login Page</StyledHelperText>
                <StyledText>Click on the button below to begin the login process through your Google account.</StyledText>

                <StyledButton
                    onClick={() =>
                        performLogin()
                    }
                >
                    {loading ? "Redirecting ..." : "Login with Google"}
                </StyledButton>
                {error && (
                    <StyledText>error</StyledText>
                )}
        </StyledDiv>
    )
}