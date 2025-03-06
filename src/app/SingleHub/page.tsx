"use client";
import { useState, useEffect } from "react";
import EventCarousel from "../components/Events/EventsCarousel";
import styles from "./SingleHub.module.css";

interface Post {
    post_id: string;
    post_text: string;
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
    const [currentHub, setCurrentHub] = useState(1);
    const [currentUser, setCurrentUser] = useState("c95c8dae-187d-481c-8ddb-ce3d16bcc138")
    
    // --- for solving deployment issues ---
    setCurrentHub(1);
    setCurrentUser("c95c8dae-187d-481c-8ddb-ce3d16bcc138");
    // --- end of solving deployment issues ---

    // Fetch posts
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('/api/posts?interest_id=1');
                const fetchedPosts = await response.json();
                setPosts(
                    Array.isArray(fetchedPosts)
                        ? fetchedPosts.map(post => ({
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

    // Add new post
    const handleAddPost = async () => {
        try {
            console.log('Attempting to post with:', {  // Debug log
                user_id: currentUser,
                interest_id: currentHub,
                post_title: newPostTitle,
                post_text: newPostContent
            });

            const response = await fetch('/api/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_id: currentUser,
                    interest_id: currentHub,
                    post_title: newPostTitle,
                    post_text: newPostContent
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.log('Error response:', errorData);  // Debug log
                throw new Error(errorData.error || 'Failed to create post');
            }

            const data = await response.json();
            console.log('Success response:', data);  // Debug log

            // Rest of your code...

        } catch (error) {
            console.error('Detailed error:', error);  // More detailed error logging
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
        <div>
            <h1 className={styles.Header}>Forum Board</h1>
            <div className={styles.ForumContainer}>
                <div className={styles.ForumBoard}>
                    {posts.map((post) => (
                        <div key={post.post_id} className={styles.Post}>
                            {/* <h2>{post.title}</h2> */}
                            <p>{post.post_text}</p>

                            {/* Comments Section */}
                            <div className={styles.CommentsSection}>
                                <h3>Comments:</h3>
                                {post.comments.length > 0 ? (
                                    post.comments.map((comment, index) => (
                                        <p key={`${post.post_id}-${index}`} className={styles.CommentName}>
                                            - {comment}
                                        </p>
                                    ))
                                ) : (
                                    <p>No comments yet.</p>
                                )}

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
                            </div>
                        </div>
                    ))}
                </div>

                {/* Create Post Section */}
                <div className={styles.PostCreator}>
                    <h2>Create a Post</h2>
                    <input
                        type="text"
                        placeholder="Post title"
                        value={newPostTitle}
                        onChange={(e) => setNewPostTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="Write your post..."
                        rows={4}
                        value={newPostContent}
                        onChange={(e) => setNewPostContent(e.target.value)}
                    />
                    <button onClick={handleAddPost}>Post</button>
                </div>
            </div>
            <EventCarousel />
        </div>
    );
}
