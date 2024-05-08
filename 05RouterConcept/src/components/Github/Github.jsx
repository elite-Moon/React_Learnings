import { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router-dom';

function Github() {
  // const data = useLoaderData();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://api.github.com/users/adrianhajdin')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className='bg-gray-300 text-black-700 p-1 m-2 h-12 flex  justify-center'>
      Github Follower : {data.followers}
      Twitter userName : {data.twitter_username}
    </div>
  );
}

export default Github;

// //! this is using for loader params from routing this is more faster method and above method is preferd method
// export const githubLoader = async () => {
//   const response = await fetch('https://api.github.com/users/adrianhajdin');
//   return response;
// };
