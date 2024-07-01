import styled from "styled-components"
import CampoTexto from "../CampoTexto"

const StyledHeader = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img{
        max-width: 212px;
    }
`

const Cabecalho = ({setFiltro}) => {
    return(
        <StyledHeader>
            <img src="/imagens/logo.png" alt="logo spaceApp" />
            <CampoTexto setFiltro={setFiltro}/>
        </StyledHeader>
    )
}
export default Cabecalho