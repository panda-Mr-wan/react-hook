import React,{ useState, useEffect } from 'react';
import axios from "axios";
//创建一个自定义hook
const useAxios = () => {
    let [count,setCount] = useState(0);
    let [user,setUser] = useState("");
    let [loading,setLoading] = useState(true);
    useEffect(()=>{
        document.title=`你已经点击了${count}次`
    },[count]);
    useEffect(()=>{
        let getUser = async () => {
            if(loading){
                let res = await axios("https://randomuser.me/api");
                console.log(res.data)
                setUser(res.data)
            }
            setLoading(false);
        }
        getUser();
    },[loading])
    return {
        count,
        user,
        loading,
        oncountclick: () => {
            setCount(count+1)
        },
        onuserclick: () => {
            setLoading(true)
        }
    }
}
const App = () => {
    let value = useAxios();
    return (
        <div>
            <h3>App组件</h3>
            <p>{value.count}</p>
            <button onClick={value.oncountclick}>+</button>
            <div>
                {value.loading?"Loading...":value.user.results[0].email}
            </div>
            <button onClick={value.onuserclick}>get user</button>
        </div>
    )
}
 
export default App;