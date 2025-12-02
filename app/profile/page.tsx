"use client"
import { StyledText, StyledDiv } from "@/app/components/LoginForm";
import styled from "styled-components";
import {useSession} from "next-auth/react";

const Img = styled.img`
    max-width: 60%;
    justify-content: center;
`


export default function Profile(){
    const {data: session, status} = useSession();

    if(status!="authenticated"){
        return (
            <StyledDiv>
                <StyledText>You are not currently logged in.</StyledText>
            </StyledDiv>
        )
    }

    return (
        <StyledDiv>
            <StyledText>Welcome {session?.user?.name} with email ${session?.user?.email}. Congrats on successfully logging in!</StyledText>
            <Img src={`${session?.user?.image}`} alt={`User ${session?.user?.name}`}/>
            <StyledText>Cool image and email!</StyledText>
        </StyledDiv>
    )


}