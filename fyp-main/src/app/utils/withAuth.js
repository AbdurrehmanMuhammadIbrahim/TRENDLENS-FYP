// components/withAuth.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
        setIsAuthenticated(true);
      } else {
        router.push('AddArticle/login');
      }
      setLoading(false);
    }, [router]);

    if (loading) {
      return <p>Loading...</p>; // or a spinner/loading component
    }

    if (!isAuthenticated) {
      return null; // Or redirecting logic
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;