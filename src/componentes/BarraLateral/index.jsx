import styled from "styled-components"
import ItemNavegacao from "./ItemNavegacao"
import { useState } from "react";

const StyledList = styled.ul`
    list-style: none;
    width: 212px;
    padding: 0;
    margin: 0;
`

const BarraLateral = ({}) => {
    const [itemSelecionado, setItemSelecionado] = useState(null);

    const handleItemClick = (item) => {
      setItemSelecionado(item);
    };
    return(
        <aside>
            <nav>
                <StyledList>
                    <ItemNavegacao
                        iconeAtivo={'/icones/home-ativo.png'}
                        iconeInativo={'/icones/home-inativo.png'}
                        ativo={itemSelecionado === 'home'}
                        onClick={() => handleItemClick('home')}
                    >
                        Início
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo={'/icones/mais-vistas-ativo.png'}
                        iconeInativo={'/icones/mais-vistas-inativo.png'}
                        ativo={itemSelecionado === 'mais-vistas'}
                        onClick={() => handleItemClick('mais-vistas')}
                   
                    >
                        Mais vistas
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo={'/icones/mais-curtidas-ativo.png'}
                        iconeInativo={'/icones/mais-curtidas-inativo.png'}
                        ativo={itemSelecionado === 'mais-curtidas'}
                        onClick={() => handleItemClick('mais-curtidas')}
                    >
                        Mais curtidas
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo={'/icones/novas-ativo.png'}
                        iconeInativo={'/icones/novas-inativo.png'}
                        ativo={itemSelecionado === 'novas'}
                        onClick={() => handleItemClick('novas')}
                    >
                       Novas
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo={'/icones/surpreenda-me-ativo.png'}
                        iconeInativo={'/icones/surpreenda-me-inativo.png'}
                        ativo={itemSelecionado === 'surpreenda-me'}
                        onClick={() => handleItemClick('surpreenda-me')}
                    >
                        Surpreenda-me
                    </ItemNavegacao>
                </StyledList>
            </nav>
        </aside>
    )
}
export default BarraLateral
