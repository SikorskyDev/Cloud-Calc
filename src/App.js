import styled from "styled-components";
import React from "react";
import InputsComponent from "./components/InputsComponent";
import Histogram from "./components/Histogram";

const Wrapper = styled.div`
    min-height: 100vh;
    overflow: clip;
`;
const Calc = styled.div`
    max-width: 1310px;
    margin: 15px auto;
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    @media(max-width: 768px) {
        flex-direction:column-reverse;
    }
`;

function App() {
    function roundToTwo(num) {
        return +(Math.round(num * 100) / 100).toFixed(2);
    }

    //! -------------Значення input type range Storage i Transfer ------------------
    const [storageValue, setStorageValue] = React.useState(0);
    const [transferValue, setTransferValue] = React.useState(0);

    //! -------------Значення input type radio Bunny i ScaleWay ------------------
    const [selectedOptionForBunny, setSelectedOptionForBunny] =
        React.useState("HDD");
    const [selectedOptionForScaleWay, setSelectedOptionForScaleWay] =
        React.useState("Single");

    //! ------------- Розміри колонок гістограми ------------------
    const [sizeForBackblaze, setSizeForBackblaze] = React.useState(0);
    const [sizeForBunny, setSizeForBunny] = React.useState(0);
    const [sizeForScaleway, setSizeForScaleway] = React.useState(0);
    const [sizeForVultr, setSizeForVultr] = React.useState(0);

    //! ------------- Ціни біля колонок гістаграми ------------------
    const [priceForBackblaze, setPriceForBackblaze] = React.useState(0);
    const [priceForBunny, setPriceForBunny] = React.useState(0);
    const [priceForScaleway, setPriceForScaleway] = React.useState(0);
    const [priceForVultr, setPriceForVultr] = React.useState(0);

    //! ------------- Функції розрахунку цін та задання розміру колонкам відповідно до цін ------------------
    const calculateBackblazePrice = () => {
        const storageStep = 0.005;
        const transferStep = 0.01;

        let price = storageStep * storageValue + transferStep * transferValue;

        if (storageValue == 0 && transferValue == 0) {
            setPriceForBackblaze(0);
            setSizeForBackblaze(0);
        } else if (price <= 7) {
            setPriceForBackblaze(7);
            setSizeForBackblaze(7);
        } else {
            setPriceForBackblaze(roundToTwo(price));
            setSizeForBackblaze(roundToTwo(price));
        }
    };

    const calculateBunnyHDDPrice = () => {
        const storageStep = 0.01;
        const transferStep = 0.01;
        let price = storageStep * storageValue + transferStep * transferValue;
        if (price <= 10) {
            setPriceForBunny(roundToTwo(price));
            setSizeForBunny(roundToTwo(price));
        } else {
            setPriceForBunny(10);
            setSizeForBunny(10);
        }
    };
    const calculateBunnySSDPrice = () => {
        const storageStep = 0.02;
        const transferStep = 0.01;
        let price = storageStep * storageValue + transferStep * transferValue;
        if (price <= 10) {
            setPriceForBunny(roundToTwo(price));
            setSizeForBunny(roundToTwo(price));
        } else {
            setPriceForBunny(10);
            setSizeForBunny(roundToTwo(10));
        }
    };

    const calculateScalewayMultiPrice = () => {
        const storageStep = 0.06;
        const transferStep = 0.02;

        let price =
            storageStep * (storageValue - 75) +
            transferStep * (transferValue - 75);
        if (price <= 0) {
            setPriceForScaleway(0);
            setSizeForScaleway(0);
        } else {
            setPriceForScaleway(roundToTwo(price));
            setSizeForScaleway(roundToTwo(price));
        }
    };
    const calculateScalewaySinglePrice = () => {
        const storageStep = 0.03;
        const transferStep = 0.02;

        let price =
            storageStep * (storageValue - 75) +
            transferStep * (transferValue - 75);
        if (price <= 0) {
            setPriceForScaleway(0);
            setSizeForScaleway(0);
        } else {
            setPriceForScaleway(roundToTwo(price));
            setSizeForScaleway(roundToTwo(price));
        }
    };

    const calculateVultrPrice = () => {
        const storageStep = 0.01;
        const transferStep = 0.01;

        let price = storageStep * storageValue + transferStep * transferValue;
        if (storageValue == 0 && transferValue == 0) {
            setPriceForVultr(0);
            setSizeForVultr(0);
        } else if (price <= 5) {
            setPriceForVultr(5);
            setSizeForVultr(5);
        } else {
            setPriceForVultr(roundToTwo(price));
            setSizeForVultr(roundToTwo(price));
        }
    };

    React.useEffect(() => {
        calculateBackblazePrice();
        calculateVultrPrice();
        if (selectedOptionForBunny === "HDD") {
            calculateBunnyHDDPrice();
        } else {
            calculateBunnySSDPrice();
        }
        if (selectedOptionForScaleWay === "Single") {
            calculateScalewaySinglePrice();
        } else {
            calculateScalewayMultiPrice();
        }
    }, [storageValue, transferValue, selectedOptionForBunny, selectedOptionForScaleWay]);

    const providers = [
        { name: "Backblaze", price: priceForBackblaze },
        { name: "Bunny", price: priceForBunny },
        { name: "Scaleway", price: priceForScaleway },
        { name: "Vultr", price: priceForVultr },
    ];
    providers.sort((a, b) => a.price - b.price);

    const minPriceProvider = providers[0].name;

    return (
        <Wrapper>
            <Calc>
                <InputsComponent
                    storageValue={storageValue}
                    setStorageValue={(value) => setStorageValue(value)}
                    transferValue={transferValue}
                    setTransferValue={(value) => setTransferValue(value)}
                />
                <Histogram
                    selectedOptionForBunny={selectedOptionForBunny}
                    setSelectedOptionForBunny={(value) =>
                        setSelectedOptionForBunny(value)
                    }
                    selectedOptionForScaleWay={selectedOptionForScaleWay}
                    setSelectedOptionForScaleWay={(value) =>
                        setSelectedOptionForScaleWay(value)
                    }
                    sizeForBackblaze={sizeForBackblaze}
                    sizeForBunny={sizeForBunny}
                    sizeForScaleway={sizeForScaleway}
                    sizeForVultr={sizeForVultr}
                    priceForBackblaze={priceForBackblaze}
                    priceForBunny={priceForBunny}
                    priceForScaleway={priceForScaleway}
                    priceForVultr={priceForVultr}
                    minPriceProvider={minPriceProvider}
                />
            </Calc>
        </Wrapper>
    );
}

export default App;
