import * as C from './App.styles'
import {useState, useEffect} from 'react'
import * as Photos from './services/fotos'
import {Photo} from './types/foto'
const App = () => {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);
  useEffect(() =>{
    const getPhotos = async () => {
      setLoading(true);
      setPhotos(await Photos.getAll());
      setLoading(false);
    }
    getPhotos();
  }, []);

  return (
    <C.Container>
     <C.Area>
       <C.Header>
         Galeria de Fotos
       </C.Header>
       {/*Area de upload*/}


       {loading && 
       <C.ScreenWarning>
         <div className="emoji">✋</div>
           <div>Carregando...</div>
         
       </C.ScreenWarning>
      }
       {!loading && photos.length > 0 &&
        <C.PhotoList>
          {photos.map((item, index) => (
            <div>{item.name}</div>
          ))}
        </C.PhotoList>
      }
       
     </C.Area>
    </C.Container>
  )
}

export default App;