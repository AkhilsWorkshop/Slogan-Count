import { useState } from "react";

const App = () => {

  const [count, setCount] = useState(0);

  const onClick = () => {
    setCount(count + 1)
  }

  return (

    <div className="h-screen w-screen">

      <div className="h-[20%] bg-[#06283D] flex justify-center items-center">

        <h1 className="text-4xl text-[#DFF6FF] ">Slogan Counter</h1>

      </div>

      <button className="h-[80%] w-full bg-[#256D85]" onClick={() => onClick()}><h1 className="text-[20rem] text-[#DFF6FF]">{count}</h1></button>

    </div>
  );
}

export default App;
