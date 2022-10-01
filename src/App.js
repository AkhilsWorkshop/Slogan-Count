import { useState } from "react";

import Desktop from "./Components/Desktop";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Modal from "./Modal";

const App = () => {

  const [showModal, setShowModal] = useState(true);

  const [userCount, setUserCount] = useState(9999);

  const [count, setCount] = useState(0);

  const userInput = () => {
    setShowModal(false)
  }

  const userUnlimited = () => {
    setShowModal(false)
  }

  const onClick = () => {
    if (count < userCount - 1) {
      setCount(count + 1)
      navigator.vibrate(100);
    }
    else {
      setCount("Done")
      navigator.vibrate(400);
    }
  }

  const reset = () => {
    setCount(0)
    navigator.vibrate(300);
  }

  const undo = () => {
    setCount(count - 1)
    navigator.vibrate(200);
  }

  return (

    <div>

      <Desktop />

      <div className="flex flex-col lg:hidden h-screen w-screen">

        <Header count={count} undo={undo} reset={reset} />


        {
          count === 0 ?
            <button className="h-[70%] w-full bg-[#FBF2CF]" onClick={() => onClick()}><h1 className="text-[3rem] text-[#0f3753] px-4">Tap the screen to begin</h1></button>
            :
            <button className="h-[70%] w-full bg-[#FBF2CF]" onClick={() => onClick()}><h1 className={count > 999 ? "text-[7rem] text-[#0f3753]" : "text-[10rem] text-[#0f3753]"}>{count}</h1></button>
        }

        <Footer />

        <Modal showModal={showModal} setUserCount={setUserCount} userInput={userInput} userUnlimited={userUnlimited} />

      </div>

    </div>


  );
}

export default App;
