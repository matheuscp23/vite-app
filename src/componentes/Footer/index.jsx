import styled from "styled-components"
import fb from "/imagens/sociais/facebook.svg"
import tw from "/imagens/sociais/twitter.svg"
import inst from "/imagens/sociais/instagram.svg"

const StyledFooter = styled.footer`
    display: flex;
    margin-top: 73px;
    justify-content: space-between;
    background-color:rgba(4, 36, 79, 1);
    align-items: center;
`
const Sociais = styled.div`
    display: flex;
    gap: 35px;
    padding: 20px 46px;
    img{
        max-width: 32px;
        cursor: pointer;
        transition: 0.2s ease-in-out;

        &:hover{
            transform: scale(1.1);
        }
    }
`
const H3 = styled.h3`
    padding: 0 46px;
    font-size: 16px;
    line-height: 20px;
    text-align: right;
    color: #ffff;
    font-weight: 500;

    a{
        text-decoration: none;
        font-size: 16px;
        line-height: 20px;
        text-align: right;
        color: #ffff;
        font-weight: 500;

        &:hover{
            color: #C98CF1;
        }
    }
`
const Footer = () => {
    return(
        <StyledFooter>
            <Sociais>
                <img src={fb} alt="logo facebook" />
                <img src={tw} alt="logo twitter" />
                <img src={inst} alt="logo instagram" />
            </Sociais>
            <H3>Desenvolvido por <a href="https://github.com/matheuscp23?tab=repositories">Matheus.</a></H3>
        </StyledFooter>
    )
}
export default Footer