import './App.css';
import ItemList from './components/Generics/ItemList';
import Page from './components/Page';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import PageUseRef from './components/PageUseRef';
import PostList from './components/PostList';
import { ThemeProvider } from './components/context/ThemeContext';
import ShapeList from './components/exclude/ShapeList';

function App() {
  return (
    <div>
      {/* <PostList /> */}
      {/* <Page/> */}
      {/* <Page2/> */}
      {/* <ThemeProvider>
      <Page3/>
      
      </ThemeProvider> */}

      {/* <PageUseRef/> */}
      {/* <ItemList/> */}
      <ShapeList/>
    </div>
  );
}

export default App;
