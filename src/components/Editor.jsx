import React, {useState, useEffect} from 'react'
import api from "../lib/api"
export default function Editor() {
    const [data, setData] = useState({"results":[]})

    useEffect(()=> {
        const fetchData = async () => {
            const result =  await api.getNowPlaying();
            setData(result.data)
            // console.log(result);
        }
        fetchData();
    }, [])

    return (
        <div>
            <h1> Editor </h1>
            {data.results.map(d =>(
                <p>d.title</p>
            ))}
        </div>
    )
}
