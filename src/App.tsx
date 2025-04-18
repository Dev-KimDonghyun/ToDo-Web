import { useEffect, useState } from "react";

function App () {

  const [ toDoList, setToDoList ] = useState<string[]>([]);
  const [ toDoInput, setToDoInput ] = useState<string>('');

  useEffect(() => {
    const localStorageValue: string | null = localStorage.getItem('DevKimDH_To_Do_Web_Value');
    if (localStorageValue !== null) {
      const savedValue = JSON.parse(localStorageValue);
      setToDoList(savedValue);
    }
  }, []);

  const uploadToList = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newList = [...toDoList, toDoInput];
    setToDoInput('');
    setToDoList(newList);
    localStorage.setItem(('DevKimDH_To_Do_Web_Value'), JSON.stringify(newList));
  }

  return (
    <div>
      <div>
        <form onSubmit={uploadToList}>
          <input
          onChange={(e) => {
            setToDoInput(e.target.value)
            console.log(e.target.value)
          }} // e.target == <input/>
          value={toDoInput}
          required>
          </input>
          <button
          type='submit'>
            버튼임
          </button>
        </form>
        <h1>테스트</h1>
      </div>
    </div>
  );

}

export default App;
