import styled from "styled-components"
import background from "../../assets/banner.png"
const StyledFigure = styled.figure`
    background-image: ${props => `url(${props.$background})`};
    flex-grow: 1;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    min-height: 328px;
    margin: 0;
    border-radius: 20px;
    background-size: cover;
`
const StyledH1 = styled.h1`
    max-width: 300px;
    font-size: 40px;
    font-weight: 400;
    line-height: 48px;
    color: #fff;
    font-family: "GandhiSansRegular";
    padding: 0 70px;
    
`
const Banner = ({background, texto}) => {
    return(
        <StyledFigure $background={background}>
            <StyledH1>{texto}</StyledH1>
        </StyledFigure>
    )
}
export default Banner
