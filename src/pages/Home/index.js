import './home.css';
import Search from '../../components/Search/index.js';
import Result from '../../components/Result/index.js';

export default function Home(){
  return (
    <main>
      <Search/>
      <Result/>
    </main>
  );
}