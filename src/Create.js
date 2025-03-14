import { useState } from 'react';
import { useHistory } from 'react-router-dom'
const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added');
      setIsPending(false);
      //history.go(-1);
      history.push('/');
    })
  }
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!isPending && <button>Add blog</button>}
        {isPending && <button>Adding blog...</button>}

        <div className="preview" style={{ textAlign: 'left' }}>Preview</div>

        <div className="templateforrealtimeview" style={{
          paddingLeft: '20px', textAlign: 'left',
          fontSize: '17px', border: '2px solid purple',
          marginTop: '10px', borderRadius: '10px', overflow: 'auto'
        }}>
          <p style={{
            color: '#f1356d',
            fontSize: '20px',
            marginTop: '5px'
            , fontWeight: '700'
          }}>{title}</p>
          <p style={{
            color: '#000',
            fontSize: '15px',
            marginTop: '7px'
            , fontWeight: '500'
          }}>{body}</p>
          <p>Author:{author}</p>
        </div>


      </form>
    </div>
  );
}

export default Create;