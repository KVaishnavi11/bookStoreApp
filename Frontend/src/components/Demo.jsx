import React from 'react'
import Login from './Login'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <>
    <div className='flex h-screen items-center justify-center '>
      <div id="my_modal_1" className="w-[600px]">
        <div className="modal-box">
          <h3 className="font-bold text-lg">SignUp</h3>

          <div className="mt-4 space-y-2">
            <span>Name</span><br/>
            <input type="text" placeholder="Enter your name" className="w-80 px-3 border rounded-md outline-none py-1"/>
          </div>

          <div className="mt-4 space-y-2">
            <span>Email</span><br/>
            <input type="email" placeholder="Enter your Email" className="w-80 px-3 border rounded-md outline-none py-1"/>
          </div>

          <div className="mt-4 space-y-2">
            <span>PassWord</span><br/>
            <input type="email" placeholder="Enter your Password" className="w-80 px-3 border rounded-md outline-none py-1"/>
          </div>

          <div className="flex justify-around mt-4">
            <button className="bg-purple-700 text-white rounded-md px-6 py-3 hover:bg-pink-700 duration-150">SignUp</button>
            <p>Have account <button
                    className="underline text-blue-500 cursor-pointe"
                    onClick={() =>
                      document.getElementById("my_modal_1").showModal()
                    }
                  >
                    Login
                  </button><Login/></p>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/ if there is a button in form, it will close the modal /}
              <Link to= '/'className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Signup