import React, { useState, useEffect } from 'react'

export default function AuthorList() {
    const [authors, setAuthors] = useState(null)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw new Error("SOMETHING WENT WRONG!")
                }
            })
            .then(res => {
                if (res.length > 0) {
                    setAuthors(res)
                } else {
                    alert("NO DATA!")
                }
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
