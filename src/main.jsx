import React from 'react'
import ReactDOM from 'react-dom/client' 
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Home from './Components/Home/Home.jsx' 
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx' 
import Posts from './Components/Posts/Posts.jsx'
import ShowDetails from './Components/ShowDetails/ShowDetails.jsx'
import PostDetails from './Components/PostDetails/PostDetails.jsx'
import Comments from './Components/Comments/Comments.jsx'
import CommentDetails from './Components/CommentDetails/CommentDetails.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/user',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <User></User>
      },
      {
        path: '/users/:usersId',
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.usersId}`),
        element: <PostDetails></PostDetails>
      },
      {
        path: '/posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path: '/post/:postId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element:<ShowDetails></ShowDetails>
      },
      {
        path: '/comments',
        loader: () => fetch('https://jsonplaceholder.typicode.com/comments'),
        element: <Comments></Comments>
      },
      {
        path: 'comment/:commentId',
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/comments/${params.commentId}`),
        element: <CommentDetails></CommentDetails>
      }
    ]
  }
   
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
