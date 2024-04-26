import React, { useState, useEffect } from 'react'

export default function EditTabName() {
    const [name, setName] = useState('Dante')

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('A name was submitted:' + name)
        setName('')
    }

    useEffect(() => {
        console.log('effect')
        document.title = name + "'s Page"
        return () => {
            console.log('cleanup')
        }
    }, [name])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={e => setName(e.target.value)} />
                    <input type="submit" value="Submit" />
                </label>
            </form>
        </div>
    )
}
