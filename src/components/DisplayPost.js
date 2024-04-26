import React, { useState, useEffect } from 'react'

export default function DisplayPost() {
    const [post, setPost] = useState({})

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setPost(res)
            })
    }

    return (
        <div>
            <ul>
                <li>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </li>
            </ul>
        </div>
    )
}
