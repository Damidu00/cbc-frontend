export default function AddProductForm() {
    return (
        <div className="w-full h-screen bg-gray-200 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-[80%] max-w-3xl">
                <h1 className="text-3xl font-bold text-center mb-6 text-gray-700">Add Your Product Here</h1>
                <form className="flex flex-col space-y-4">


                    <div className="flex space-x-4">
                        <div className="flex flex-col w-1/2">
                            <label className="text-gray-600 font-medium">Product ID</label>
                            <input type="text" className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400" />
                        </div>
                        <div className="flex flex-col w-1/2">
                            <label className="text-gray-600 font-medium">Product Name</label>
                            <input type="text" className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400" />
                        </div>
                    </div>


                    <div className="flex flex-col">
                        <label className="text-gray-600 font-medium">Alternative Names</label>
                        <input type="text" className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400" />
                    </div>

       
                    <div className="flex flex-col">
                        <label className="text-gray-600 font-medium">Image URLs</label>
                        <input type="text" className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400" />
                    </div>

  
                    <div className="flex space-x-4">
                        <div className="flex flex-col w-1/2">
                            <label className="text-gray-600 font-medium">Price</label>
                            <input type="text" className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400" />
                        </div>
                        <div className="flex flex-col w-1/2">
                            <label className="text-gray-600 font-medium">Last Price</label>
                            <input type="text" className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400" />
                        </div>
                    </div>


                    <div className="flex flex-col">
                        <label className="text-gray-600 font-medium">Stock</label>
                        <input type="text" className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400" />
                    </div>

   
                    <div className="flex flex-col">
                        <label className="text-gray-600 font-medium">Description</label>
                        <textarea className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 resize-none" rows="4"></textarea>
                    </div>


                    <button type="submit" className="w-full bg-gray-700 text-white p-3 rounded-md font-bold hover:bg-gray-800 transition">Add Product</button>
                </form>
            </div>
        </div>
    );
}
