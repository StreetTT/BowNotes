import useGetFetch from './useGetFetch';
import { useParams } from "react-router-dom/cjs/react-router-dom";
import {useHistory} from 'react-router-dom'

const Note = () => {
  const {id} = useParams()
  const {data: note, isPending, error} = useGetFetch(`http://localhost:8000/notes/${id}`)  
  const history = useHistory()
  const deleteNote = (e, id) => {
      fetch(`http://localhost:8000/notes/${id}`, {
          method: 'DELETE'
      })
      .then(res => {
          if (res.ok) {
              return res.json();
          } else {
              throw new Error("Error Occurred.");
          }
      })
      .then(() => {
          history.push("/");
      })
      .catch((e) => {
          console.log(e.message);
      });
  };
    
  return ( 
      <main>
          <h1>Note {id}</h1>
          {error && <div className='error'>{error}</div>}
          {isPending && !error && <div className='loading'>Loading...</div>}
          {note && (
            <div className='note'>
              <h2>{note.title}</h2>
              <label>People Involved:</label>
              <ul>
                {note.people.map((person) => (
                  <li>{person}</li>
                ))}
              </ul>
              <br />
              <p>{note.text}</p><br />
              <button onClick={(e) => {deleteNote(e, id)}}>Delete</button>
            </div>
          )}
      </main>
   ); 
}

export default Note;