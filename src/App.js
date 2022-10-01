import { useState } from "react";

const App = () => {

  const [count, setCount] = useState(0);

  const onClick = () => {
    setCount(count + 1)
    navigator.vibrate(200);
  }

  return (

    <div>

      <div className="hidden lg:flex flex-col gap-5 h-screen w-screen justify-center items-center">
        <h1 className="text-4xl text-[#06283D]">Sorry, this app is designed for mobile/tab only.</h1>
        <p className="text-xl text-[#06283D]">[Try resizing your browser to test! ;)]</p>
      </div>

      <div className="flex flex-col lg:hidden h-screen w-screen">

        <div className="h-[20%] bg-[#06283D] flex justify-center items-center">

          <h1 className="text-4xl text-[#DFF6FF] ">Slogan Counter</h1>

        </div>

        <button className="h-[80%] w-full bg-[#256D85]" onClick={() => onClick()}><h1 className="text-[20rem] text-[#DFF6FF]">{count}</h1></button>

      </div>

    </div>


  );
}

export default App;
