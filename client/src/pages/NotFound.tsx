import { Helmet } from 'react-helmet-async'
import Navbar from '../layouts/Navbar';

const NotFount = () => {
    return (
      <>
        <Helmet>
          <title>DACO</title>
        </Helmet>
        <>
          <div className="px-0 lg:px-20 h-screen" id="screen">
            <Navbar/>
            <div className='h-[80vh] flex flex-col items-center justify-center'>
            <span className='text-8xl font-aubette text-error'>404</span>
                <span className='text-6xl font-aubette text-error'>PAGE NOT FOUND!</span>
            </div>
          </div>
        </>
      </>
    );
}

export default NotFount