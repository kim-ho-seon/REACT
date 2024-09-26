import { Navigate, useNavigate } from "react-router-dom"
import styled from "styled-components"

const CardContainer = styled.section`
    width: 150px;
    border: 1px solid gray;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding-bottom: 10px;
    border-radius: 10px;
    img{
        width: 120px;
    }

`
export const Card = ({pokemon}) => {
    const naigate = useNavigate()
    return (
        <CardContainer onClick={()=>naigate(`/detail/${pokemon.id}`)}>
            <img src={pokemon.front} alt="" />
            <div>{pokemon.name}</div>
        </CardContainer>
    )
}