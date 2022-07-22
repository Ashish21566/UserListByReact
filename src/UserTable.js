import React, { useEffect } from "react";
import {useState } from "react";
/*import { json } from "server/reply";*/
import "./UserTable.css";

function UserTable() {
    const [users, setUsers] = useState([]);

    


    useEffect(() => {

        fetch("https://reqres.in/api/users?page=2")
        .then(res => res.json())
        .then(data1 => setUsers(data1.data))
        .catch(e => console.log(e))
        
    }, [])


/*function getUsers(){
        fetch("https://reqres.in/api/users?page=2").then((result) => {
            result.json().then((resp) => {
            setUsers(resp)
        })
    })
    }*/

    const  deleteUser=(id)=>{
        console.log(id);
        fetch('https://reqres.in/api/users/'+id,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            console.log(users);
        });
    }

    //Add users

    /*const onAdd=()=>{
        fetch('https://reqres.in/api/users',{
            method: 'Post',
            body : JSON.stringify({
                id: id,
                avatar : avatar,
                first_name : first_name,
                last_name : last_name
            }),
            headers: {
                "Content-type": "application/json; charset= UTF-8",
            }
        )}
        .then
    }*/
    



    console.log(users);
    return (
        <>
            <h2>Table of User</h2>
            <div className="table-containet">
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Avatar</th>
                        <th>Email</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Action</th>
                    </tr>
                    {
                        users.length > 0 &&
                        users.map((item) => {
                            return (
                                <tr>
                                    <td>{item.id}</td>
                                    <td> <img src={item.avatar} /></td>
                                    <td>{item.email}</td>
                                    <td>{item.first_name}</td>
                                    <td>{item.last_name}</td>
                                    <td><button>Edit</button>  <button>View</button> <button onClick={()=> deleteUser(item.id)}>Delete</button></td>
                                </tr>

                            )
                        })
                    }

                </table>
            </div>

        </>
    )

}

export default UserTable;