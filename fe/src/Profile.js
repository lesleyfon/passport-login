import React, {useEffect, useState} from 'react';
import Axios from "axios";

function Profile() {
    const [user, setUser ] = useState({})
    const [error, setError ] = useState({})
   

    useEffect(()=>{
        fetchUser()
        
        console.log(error)
    }, []);

    async function fetchUser(){
        Axios.get('http://localhost:5000/profile')
            .then(r => {
                setUser(r.data)
            })
            .catch(err=>{
                setError({...err})
            });
    }

    if(user){
        return (
            <div>

                <h3>Name: {user.displayName}</h3>
                <h4> Provider: {user.provider}</h4>
            </div>
        )
    }
    
}

export default Profile
