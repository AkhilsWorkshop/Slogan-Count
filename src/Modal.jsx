import React from 'react'

const Modal = ({ showModal, setUserCount, userInput, userUnlimited }) => {
    return (
        <div>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
                            >

                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Set Total Counts
                                    </h3>
                                </div>

                                <div className="relative p-6 flex-auto">
                                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="Eg: 108" required
                                        onChange={e => setUserCount(e.target.value)} />
                                </div>

                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">

                                    <button
                                        className="bg-emerald-700 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow outline-none mr-1 mb-1 ease-linear"
                                        type="submit"
                                        onClick={() => userInput()}
                                    >
                                        Set Count
                                    </button>

                                    <button
                                        className="bg-[#87c676] text-white font-bold uppercase text-sm px-6 py-3 rounded shadow outline-none mr-1 mb-1 ease-linear"
                                        type="button"
                                        onClick={() => userUnlimited()}
                                    >
                                        Unlimited
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </div>
    )
}

export default Modal
