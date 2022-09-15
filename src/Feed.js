import React, { useEffect, useState } from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "./firebase";


function Feed() {
    const [posts, setPosts] = useState([]);

    //snapshot is a real time when anything is updated, added, changed, anything inside this collection it will give us the real time snapshot(updates)
    useEffect(() => {
        db.collection("posts")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) =>
                setPosts(snapshot.docs.map((doc) => ({
                    id: doc.id, data: doc.data()
                })))
            );
    }, []); // this is real-time connection to the db and maps to the state 

    return (
        <div className="feed">
            <StoryReel />
            {/* StoryReel */}
            <MessageSender />
            {/* this is just mapping through the post */}
            {posts.map((post) => (
                <Post
                    key={post.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}
                />
            ))}

            {/* MessageSender */}
            {/* that was hard-coded before implementation 
            
            <Post
                profilePic="https://cdn3.f-cdn.com/contestentries/1376995/30494909/5b566bc71d308_thumb900.jpg"
                message="WOW this works!"
                timestamp="This is a timestamp"
                username="Dompa"
                image="https://webcdn-adespressoinc.netdna-ssl.com/wp-content/uploads/2018/09/best-time-to-post-on-instagram-2018.png"
            /> */}


        </div>
    );
}

export default Feed;
