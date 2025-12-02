"use client"
import styled from "styled-components";
import {useSession} from "next-auth/react";

const Img = styled.img`
    max-width: 60%;
    justify-content: center;
`

const StyledDiv = styled.div`
    font-size: calc(2px + 2vw);
    box-shadow: 1px 2px 8px #78678E;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F9F9F9;;
    margin: 5% auto;
    width: 80%;
    padding: 8%;
    border-radius: 30px;
`

export default function Profile(){
    const {data: session, status} = useSession();


    if (status === "loading"){
        return (
            <StyledDiv>
                <p className={"text-black font-playfair m-2 p-2"}>Loading...</p>
            </StyledDiv>
        );
    }

    if(status === "unauthenticated"){
        return (
            <StyledDiv>
                <p className={"text-black font-playfair m-2 p-2"}>You are not currently logged in.</p>
            </StyledDiv>
        )
    }

    return (
        <StyledDiv>
            <p className={"text-black font-playfair m-2 p-2"}>Welcome {session?.user?.name} with email {session?.user?.email}. Congrats on successfully logging in!</p>
            <Img src={`${session?.user?.image}`} alt={`User ${session?.user?.name}`}/>
            <p className={"text-black font-playfair m-2 p-2"}>Cool image and email!</p>
        </StyledDiv>
    )


}