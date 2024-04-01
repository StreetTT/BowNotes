import NoteList from './NoteList';
import useGetFetch from './useGetFetch';

const Home = ({name, setName}) => {
    
    const {data: notes, isPending, error} = useGetFetch(`http://localhost:8000/notes`)

    const noteCount = (name) => {
        alert(name + ` you have ${notes.filter((note) => note.people.includes(name)).length} ${notes.length !== 1 ? "notes" : "note"}.`);    
    } 
    
    
    return ( 
        <main>
            <h1>Search Page</h1><br />
            <label> Search By Name: </label>
            <input onChange={(e) => { console.log(e); setName(e.target.value);}} defaultValue={name} type="text" placeholder="name"></input>
            <br /><br />
            <h2> {name}'s Notes </h2>
            {error && <div className='error'>{error}</div>}
            {isPending && <div className='loading'>Loading...</div>}
            {notes && (
                <>
                    <button onClick={() => noteCount(name)}>Count Notes</button>
                    <NoteList notes={notes.filter((note) => note.people.includes(name))} />
                </>
            )}
        </main>
     ); 
}
 
export default Home;