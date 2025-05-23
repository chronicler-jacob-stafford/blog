import { ThemeProvider } from '@/app/providers/ThemeProvider';
import HomePage from '@/pages/homePage/HomePage';
import BlogPage from '@/pages/BlogPage';
import { Route, Routes } from 'react-router-dom';
import PageWrapper from '../pages/PageWrapper';
import PageNotFound from '@/pages/PageNotFound';

function App() {
  return (
    <ThemeProvider>
      <PageWrapper>
          <Routes>
            <Route path="/blog/" element={<HomePage/>} />
            <Route path="/blog/blogs/:blogId" element={<BlogPage/>} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
      </PageWrapper>
    </ThemeProvider>
  );
}

export default App;