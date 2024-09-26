import { useState } from "react"
import styled from "styled-components"


const FilpImagContainer = styled.div`
    width: 200px;
    position: relative;
    transform-style: preserve-3d;
    transition: .5s;
    transform: ${props => props.flipped ? 'rotateY(180deg)' : 'rotateY(0)' };
`

const FrontImage= styled.img`
    width: 100%;
    backface-visibility: hidden;
    position: absolute;
`

const BackImage = styled.img`
    width: 100%;
    backface-visibility: hidden;
    transform: rotateY(180deg);
`

export default function FlipCard({ front, back}){
    const [flipped, setFlipped] = useState(false)
    return (
      <>
          <FilpImagContainer flipped={flipped}>
              <FrontImage src={front} />
              <BackImage src={back} />
          </FilpImagContainer>
          <button onClick={()=>setFlipped( prev=> !prev )}>뒤집기</button>
      </>
    )
}