import { useEffect, useState } from "react";
import './../styles/index.css';

const MainPage = () => {

    const [ test, setTest ] = useState<string>('');

    useEffect(() => {
        localStorage.setItem('DevKim', '테스트 값');
        const storageValue: string | null = localStorage.getItem('DevKim');
        console.log('첫번째 console.log', storageValue);
        if (storageValue !== null) {
            setTest(storageValue);
        }
    }, []); // []가 비어있으므로 처음 화면에 나타났을때만 실행되는 코드인거임

    console.log('두번째 console.log', test);

    return (
        <h1>{ test }</h1>
    );

}

export default MainPage;