import NoteList from './NoteList';
import useGetFetch from './useGetFetch';


const Home = () => {
    const {data: notes, isPending, error} = useGetFetch(`http://localhost:8000/notes`)

    return ( 
        <main>
            <h1>Homepage</h1><br />
            {error && <div className='error'>{error}</div>}
            {isPending && !error && <div className='loading'>Loading...</div>}
            {notes && <NoteList notes={notes}/>}
        </main>
     ); 
}
 
export default Home;