import { useState } from "react";
import { BiUndo } from "react-icons/bi"
import { FaRedo } from "react-icons/fa"

const App = () => {

  const [count, setCount] = useState(0);

  const onClick = () => {
    setCount(count + 1)
    navigator.vibrate(100);
  }

  const reset = () => {
    setCount(0)
    navigator.vibrate(300);
  }

  const undo = () => {
    setCount(count - 1)
    navigator.vibrate(100, 100);
  }

  return (

    <div>

      <div className="hidden lg:flex flex-col gap-5 h-screen w-screen justify-center items-center">
        <h1 className="text-4xl text-[#06283D]">Sorry, this app is designed for mobile only.</h1>
        <p className="text-xl text-[#06283D]">[Try resizing your browser orientation]</p>
      </div>

      <div className="flex flex-col lg:hidden h-screen w-screen">

        <div className="h-[10%] bg-[#FA7070] flex justify-center items-center">

          <h1 className="text-4xl text-[#DFF6FF] ">Slogan Count</h1>

        </div>
        <div className="h-[10%] flex justify-around items-center">

          <button className="bg-[#bead5a] h-full w-full flex flex-col justify-center items-center text-white"
            onClick={() => { count > 0 && undo() }}>
            <h1 className="text-xl font-bold">Undo</h1>
            <BiUndo size={25} />
          </button>

          <button className="bg-[#C6EBC5] h-full w-full flex flex-col justify-center gap-1 items-center text-gray-700"
            onClick={() => { count > 0 && reset() }}>
            <h1 className="text-xl font-bold">Reset</h1>
            <FaRedo size={15} />
          </button>

        </div>

        {
          count === 0 ?
            <button className="h-[70%] w-full bg-[#FBF2CF]" onClick={() => onClick()}><h1 className="text-[3rem] text-[#0f3753] px-4">Tap the screen to begin</h1></button>
            :
            <button className="h-[70%] w-full bg-[#FBF2CF]" onClick={() => onClick()}><h1 className={count > 999 ? "text-[7rem] text-[#0f3753]" : "text-[10rem] text-[#0f3753]"}>{count}</h1></button>
        }

        <div className="h-[10%] bg-[#A1C298] flex justify-center items-center">

          <h1 className="tracking-wider text-[#4d6c44]">Built by <a className="text-black" href="https://akhilkumar.ga">Akhil</a></h1>
        </div>

      </div>

    </div>


  );
}

export default App;
