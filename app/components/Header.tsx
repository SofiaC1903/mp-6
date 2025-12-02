"use client"
import styled from "styled-components";

const Div = styled.div`
    display: flex;
    align-items: flex-start;
    background-color: var(--color-sky-blue);
    margin: 0 auto;
    padding: 2%;
`

const Title = styled.h1`
    color: var(--color-black);
    font-family: var(--font-playfair), serif;
    font-style: italic;
    font-weight: 900;
    font-size: calc(2px + 4vw);
`

export default function Header(){
    return(
        <Div>
            <Title>MP-6: OAuth Application</Title>
        </Div>
    )
}