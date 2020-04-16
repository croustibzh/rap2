const users = [];

const addUser = (id, name, room ) => {
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();
  
    const user = { id, name, room };
  
    users.push(user);
    console.log(`${name} added`);
    console.log('');
    console.log("People in user list:");
    users.map(usr=>{
        console.log(usr.name)
    })

    return user ;
  }
const removeUser =(id) =>{
    const index = users.findIndex((user) => user.id ===id);

    if(index !== -1){
        return users.splice(index,1)[0];
    }
}

const getUser = (id) =>users.find((user)=> user.id === id);


const getUserInRoom =(room) =>{
    users.filter((user.room) === room);
}

module.exports = { users, addUser, removeUser, getUser,getUserInRoom};

