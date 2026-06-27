import { useState, lazy, Suspense } from "react";
const Emoji = lazy(() => import("./Emoji"));
import Message from "./Message";

const App = () => {
  const [showEmoji, toggleEmoji] = useState(false);
  return (
    <>
      <Message />
      <button onClick={() => toggleEmoji((prev) => !prev)}>Show Emoji</button>
      {showEmoji && (
        <Suspense fallback="Loading">
          <Emoji />
        </Suspense>
      )}
    </>
  );
};

export default App;
