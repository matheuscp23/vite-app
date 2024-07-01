import styled from "styled-components";
import EstilosGlobais from "./componentes/EstilosGlobais";
import Cabecalho from "./componentes/Cabecalho";
import BarraLateral from "./componentes/BarraLateral";
import Banner from "./componentes/Banner";
import Galeria from "./componentes/Galeria";
import background from "./assets/banner.png";
import fotos from "./fotos.json";
import { useEffect, useState } from "react";
import ModalZoom from "./componentes/ModalZoom";
import Footer from "./componentes/Footer";

const FundoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;
const AppContainer = styled.div`
  width: 1250px;
  margin: 0 auto;
  max-width: 100%;
`;
const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;
const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
const App = () => {
  const [fotosGaleria, setFotosGaleria] = useState(fotos);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);
  const [ tag, setTag] = useState(0);
  const [ filtro, setFiltro] = useState('');

  useEffect(()=>{
    const fotosFiltradas = fotos.filter(foto =>{
      const filtroPorTag = !tag || foto.tagId === tag;
      const filtrarPorTitulo = !filtro || foto.titulo.toLowerCase().includes(filtro.toLowerCase());
      return filtroPorTag && filtrarPorTitulo;
    })
    setFotosGaleria(fotosFiltradas)
  }, [filtro, tag])


  const aoAlternarFavorito = (foto) => {
      if (foto.id === fotoSelecionada?.id) {
        setFotoSelecionada({
          ...fotoSelecionada,
          favorita: !fotoSelecionada.favorita
        })
      }
      setFotosGaleria(fotosGaleria.map(fotosGaleria =>{
        return{
          ...fotosGaleria,
          favorita: fotosGaleria.id === foto.id ? !foto.favorita : fotosGaleria.favorita
        }
      }))
  }
  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho
          filtro={filtro}
          setFiltro={setFiltro}
        />
        <MainContainer>
          <BarraLateral/>
          <MainSection>
            <Banner
              texto={"A galeria mais completa de fotos do espaço!"}
              background={background}
            />
            <Galeria
              aoFotoSelecionada={(foto) => setFotoSelecionada(foto)}
              aoAlternarFavorito={aoAlternarFavorito}
              fotos={fotosGaleria}
              setTag={setTag}
            />
          </MainSection>
        </MainContainer>
      </AppContainer>
      <ModalZoom
        foto={fotoSelecionada}
        aoAlternarFavorito={aoAlternarFavorito}
        aoFechar={() => setFotoSelecionada(null)}
      />
      <Footer />
    </FundoGradiente>
  );
}

export default App;
