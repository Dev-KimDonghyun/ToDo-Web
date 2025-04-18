import { useEffect, useState } from "react";

const DoInput = () => {

  const [ toDoInput, setToDoInput ] = useState<string>('');

  useEffect(() => {
    const localStorageValue: string | null = localStorage.getItem('DevKimDH_To_Do_Web_Value');
    if (localStorageValue !== null) {
      const localStorageJSONValue = JSON.parse(localStorageValue); // 문자열을 객체로 변환
      setToDoInput(localStorageJSONValue); 
    }
  }, []);

  const addToDoList = () => {
    //
  }

  return (

    <div>DoInput</div>

  );

}

export default DoInput;