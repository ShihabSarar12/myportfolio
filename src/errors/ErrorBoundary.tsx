import { Component } from 'react';

class ErrorBoundary extends Component<
    { children: React.ReactNode },
    { hasError: boolean }
> {
    state = { hasError: false };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: unknown) {
        console.error('ErrorBoundary caught:', error);
        console.error(info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className='text-white bg-black h-screen w-screen p-10 flex justify-center items-center'>
                    <h1 className='font-bold'>Something went wrong!</h1>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
