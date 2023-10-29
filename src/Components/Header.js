const Header = () => (
   <div className="w-full h-1/5 flex flex-col">
      <div className="w-full h-2/5 bg-green-600 flex flex-row justify-between items-center text-lg">
         <div className="w-9/12 h-2/5 flex flex-row mx-5 text-white items-center">

            <div className="mx-5 text-xl">Reeco</div>
            <div className="mx-5">Store</div>
            <div className="mx-5">Order</div>
            <div className="mx-5">Analytics</div>

         </div>
         <div className="w-3/12 h-2/5 flex flex-row mx-5 text-white items-center">
            <div className="mx-5">Cart</div>
            <div className="ml-5">Hello, James</div>
            <img className="w-4 h-4 my-1" src="https://www.freeiconspng.com/thumbs/white-arrow-png/white-down-arrow-png-2.png" />

         </div>
      </div>

      <div className="w-full h-2/5 flex flex-col border-red shadow-lg">
         <div className="w-full h-full flex flex-col">
            <div className="w-full h-1/5 mx-40 text-sm text-gray-400 my-1">
               {`Orders > Order321232212`}
            </div>
            <div className="w-full h-1/5 mx-40 flex flex-row justify-between">
               <div className="w-7/12 h-full text-xl font-bold">
                  {`Order 321232212`}
               </div>
              
               <div className="w-5/12 h-full">
               <button className="w-16 h-6 bg-white text-center font-bold text-xs text-green-950 border border-green-400 rounded-xl">Back</button>
               <button className="ml-4 w-24 h-6 bg-green-900 text-center text-xs text-white rounded-lg">Approve Order</button>
               </div>
            </div>
         </div>

      </div>

   </div>
)

export default Header;