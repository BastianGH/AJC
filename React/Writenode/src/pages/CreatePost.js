import { useTitle } from "../hooks/useTitle";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

export const CreatePost = () => {
  useTitle("Create Post");

  const username = useSelector((state) => state.userState.username);
  const navigate = useNavigate();

  useEffect(() => {
    if (!username) {
      navigate("/");
    }
  });

  const [newPost, setNewPost] = useState({
    title: "",
    description: "",
    name: username,
  });

  const addPost = async (e) => {
    e.preventDefault();
    addDoc(collection(db, "Comments"), {
      title: newPost.title,
      description: newPost.description,
      user: newPost.name,
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <main>
      <section className="create">
        <div className="heading">
          <h1>Add New Post</h1>
        </div>
        <form onSubmit={addPost} className="createPost">
          <input
            type="text"
            className="title"
            name="title"
            placeholder="Title"
            maxlength="50"
            required=""
            onChange={(e) =>
              setNewPost({
                title: e.target.value,
                description: newPost.description,
                name: newPost.name,
              })
            }
          />
          <textarea
            type="text"
            className="description"
            name="description"
            placeholder="Description"
            maxlength="600"
            required=""
            onChange={(e) =>
              setNewPost({
                title: newPost.title,
                description: e.target.value,
                name: newPost.name,
              })
            }
          ></textarea>
          <button type="submit" className="submit">
            Create
          </button>
        </form>
      </section>
    </main>
  );
};
