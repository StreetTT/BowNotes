import { Link } from 'react-router-dom/cjs/react-router-dom';

const NoteList = ({notes}) => {
    const deleteNote = async (id) => {
        try {
            const res = await fetch(`http://localhost:8000/notes/${id}`, {
                method: 'DELETE'
            });
            if (!res.ok) {
                throw Error("Data could not be fetched.");
            }
            window.location.reload();
        } catch (e) {
            console.log(e.message);
            }
        }

    return ( 
        <div className="note-list">
            {notes.map((note) => (
                <div className="note-preview" key={note.id}>
                    <Link to={`/notes/${note.id}`}><h2>{ note.title }</h2></Link>
                    <p>{note.people.map((person) => (
                        person+", "
                    ))}</p>
                    <button onClick={(e) => {console.log(e); deleteNote(note.id) }}>Delete</button>
                </div>
            ))}
        </div>
     );
};
 
export default NoteList;