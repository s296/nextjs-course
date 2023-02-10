import { useEffect, useState } from 'react';
import useSWR from 'swr';

function LastSalesPage(props) {
  const [sales, setSales] = useState(props.sales);

  const { data, error } = useSWR(
    'https://dummyjson.com/products',
    (url) => fetch(url).then(res => res.json())
  );

  useEffect(()=>{
    if(data){
      setSales(data.products);
    }else{
      setSales([])
    }
  },[data])

  async function addProducts(){
    const resp = await fetch('https://dummyjson.com/products/1',{
      method: 'PUT',
      body: JSON.stringify({
        title:'samasung shubham'
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    console.log(">>>>resp>>>",resp);
  }

  if (error) {
    return <p>Failed to load.</p>;
  }

  if (!data || !sales) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <button onClick={addProducts}> add products</button>
      <ul>
        {sales.map((sale) => (
          <li key={sale.id}>
            {sale.title}
          </li>
        ))}
      </ul>
    </>
  
  );
}

export async function getStaticProps() {
  const response = await fetch(
    'https://dummyjson.com/products'
  );
  const data = await response.json();
  return { props: { sales: data?.products || [] } };
}

export default LastSalesPage;
