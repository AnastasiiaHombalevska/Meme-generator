import React from "react"

export default function Header() {
  const source = 'troll-face.png';

    return (
        <header className="header">
            <img
                src={source}
                className="header--image"
                alt="troll face icon"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}