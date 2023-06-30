import React from 'react';
import './Blog.css';

export default function Blog(props) {
  let {title,body,styles} = props;  //object destructuring
  //console.log(props)
  //console.log(title)
  return (
    <div>
        <h1 className={styles}>{title}</h1>
        <p className="content">{body}</p>
    </div>
  )
}
