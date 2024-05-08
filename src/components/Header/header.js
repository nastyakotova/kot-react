import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
// import styles from './styles.module.css';

// styled-components - Стилизованные компоненты
const Lera = styled.div`
    font-size: 24px;
    font-weight: 600;
`;

export const Header = ({ sourse }) => {

    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const loadData = useCallback(async () => {
        setIsLoading(true);

        const kot = await fetch(sourse);
        if (kot.status === 200) {
            const dataKot = await kot.json();
            setData(dataKot);
        }

        setIsLoading(false);
    }, [sourse]);

    useEffect(() => {
        loadData();
    }, [loadData]);

    const increment = () => {
        setCount(count + 1);
        setData([]);
        loadData();
        // setCount((prev) => prev + 1);
    }

    return (
        <div>
            <Lera>{count}</Lera>

            {/* module - Модульные стили */}
            {/* <p className={styles.count}>{count}</p> */}

            <button onClick={increment}>Click!</button>

            {isLoading && <p>Loading...</p>}

            <div>
                {data.map((element) => (
                    <p key={element.id}>{element.name}</p>
                ))}
            </div>
        </div>
    );
}