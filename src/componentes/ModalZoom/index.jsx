import styled from "styled-components";
import Imagem from "../Galeria/Imagem";
import fechar from "/icones/fechar.png"
const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
const DialogEstilizado = styled.dialog`
  justify-content: center;
  display: flex;
  position: fixed;
  top: 10px;
  background: transparent;
  border: none;
  width: 800px;
  padding: 0;
  transition: 0.2s ease-in-out;
  z-index: 1001;
  form {
        button {
            position: relative;
            top: 20px;
            right: 40px;
        }
    }
`

const BotaoIcone = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  position: relative;
  top: 30px;
  right: 50px;
`
const ModalZoom = ({ foto, aoFechar,  aoAlternarFavorito }) => {
  return (
    <>
      {foto && 
        <>
        <Overlay/>
          <DialogEstilizado open={!!foto} onClose={aoFechar}>
            <Imagem foto={foto} expandida={true} aoAlternarFavorito={aoAlternarFavorito}/>
            <form method="dialog">
              <BotaoIcone formMethod="dialog" type="submit">
                <img src={fechar} alt="fechar" />
              </BotaoIcone>
            </form>
          </DialogEstilizado>
        </>
      }
    </>
  );
};
export default ModalZoom;
