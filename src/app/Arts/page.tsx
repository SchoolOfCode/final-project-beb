"use client";
import { useState, useEffect } from "react";
import EventCarousel from "./ArtsEventsCarousel"
import styles from "./Arts.module.css";

interface Post {
  post_id: string;
  post_text: string;
  post_title: string;
  comments: string[]; // Add comments array to each post
}
// interface NewPost {
//     user_id: string;
//     interest_id: number;
//     post_title: string
//     post_text: string;
// };

export default function SingleHub() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostContent, setNewPostContent] = useState("");
  // const [newComment, setNewComment] = useState(""); // For managing new comment input
  const [currentHub, setCurrentHub] = useState(6);
  const [currentUser, setCurrentUser] = useState(
    "3c0e53ff-25d9-4425-830a-6804b3194455"
  );

  // --- for solving deployment issues ---
  useEffect(() => {
    setCurrentHub(6);
    setCurrentUser("3c0e53ff-25d9-4425-830a-6804b3194455");
  }, []);
  // --- end of solving deployment issues ---

  // Fetch posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/posts?interest_id=6");
        const fetchedPosts = await response.json();
        setPosts(
          Array.isArray(fetchedPosts)
            ? fetchedPosts.map((post) => ({
                ...post,
                comments: Array.isArray(post.comments) ? post.comments : [],
              }))
            : []
        );
      } catch (error) {
        console.error("Failed to fetch posts:", error);
        setPosts([]);
      }
    };
    fetchPosts();
  }, []);

  const handleAddPost = async () => {
    try {
      // Log what we're sending
      console.log("Sending post data:", {
        user_id: currentUser,
        interest_id: currentHub,
        post_title: newPostTitle,
        post_text: newPostContent,
      });
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: currentUser,
          interest_id: currentHub,
          post_title: newPostTitle,
          post_text: newPostContent,
        }),
      });

      const data = await response.json();
      console.log("Response data:", data); // Debug log

      if (!response.ok) {
        throw new Error(data.error || "Failed to create post");
      }

      // Create a new post object that matches your Post interface
      const newPost: Post = {
        post_id: data.post.post_id,
        post_title: data.post.post_title,
        post_text: data.post.post_text,
        comments: [], // Initialize with empty comments array
      };

      // Update posts array with new post
      setPosts((prevPosts) => [newPost, ...prevPosts]);

      // Clear form
      setNewPostTitle("");
      setNewPostContent("");
    } catch (error) {
      console.error("Error creating post:", error);
      alert("Failed to create post");
    }
  };

  // Add new comment to a post
  // const handleAddComment = (postId: string, comment: string) => {}
  //     setPosts(
  //         posts.map((post) =>
  //             post.post_id === postId
  //                 ? { ...post, comments: [...post.comments, comment] }
  //                 : post
  //         )
  //     );
  //     setNewComment(""); // Reset the new comment input field
  // };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.ForumContainer}>
        <div className={styles.titleContainer}>
          <p className={styles.hubName}>art</p>
        </div>
        <div className={styles.boardContainer}>
          <div className={styles.ForumBoard}>
            {posts.map((post) => (
              <div key={post.post_id} className={styles.post}>
                <h2>{post.post_title}</h2>
                <p>{post.post_text}</p>

                {/* Comments Section */}
                {/* <div className={styles.CommentsSection}>
                  <h3>Comments:</h3>
                  {post.comments.length > 0 ? (
                    post.comments.map((comment, index) => (
                      <p
                        key={`${post.post_id}-${index}`}
                        className={styles.CommentName}
                      >
                        - {comment}
                      </p>
                    ))
                  ) : (
                    <p>No comments yet.</p>
                  )} */}

                {/* Comment input for each post */}
                {/* <input
                                    type="text"
                                    value={newComment}
                                    placeholder="Write a comment..."
                                    onChange={(e) => setNewComment(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter" && newComment.trim()) {
                                            handleAddComment(post.post_id, newComment.trim());
                                        }
                                    }}
                                /> */}
                {/* </div> */}
              </div>
            ))}
          </div>
          {/* Create Post Section */}
          <div className={styles.PostCreator}>
            <div className={styles.inputContainer}>
              <div className={styles.titleButtonContainer}>
                <input
                  className={styles.titleBox}
                  type="text"
                  placeholder="Post title"
                  value={newPostTitle}
                  onChange={(e) => setNewPostTitle(e.target.value)}
                />
                <button className={styles.submitButton} onClick={handleAddPost}>
                  Post
                </button>
              </div>
              <textarea
                className={styles.bodyInputBox}
                placeholder="Write your post..."
                rows={4}
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.eventCarouselLogoDiv}>
         <p className={styles.flockLogo}>FLOCK</p>
         <div className={styles.eventCarouselDiv}>
          <EventCarousel />
        </div> 
      </div>
    </div>
  );
}
