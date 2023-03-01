import React from 'react';
import styled from 'styled-components';
import backblazeImg from '../assets/img/backblaze.png';
import bunnyImg from '../assets/img/bunny.jpeg';
import scalewayImg from '../assets/img/scaleway.png';
import vultrImg from '../assets/img/vultr.png';


const Container = styled.div`
    margin-top: 70px;
    display: flex;
    flex-direction:column;
    @media(max-width: 768px){
        font-size:12px;
        h2{
            font-size: 15px;
        }
        flex-direction: row;
    }
`;

const Element = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    min-width: 630px;
    justify-content: center;
    @media(max-width: 768px){
        flex-direction: column-reverse;
        gap: 10px;
        justify-content: flex-start;
        align-items:center;
        min-width: 0;
        min-height: 530px;
    }
`;

const Title = styled.div`
    min-width: 125px;
    @media(max-width: 768px){
        min-height: 80px;
        text-align: center;
        & label {
            font-size: 8px;
        }
        @media(max-width: 360px){
            display: flex;
            flex-direction: column;
            min-height: 100px;
            & h2 {
                font-size: 10px;
            }
        }
    }
`

const IconTemp = styled.div`
    width: 30px;
    height: 30px;
    & img{
        width: 100%;
    }
`;

const Column = styled.div`
    display: flex;
    align-items: center;
    width: 400px;
    height: 20px;
    gap: 10px;
    flex: 0 0 auto;
    @media(max-width: 768px){
        width: 20px;
        height: 400px;
        flex-direction: column-reverse;
        justify-content: flex-start;
        & span{
            font-size: 10px;
        }
    }
`

const ColumnSize = styled.div`
    width: ${({ width }) => width}%;
    height: 20px;
    background-color: ${({ bgcolor }) => bgcolor};
    transition: all 0.3s ease-in-out;
    @media(max-width: 768px){
        width: 20px;
        height: ${({ width }) => width}%;
    }
`


function Histogram({ selectedOptionForBunny, setSelectedOptionForBunny, selectedOptionForScaleWay, setSelectedOptionForScaleWay, sizeForBackblaze, sizeForBunny, sizeForScaleway, sizeForVultr, priceForBackblaze, priceForBunny, priceForScaleway, priceForVultr, minPriceProvider }) {

    const handleOptionChangeForBunny = (e) => {
        setSelectedOptionForBunny(e.target.value);
    };

    const handleOptionChangeForScaleWay = (e) => {
        setSelectedOptionForScaleWay(e.target.value);
    };


    return (
        <Container>
            <Element>
                <Title>
                    <h2>backblaze</h2>
                </Title>
                <IconTemp>
                    <img src={backblazeImg} alt="backblaze"></img>
                </IconTemp>
                <Column>
                    <ColumnSize width={sizeForBackblaze} bgcolor={minPriceProvider === "Backblaze" ? "red" : "grey"} />
                    <span>{priceForBackblaze} $</span>
                </Column>
            </Element>
            <Element>
                <Title>
                    <h2>bunny</h2>
                    <label>
                        <input
                            type="radio"
                            value="HDD"
                            checked={selectedOptionForBunny === 'HDD'}
                            onChange={handleOptionChangeForBunny}
                        />
                        HDD
                    </label>

                    <label>
                        <input
                            type="radio"
                            value="SSD"
                            checked={selectedOptionForBunny === 'SSD'}
                            onChange={handleOptionChangeForBunny}
                        />
                        SSD
                    </label>
                </Title>
                <IconTemp>
                    <img src={bunnyImg} alt="bunnyImg"></img>
                </IconTemp>
                <Column>
                    <ColumnSize width={sizeForBunny} bgcolor={minPriceProvider === "Bunny" ? "orange" : "grey"} />
                    <span>{priceForBunny} $</span>
                </Column>
            </Element>
            <Element>
                <Title>
                    <h2>scaleway</h2>
                    <label>
                        <input
                            type="radio"
                            value="Multi"
                            checked={selectedOptionForScaleWay === 'Multi'}
                            onChange={handleOptionChangeForScaleWay}
                        />
                        Multi
                    </label>

                    <label>
                        <input
                            type="radio"
                            value="Single"
                            checked={selectedOptionForScaleWay === 'Single'}
                            onChange={handleOptionChangeForScaleWay}
                        />
                        Single
                    </label>
                </Title>
                <IconTemp>
                    <img src={scalewayImg} alt="scalewayImg"></img>
                </IconTemp>
                <Column>
                    <ColumnSize width={sizeForScaleway} bgcolor={minPriceProvider === "Scaleway" ? "purple" : "grey"} />
                    <span>{priceForScaleway} $</span>
                </Column>
            </Element>
            <Element>
                <Title>
                    <h2>vultr</h2>
                </Title>
                <IconTemp>
                    <img src={vultrImg} alt="vultrImg"></img>
                </IconTemp>
                <Column>
                    <ColumnSize width={sizeForVultr} bgcolor={minPriceProvider === "Vultr" ? "blue" : "grey"} />
                    <span>{priceForVultr} $</span>
                </Column>
            </Element>
        </Container>
    )
}

export default React.memo(Histogram);