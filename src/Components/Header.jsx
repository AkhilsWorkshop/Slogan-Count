import { BiUndo } from "react-icons/bi"
import { FaRedo } from "react-icons/fa"

const Header = ({ count, undo, reset }) => {
    return (
        <>
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
        </>
    )
}

export default Header
