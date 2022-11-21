import { useEffect, useState } from "react";
import data from "./Json/test.json";

const Test = () => {
    const [newData, setNewData] = useState(data);
    const [filterData, setFilterData] = useState([]);
    const randIndex = (name) => Math.floor(Math.random() * name.length);
    const [savolNum, setSavolNum] = useState(0);

    useEffect(() => {
        let array = [];
        let newVariants = [];
        let limit = 10;
        for (let i = 0; i < limit; i++) {
            let index = randIndex(newData);

            let re = array.find(item => item.savol === newData[index]?.savol);

            if (!re) {
                // let variants = [];
                // variants = newData[index].variantlar;
                // let inLimit = variants.length;
                // for (let j = 0; j<inLimit; j++) {

                //     let inIndex = randIndex(variants);
                //     let re = newVariants.find(item => item.variant === variants[inIndex]?.variant);

                //     if (!re){
                //         newVariants.push(variants[inIndex]);
                //     }else{
                //         inLimit++
                //     }
                // }
                array.push(newData[index]);
            } else
                limit++;
        }
        setFilterData(array);
        console.log(array);
    }, [newData]);

    return (
        <>
            test
        </>
    )
};

export default Test;