import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import AchieveDetails from './components/AchieveDetails';
import ProjectDetails from './components/ProjectDetails';
import IndividualPageCanvas from './components/canvas/IndividualPageCanvas';
import ResearchPaperPage from './components/Research';

const RouteWrapper = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route
                    path='/research/:id'
                    element={
                        <IndividualPageCanvas>
                            <ResearchPaperPage />
                        </IndividualPageCanvas>
                    }
                />
                <Route
                    path='/achievement/:id'
                    element={
                        <IndividualPageCanvas>
                            <AchieveDetails />
                        </IndividualPageCanvas>
                    }
                />
                <Route
                    path='/project/:id'
                    element={
                        <IndividualPageCanvas>
                            <ProjectDetails />
                        </IndividualPageCanvas>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteWrapper;
