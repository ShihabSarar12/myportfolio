import { useEffect, useState } from 'react';
import './App.css';
import WholeCanvas from './components/canvas/WholeCanvas';
import { Navbar } from './components/Navbar';
import isWebGLUsable from './utilities/isWebGLUsable';

const App = () => {
    const [supports3D, setSupports3D] = useState<boolean | null>(null);

    useEffect(() => {
        const ok = isWebGLUsable();
        setSupports3D(ok);
    }, []);

    if (supports3D === null) {
        return (
            <div className='text-white bg-black h-screen w-screen p-10 flex justify-center items-center'>
                <h1 className='font-bold'>Checking Device Capabilities</h1>
            </div>
        );
    }

    if (!supports3D) {
        return (
            <div>
                <h1>Simple version</h1>
                <p>
                    Your device/browser does not fully support our 3D
                    experience, so you are seeing a lightweight version instead.
                </p>
            </div>
        );
    }

    return (
        <div className='relative w-full'>
            <div className='fixed top-0 left-0 w-full h-full z-0 pointer-events-none'>
                <WholeCanvas />
            </div>

            <div className='fixed top-0 left-0 w-full z-50'>
                <Navbar />
            </div>
        </div>
    );
};

export default App;
