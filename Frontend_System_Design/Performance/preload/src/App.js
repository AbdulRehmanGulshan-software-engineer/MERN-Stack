import { createElement, useState } from "react"

const App = () => {
    const [showEmoji, toggleEmoji] = useState(false)
    const [emojiElement, setEmojiElement] = useState()

    const handleClick = () => {
        //added magic comment in import for prefetch
        import(/* webpackPrefetch: true, webpackChunkName: "emoji" */"./Emoji")
            .then((module) => module.default)
            .then((emojiPicker) => {
                setEmojiElement(emojiPicker)
                toggleEmoji(true)
            })
    }
    return (
        <div>
            <h1>Webpack PreFetch</h1>
            <button onClick={handleClick}>Show Emoji</button>
            {showEmoji && emojiElement}
        </div>
    )
}

export default App