import styled from "styled-components";

const ItemListaEstilizado = styled.li`
  font-size: 24px;
  line-height: 29px;
  cursor: pointer;
  margin-bottom: 30px;
  color: ${props => props.$ativo ? "#7b78e5" : "#d9d9d9"};
  display: flex;
  align-items: center;
  gap: 22px;

`;

const ItemNavegacao = ({children, iconeAtivo, iconeInativo, ativo, onClick}) => {
  return (
    <ItemListaEstilizado $ativo={ativo} onClick={onClick}>
      <img src={ativo ? iconeAtivo : iconeInativo} alt="icone de navegação" />
      {children}
    </ItemListaEstilizado>
  );
};
export default ItemNavegacao;
