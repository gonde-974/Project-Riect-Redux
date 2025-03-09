import { useDispatch } from 'react-redux';
import { handleAllProductAction, handleMarqueeMessageLeft, handleMessageAboutUs, handleSingleProductAction } from './store/productSlice';
import ShowInfoComponent from './components/ShowInfoComponent';
import { Link, Outlet } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
   dispatch(handleSingleProductAction({
    title:"GONDE",
    message:'NEVER GIVE UP'
   })),
   dispatch(handleMarqueeMessageLeft({
    title:"GONDE THE BEST"
   }))
   dispatch(handleMessageAboutUs({
    message:'Message for About Us'
   }))
  },[])

  function handleInfo() {
    dispatch(handleAllProductAction('Податоците пристигнаа од --productSlice--'));
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Навигација */}
      <nav className="w-full bg-white shadow-md py-4">
        <ul className="flex justify-center gap-8">
          <li>
            <Link to="/" className="text-lg font-semibold text-gray-700 hover:text-green-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="products" className="text-lg font-semibold text-gray-700 hover:text-green-600 transition">
              Products
            </Link>
          </li>
          <li>
            <Link to="aboutUs" className="text-lg font-semibold text-gray-700 hover:text-green-600 transition">
             About Us
            </Link>
          </li>
        </ul>
      </nav>

      {/* Контент од рутите */}
      <div className="w-full px-6">
        <Outlet />
      </div>

      {/* Главен дел со копче и инфо */}
      <div className="mt-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800">Redux Toolkit</h1>

        <button 
          onClick={handleInfo}
          className="mt-6 bg-green-500 hover:bg-green-600 transition px-8 py-3 rounded-lg text-white font-semibold shadow-lg"
        >
          Send Info
        </button>       
          <ShowInfoComponent class=""/>      
      </div>
    </div>
  );
}

export default App;
