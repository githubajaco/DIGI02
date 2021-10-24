
import './App.css';
import CompTitre from './components/CompTitre';
import CompTableau from './components/CompTableau';

export default function App() {
  return (
    <div className="App">
      <CompTitre titre="Mon titre de composant" />
      <CompTableau titreCol1="tcol01" titreCol2="tcol02" titreCol3="tcol03" />
    </div>
  );
}


