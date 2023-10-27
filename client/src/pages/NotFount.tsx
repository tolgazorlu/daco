import { FullScreen, FullScreenHandle, useFullScreenHandle } from 'react-full-screen';
import { Helmet } from 'react-helmet-async'
import Navbar from '../layouts/Navbar';

const NotFount = () => {
    const handle: FullScreenHandle = useFullScreenHandle();
    return (
      <>
        <Helmet>
          <title>DACO</title>
        </Helmet>
        <FullScreen handle={handle}>
          <div className="px-0 lg:px-20 h-screen" id="screen">
            <Navbar fullscreenHandle={handle} />
            <div className='h-[80vh] flex flex-col items-center justify-center'>
            <span className='text-8xl font-aubette text-error'>404</span>
                <span className='text-6xl font-aubette text-error'>PAGE NOT FOUND!</span>
            </div>
          </div>
        </FullScreen>
      </>
    );
}

export default NotFount