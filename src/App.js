import React, { useState, useEffect } from 'react';
import './App.css';
import { API, Storage } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listPosts } from './graphql/queries';
import { createPost as createPostMutation, deletePost as deletePostMutation } from './graphql/mutations';

const initialFormState = { name: '', description: '' }

function App() {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function onChange(e) {
    if (!e.target.files[0]) return
    const file = e.target.files[0];
    setFormData({ ...formData, image: file.name });
    await Storage.put(file.name, file);
    fetchPosts();
  }

  async function fetchPosts() {
    const apiData = await API.graphql({ query: listPosts });
    const postsFromAPI = apiData.data.listPosts.items;
    await Promise.all(postsFromAPI.map(async post => {
      if (post.image) {
        const image = await Storage.get(post.image);
        post.image = image;
      }
      return post;
    }))    
    setPosts(apiData.data.listPosts.items);
  }

  async function createPost() {
    if (!formData.name || !formData.description) return;
    await API.graphql({ query: createPostMutation, variables: { input: formData } });
    if (formData.image) {
      const image = await Storage.get(formData.image);
      formData.image = image;
    }    
    setPosts([ ...posts, formData ]);
    setFormData(initialFormState);
  }

  async function deletePost({ id }) {
    const newPostsArray = posts.filter(post => post.id !== id);
    setPosts(newPostsArray);
    await API.graphql({ query: deletePostMutation, variables: { input: { id } }});
  }

  return (
    <div className="App">
      <h1>Welcome to Karachi24.com (dev)</h1>
      <div
        style={{
          justifyContent: "left",
          alignItems: "left",
        }}>
      <input
        onChange={e => setFormData({ ...formData, 'name': e.target.value})}
        placeholder="Post Title"
        value={formData.name}
        maxLength="100"
        size="35"
      /><br/>
      <textarea
        onChange={e => setFormData({ ...formData, 'description': e.target.value})}
        placeholder="Post description"
        rows="4" cols="50"
        value={formData.description}
      /><br/>
      <input
        onChange={e => setFormData({ ...formData, 'url': e.target.value})}
        placeholder="Source URL"
        value={formData.url}
        size="35"
      /><br/>
      <input  type="file"  onChange={onChange}/>
      <button onClick={createPost}>Add</button><br/>
      </div>
      <div style={{marginBottom: 30}}>
        {
          posts.map(post => (
            <div key={post.id || post.name}>
              <a target="_blank" rel="noopener noreferrer" href={post.url}><h4>{post.name}</h4></a>
              &nbsp; <button onClick={() => deletePost(post)}>x</button>
              <div>{post.description}</div>
              {post.image && <img src={post.image} alt={post.name} style={{width: 400}} />}              
            </div>
          ))
        }
      </div>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
