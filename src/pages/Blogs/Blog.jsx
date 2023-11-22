import { useState } from "react";


const Blog = ({ blog }) => {
  const { question, answer } = blog;
  const [read, setRead] = useState(false);
  const handleRead = (answer) => {
    setRead(<small>{answer.slice(250, )}</small>)
  }

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{question}</h2>
          <p>
            {answer.length < 250 ? (
              <>{answer}</>
            ) : (
              <>
                {answer.slice(0, 250)}...
               
                <small className="font-bold" onClick={()=> {handleRead(answer)}}>Read more</small>
                {read}
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
