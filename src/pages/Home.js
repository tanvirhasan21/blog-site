import { getDoc,collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase-config';
import {BsTrash} from 'react-icons/bs'


function Home({isAuth}) {
  const [postLists,setPostLists]=useState([]);
  const postCollectionRef=collection(db,"posts")
  useEffect(()=>{
    const getPosts =async()=>{
      const data= await getDocs(postCollectionRef)
      setPostLists(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
    }
    getPosts();
  },[postLists])

  const deletePost=async(id)=>{
    const postDoc=doc(db,"posts",id)
    await deleteDoc(postDoc)
  }
  return (
    <div className='homePage'>
      
      {postLists.map((post)=>{
        return (<div className='post'>
          <div className='postHeader'>
            <div className='title'>
              <h1>{post.title}</h1>
            </div>
            <div className='deletePost'>
              
              {isAuth && post.author.id === auth.currentUser.uid && 
              <button onClick={()=>deletePost(post.id)}> <BsTrash /> </button>
              }
            </div>
          </div>
          <h3>@{post.author.name}</h3>
          <div className='postTextContainer'>
            {post.postText}
          </div>
          
        </div>)
      })}
    </div>
  )
}

export default Home
