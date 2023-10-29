import Order from "./Order"

const OrderBox = () =>{
return (
    <div className='mt-5 w-full h-15 '>
        <div className='mt-5 w-full h-full mx-52 flex flex-row'>
        <div className="w-4/12 border-2 border-grey rounded-md"></div>
        <div className="mx-8 w-24 h-8 border-2 border-grey rounded-md text-center">Search</div>
        <div  className="mx-32 w-24 h-8 border-2 border-green-200 rounded-md text-center bg-white text-green-900">Add Item</div>
        </div>
        <div className='mt-5 w-full mx-52'>
        <Order />
        </div>
    </div>
)
}

export default OrderBox