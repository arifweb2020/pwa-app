import React,{useState,useEffect} from 'react';

const User = () =>{

    const [data,setData]= useState([]);
    const [mode, setMode] = useState('online');
    useEffect(()=>{
        getData();
    },[])

    const getData = async () =>{

        try{
            const res = await fetch('https://jsonplaceholder.typicode.com/users')

            const res1 = await res.json()

            console.log(res1)

            setData(res1)
            
            localStorage.setItem("users", JSON.stringify(res1))

        }catch(error){
            setMode('offline')
            let collection = localStorage.getItem('users');
            setData(JSON.parse(collection))
        }

          
    }

return (

    <>
    <div>
                {
                    mode === 'offline' ?
                        <div class="alert alert-warning" role="alert">
                            you are in offline mode or some issue with connection
</div>
                        : null

                }
            </div>
     <div class="jumbotron text-center">
  <h1>List of Users</h1>
  
</div>
   
            

            <div className="container mb-5">
   
    {
        data.map((item)=>{
            return <h2 key={item.id}>{item.name}</h2>
        })
    }
    </div>
    </>
)


}

export default User