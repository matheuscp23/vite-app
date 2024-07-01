import styled from "styled-components";
import search from "../../assets/search.png";
const ContainerCampoTexto = styled.div`
  display: inline-block;
  position: relative;
`;
const StyledInput = styled.input`
  border-radius: 10px;
  width: 556px;
  height: 56px;
  padding: 12px 16px;
  box-sizing: border-box;
  border: 2px solid #c98cf1;
  background: transparent;
  color: #d9d9d9;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
`;
const StyledButton = styled.img`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
`;

const CampoTexto = ({setFiltro}) => {
  return (
    <ContainerCampoTexto>
      <StyledInput onChange={(evento) => { setFiltro(evento.target.value) }} placeholder="O que você procura?" type="text" />
      <StyledButton src={search} alt="lupa rosa" />
    </ContainerCampoTexto>
  );
};
export default CampoTexto;
