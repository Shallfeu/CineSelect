import React, { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppRouter } from './providers/router';
import { NavBar } from 'widgets/NavBar';
import { Footer } from 'widgets/Footer';
import { getUserInitialized, userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import ScrollToTop from 'shared/components/ScrollToTop/ScrollToTop';

function App() {
    const dispatch = useAppDispatch();
    const initialized = useSelector(getUserInitialized);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className="app">
            <Suspense fallback="">
                <NavBar />

                <div className="content-page">
                    {initialized && <AppRouter />}
                </div>

                <Footer />

                <ScrollToTop />
            </Suspense>
        </div>
    );
}

export default App;