"use client"
import styled from "styled-components";

const Div = styled.div`
    display: flex;
    align-items: flex-start;
    background-color: var(--color-sky-blue);
    margin: 0 auto;
    padding: 2%;
`


export default function Header(){
    return(
        <Div>
            <p className={"text-black text-5xl italic font-bold m-2 p-2"}>MP-6: OAuth Application</p>
        </Div>
    )
}