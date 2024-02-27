import { useEffect, useState } from "react";

function App() {
  return (
    <div className='flex bg-black/50 w-screen h-screen'>
      <Chat />
    </div>
  );
}

function Header() {
  return (
    <div className='flex'>
      <input type='text' className='border' />
    </div>
  );
}
function List() {
  const [data, setData] = useState([]);
  async function getChat() {
    const raw = await fetch(
      "https://raw.githubusercontent.com/ybrk01/twitch/main/chat/test.csv"
    );
    const chat = await raw.text();
    const lines = chat.split("\n");
    setData(lines);
  }

  getChat();
  return (
    <div className='flex flex-col overflow-y-scroll'>
      {data.map(line => (
        <Comment comment={line} />
      ))}
    </div>
  );
}

function Comment({ comment }) {
  let regex = /("[^"]*"|[^",]+)(?=\s*,|\s*$)/g;
  let parts = comment.match(regex).map(part => part.replace(/"/g, ""));

  console.log(parts);
  return (
    <div className='grid grid-cols-table border-b py-2'>
      <div className=''> {parts[0]} </div>
      <div className=''>
        {" "}
        <span className='font-bold' style={{ color: parts[2] }}>
          {parts[1]}
        </span>{" "}
      </div>
      <div className=''>{parts[3]}</div>
    </div>
  );
}

function Chat() {
  return (
    <div className='flex flex-col w-9/12 bg-white mx-auto my-8 rounded-lg p-4 gap-4'>
      <Header />
      <List />
    </div>
  );
}

export default App;
