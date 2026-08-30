import { HashRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Public Pages
import Home from './pages/Home';
import Vendors from './pages/Vendors';
import VendorDetails from './pages/VendorDetails';
import Venues from './pages/Venues';
import VenueDetails from './pages/VenueDetails';
import Packages from './pages/Packages';
import Inspiration from './pages/Inspiration';
import Offers from './pages/Offers';
import EventBuilder from './pages/EventBuilder/EventBuilder';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';

// Customer Dashboard
import CustomerDashboard from './pages/customer/Dashboard';
import Budget from './pages/customer/Budget';
import Guests from './pages/customer/Guests';
import Timeline from './pages/customer/Timeline';
import Shortlist from './pages/customer/Shortlist';
import CustomerEnquiries from './pages/customer/Enquiries';
import Profile from './pages/customer/Profile';

// Admin Dashboard
import AdminDashboard from './pages/admin/Dashboard';
import AdminEvents from './pages/admin/Events';
import AdminVendors from './pages/admin/Vendors';
import AdminVenues from './pages/admin/Venues';
import AdminCustomers from './pages/admin/Customers';
import AdminEnquiries from './pages/admin/Enquiries';
import AdminPackages from './pages/admin/Packages';
import Analytics from './pages/admin/Analytics';

import { useAppContext } from './context/AppContext';

// Simple Protected Route wrapper
const ProtectedRoute = ({ children, role }) => {
  const { user } = useAppContext();
  
  if (!user) {
    return <Navigate to="/login" />;
  }
  
  if (role && user.role !== role) {
    return <Navigate to="/" />;
  }
  
  return children;
};

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-background text-ivory">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/vendors" element={<Vendors />} />
            <Route path="/vendor/:id" element={<VendorDetails />} />
            <Route path="/venues" element={<Venues />} />
            <Route path="/venue/:id" element={<VenueDetails />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/inspiration" element={<Inspiration />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/plan" element={<EventBuilder />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />

            {/* Customer Routes */}
            <Route path="/customer">
              <Route index element={<ProtectedRoute role="customer"><CustomerDashboard /></ProtectedRoute>} />
              <Route path="budget" element={<ProtectedRoute role="customer"><Budget /></ProtectedRoute>} />
              <Route path="guests" element={<ProtectedRoute role="customer"><Guests /></ProtectedRoute>} />
              <Route path="timeline" element={<ProtectedRoute role="customer"><Timeline /></ProtectedRoute>} />
              <Route path="shortlist" element={<ProtectedRoute role="customer"><Shortlist /></ProtectedRoute>} />
              <Route path="enquiries" element={<ProtectedRoute role="customer"><CustomerEnquiries /></ProtectedRoute>} />
              <Route path="profile" element={<ProtectedRoute role="customer"><Profile /></ProtectedRoute>} />
            </Route>

            {/* Admin Routes */}
            <Route path="/admin">
              <Route index element={<ProtectedRoute role="admin"><AdminDashboard /></ProtectedRoute>} />
              <Route path="events" element={<ProtectedRoute role="admin"><AdminEvents /></ProtectedRoute>} />
              <Route path="vendors" element={<ProtectedRoute role="admin"><AdminVendors /></ProtectedRoute>} />
              <Route path="venues" element={<ProtectedRoute role="admin"><AdminVenues /></ProtectedRoute>} />
              <Route path="customers" element={<ProtectedRoute role="admin"><AdminCustomers /></ProtectedRoute>} />
              <Route path="enquiries" element={<ProtectedRoute role="admin"><AdminEnquiries /></ProtectedRoute>} />
              <Route path="packages" element={<ProtectedRoute role="admin"><AdminPackages /></ProtectedRoute>} />
              <Route path="analytics" element={<ProtectedRoute role="admin"><Analytics /></ProtectedRoute>} />
            </Route>

            {/* 404 Route */}
            <Route path="*" element={
              <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
                <h1 className="text-6xl font-display text-champagne mb-4">404</h1>
                <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
                <p className="text-muted max-w-md mb-8">
                  The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <Link to="/" className="px-6 py-3 bg-champagne text-background rounded-full font-medium hover:bg-opacity-90 transition-all">
                  Return to Home
                </Link>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
