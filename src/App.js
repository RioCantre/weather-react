
import SearchEngine from './SearchEngine';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div>
      <SearchEngine defaultCity='Los Angeles' />
      <footer className='bottom-text'>
        <a href='https://github.com' target='_blank' rel='noreferrer'>
          Open-source
        </a>
        &nbsp;code by&nbsp;
        <span className='name'>
          <a
            href='https://www.shecodes.io/students/316-rio-cantre'
            target='_blank'
            rel='noreferrer'
          >
            {' '}
            Rio Cantre{' '}
          </a>
        </span>
      </footer>
    </div>
  );
}

export default App;
