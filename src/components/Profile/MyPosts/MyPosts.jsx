import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let arrProsts = props.postsData.map(p => <Post message={p.message} likeCount={p.likeCount}/>);
    
    let textPostRef = React.createRef();


    let addPost = () => {alert(textPostRef.current.value); };

    return(
        <div>
            
            <div>
                <textarea id='textPost' ref={textPostRef}></textarea>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {arrProsts} 
            </div>            
        </div>
    );
}

export default MyPosts;