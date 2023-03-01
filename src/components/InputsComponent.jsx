import styled from "styled-components";
import React from "react";


const Inputs = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: 20px;
`;

const RangeInput = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 0 0 auto;
    @media(max-width: 768px) {
        font-size: 12px;
        width: 150px;
    }
    @media(max-width: 360px){
        font-size: 8px;
        width: 100px;
    }
`;

const MinMax = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items:center
`;

function InputsComponent({storageValue, setStorageValue, transferValue, setTransferValue}) {


    return (
        <Inputs>
            <RangeInput>
                <h2>Storage: {storageValue} GB</h2>
                <input
                    type="range"
                    min="0"
                    max="1000"
                    value={storageValue}
                    onChange={(e) => setStorageValue(e.target.value)}
                    style={{ width: "100%" }}
                />
                <MinMax>
                    <span>0</span>
                    <span>1000</span>
                </MinMax>
            </RangeInput>
            <RangeInput>
                <h2>Transfer: {transferValue} GB</h2>
                <input
                    type="range"
                    min="0"
                    max="1000"
                    value={transferValue}
                    onChange={(e) => setTransferValue(e.target.value)}
                    style={{ width: "100%" }}
                />
                <MinMax>
                    <span>0</span>
                    <span>1000</span>
                </MinMax>
            </RangeInput>
        </Inputs>
    );
}

export default InputsComponent;