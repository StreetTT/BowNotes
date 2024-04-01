import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const New = () => {
    const [title, setTitle] = useState("");
    const [people, setPeople] = useState([]);
    const [text, setText] = useState("");
    const history = useHistory()
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const note = { title, text, people };
        console.log(note);
        fetch(`http://localhost:8000/notes`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(note)
          })
          .then(res => {
            if (res.ok) {
                return res.json();
            } 
            throw Error("Error Occurred.")
          })
          .then(data => {
            setError(null)
            setIsPending(true)
            history.push(`/notes/${data.id}`)
          })
          .catch((e) => {
            setError(e.message)
            console.log(error)
            setIsPending(false)
          })
        };
    
    
    return ( 
        <main className="new">
            <h1>New Note</h1><br />
            <form
            onSubmit={handleSubmit}>
                <label>Title: </label>
                <input 
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <div className="row">
                    <div className="column" style={{width:"20%"}}>
                        <label>People: </label>
                        <select 
                        multiple
                        style={{overflow:"hidden", height:"200px"}}
                        value={people}
                        onChange={(e) => {setPeople(Array.from(e.target.selectedOptions, 
                            option => option.value))}}>
                            <option value="Abby">Abby</option>
                            <option value="Bow">Bow</option>
                            <option value="Cal">Cal</option>
                            <option value="Demo">Demo</option>
                            <option value="Ellie">Ellie</option>
                            <option value="Farah">Farah</option>
                            <option value="Gabriel">Gabriel</option>
                        </select>
                    </div>
                    <div className="column" style={{width:"80%"}}>
                        <label>Text: </label>
                        <textarea 
                        required
                        style={{overflow:"hidden", height:"200px"}}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        ></textarea>
                    </div>
                </div>
                {!isPending && <button>Create Note</button>}
                {isPending && <button>Creating</button>}
            </form>
        </main>
     ); 
}
 
export default New;