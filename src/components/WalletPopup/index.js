/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function WalletPopup({open,setOpen}) {

  const cancelButtonRef = useRef(null)


  const handleClose = () => {
      setOpen(false);
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-96" style={{borderRadius:'4rem'}}>
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-72 flex flex-col items-center gap-6 pt-5 pb-16 pl-3">
                    <div className="flex justify-between w-full">
                       <div className="flex gap-3 items-center">
                            <img src="wallet.svg" alt="wallet" />
                            <p className="text-lg">Select Wallet</p>
                       </div>
                       <img src="cross.svg" alt="Cross" onClick={handleClose} className="cursor-pointer" />
                    </div>
                    <div className="flex flex-col w-full gap-6">
                      <button className="border-2 border-popup-red rounded-full flex justify-between px-7 py-3 items-center" onClick={handleClose}>
                         <p className="font-medium">MetaMask</p>
                         <img src="meta.svg" alt="wallet" width={25} />
                      </button>
                      <button className="border-2 border-popup-red rounded-full flex justify-between px-7 py-3 items-center" onClick={handleClose}>
                        <p className="font-medium">Trust Wallet</p>
                        <img src="TWT.svg" alt="wallet" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
