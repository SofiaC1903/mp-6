"use client"
import styled from "styled-components";
import {useSession} from "next-auth/react";

const Img = styled.img`
    max-width: 60%;
    justify-content: center;
`

const StyledText = styled.p`
    color: black;
    font-size: calc(2px + 1.5vw);
    margin: 25px;
    font-family: "Playfair Display SC", serif;
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
                <StyledText>Loading...</StyledText>
            </StyledDiv>
        );
    }

    if(status==="unauthenticated"){
        return (
            <StyledDiv>
                <StyledText>You are not currently logged in.</StyledText>
            </StyledDiv>
        )
    }

    return (
        <StyledDiv>
            <StyledText>Welcome {session?.user?.name} with email {session?.user?.email}. Congrats on successfully logging in!</StyledText>
            <Img src={`${session?.user?.image}`} alt={`User ${session?.user?.name}`}/>
            <StyledText>Cool image and email!</StyledText>
        </StyledDiv>
    )


}