import styled from "styled-components";
import expandir from "/icones/expandir.png"

const Figure = styled.figure`
    width: ${props => props.$expandida ? '90%' : '380px'};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    transition: 0.2s ease-out;
    border-radius: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);;

    &:hover {
        transform: ${props => props.$expandida ? 'scale(1)' : 'scale(1.05)'};
    }
    & > img {
        cursor: pointer;
        max-width: 100%;
        border-radius: 20px 20px 0 0;
    }
    figcaption {
        background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 12px;
        h3 {
            font-family: 'GandhiSansBold';
        }
        h4 {
            flex-grow: 1;
        }
        h3, h4 {
            margin: 0;
            font-size: 16px;
        }
    }
`

const Rodape = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const BotaoIcone = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    justify-content: center;
    align-items: center;
`

const Imagem = ({ foto, expandida = false, aoZoomSolicitado, aoAlternarFavorito }) => {
    const iconeFavorito = foto.favorita ? '/icones/favorito-ativo.png' : '/icones/favorito.png' 
    return (<Figure $expandida={expandida} id={`foto-${foto.id}`}>
        <img src={foto.path} alt={foto.alt} onClick={()=> aoZoomSolicitado(foto)}/>
        <figcaption>
            <h3>{foto.titulo}</h3>
            <Rodape>
                <h4>{foto.fonte}</h4>
                <BotaoIcone onClick={()=> aoAlternarFavorito(foto)}>
                    <img src={iconeFavorito} alt="Icone de favorito" />
                </BotaoIcone>
                {!expandida && <BotaoIcone aria-hidden={expandida} onClick={()=> aoZoomSolicitado(foto)}>
                    <img src={expandir} alt="Icone de expandir" />
                </BotaoIcone>}
            </Rodape>
        </figcaption>
    </Figure>)
}
export default Imagem;
