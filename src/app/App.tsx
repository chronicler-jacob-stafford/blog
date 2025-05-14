import { ThemeProvider } from '@/app/providers/ThemeProvider';
import HomePage from '@/pages/HomePage';
import BlogPage from '@/pages/BlogPage';
import { Route, Routes } from 'react-router-dom';
import PageWrapper from './PageWrapper';

function App() {
  return (
    <ThemeProvider>
      <PageWrapper>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/blog/:blogId" element={<BlogPage/>} />
          </Routes>
      </PageWrapper>
    </ThemeProvider>
  );
}

export default App; 