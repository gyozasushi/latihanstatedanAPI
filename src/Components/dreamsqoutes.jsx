import React, { useEffect, useState } from 'react';

export function QuotesComponent() {
  const [quote, setQuote] = useState('');
  const category = 'dreams';
  const apiKey = 'SZXkTcn+tpSCxSyG0K/sig==fB9QClHMWZgF47z9';

  useEffect(() => {
    fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
      headers: {
        'X-Api-Key': apiKey,
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (data.length > 0) {
          setQuote(data[0].quote); // Mengambil quote pertama
        }
      })
      .catch(error => {
        console.error('Request failed:', error);
      });
  }, []);

  return (
    <div>
      <h2 className='kata-kakgem'>Kata-Kata Kak gem</h2>
      <p className='kataquotes'>"{quote}"</p>
    </div>
  );
}
