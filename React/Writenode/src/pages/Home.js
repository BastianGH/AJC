import { useTitle } from "../hooks/useTitle";
import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

export const Home = () => {
  useTitle("Home");

  const [comments, setComments] = useState([]);

  const fetchData = () => {
    let fetchedData = [];

    onSnapshot(collection(db, "Comments"), (querySnapshot) => {
      const comments = [];
      querySnapshot.forEach((doc) => {
        const comment = {
          id: doc.id,
          title: doc.data().title,
          comment: doc.data().description,
          username: doc.data().user,
        };

        fetchedData.push(comment);
        console.log(fetchedData);
      });
      setComments(fetchedData);
      console.log(comments);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      {comments.map((comment) => (
        <section class="card">
          <p className="title">{comment.title}</p>
          <p className="description">{comment.comment}</p>
          <p className="control">
            <span className="author">{comment.username}</span>
          </p>
        </section>
      ))}
    </main>
  );
};
