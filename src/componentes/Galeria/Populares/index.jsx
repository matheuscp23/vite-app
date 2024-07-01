import styled from "styled-components";
import Titulo from "../../Titulo";
import populares from "./fotos-populares.json"

const PopularesContainer = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 20px;
`
const Imgs = styled.img`
    cursor: pointer;
    max-width: 212px;
    border-radius: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: transform 0.2s ease-in-out;
    &:hover {
        transform: scale(1.05);
    }
`
const BotaoPopular = styled.button`
    background: transparent;
    border: 2px solid rgba(123, 120, 229, 1);
    border-radius: 10px;
    font-size: 20px;
    line-height: 24px;
    width: 100%;
    color: #fff;
    padding: 14px 29px;
    cursor: pointer;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: transform 0.2s ease-in-out;
    &:hover {
        transform: scale(1.05);
    }

`
const Populares = () => {
    return(
        <>
        
        <PopularesContainer>
            <Titulo $alinhamento='center'>Populares</Titulo>
              {populares.map((popular) => (
            <Imgs key={popular.id} src={popular.path} alt={popular.alt} />
        ))}
        <BotaoPopular>Ver mais</BotaoPopular>
        </PopularesContainer>
      
        </>
    )
}
export default Populares;