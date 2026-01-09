import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-custom-1">
      <Header />
      <AnimatePresence mode="wait">
        <PageTransition key={location.pathname}>
          <main>{children}</main>
        </PageTransition>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Layout;

