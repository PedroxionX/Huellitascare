import { RouterProvider } from 'react-router';
import { router } from './routes';

export default function App() {
  return (
    <div
      className="min-h-screen flex items-start justify-center"
      style={{ backgroundColor: '#DCDCDC' }}
    >
      {/* Mobile phone wrapper */}
      <div
        className="relative w-full overflow-hidden shadow-2xl"
        style={{
          maxWidth: '400px',
          minHeight: '100svh',
          backgroundColor: '#F4F4F4',
        }}
      >
        <RouterProvider router={router} />
      </div>
    </div>
  );
}
