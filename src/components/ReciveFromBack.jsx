import React, { useEffect, useState } from 'react';

const ReceiveFromBack = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/message')
      .then(res => res.json())
      .then(data => {
        setMessage(data.message);
      })
      .catch(err => console.error('Error fetching data:', err));
  }, []);

  return <div>{message}</div>;
};

export default ReceiveFromBack;
