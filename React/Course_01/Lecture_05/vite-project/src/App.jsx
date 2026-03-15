import { useEffect, useEffectEvent, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  // const [name,setName] = useState("");
  const [count, setCount] = useState(30);

  useEffect(() => {
    async function GithubProfile() {
      const response = await fetch(`https://api.github.com/users?per_page=${count}`);
      const data = await response.json();
      setUsers(data);
      console.log("user");
    }
    GithubProfile();
  }, [count]); //this array is called dependency array

  // function handleChange(event) {
  //   // console.log(event.target.value)
  //   setName(event.target.value.toUpperCase());
  // }

  return (
    <>
      <h1>Github User</h1>
      <input type="number" value={count} onChange={(e)=>setCount(e.target.value)}></input>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {users.map((user) => (
          <img
            src={user.avatar_url}
            alt="Github Data"
            style={{ height: "100px", width: "100px" }}
            key={user.login} //never give key with index number
          />
        ))}
      </div>
    </>
  );
}

export default App;
