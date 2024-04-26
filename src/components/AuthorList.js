import React, { useState, useEffect } from 'react'

export default function AuthorList() {
    const [authors, setAuthors] = useState(null)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setAuthors(res)
            })
            .catch((error) => {
                alert("SOMETHING IS WRONG!")
                console.log(error)
            })
    }

    return (
        <div>
            <ul>
                {authors ? authors.map((author) => {
                    return (
                        <li key={author.id}>
                            <h1>{author.name}</h1>
                            <p>{author.email}</p>
                        </li>
                    )
                }) : "loading..."}
            </ul>
        </div>
    )
}
