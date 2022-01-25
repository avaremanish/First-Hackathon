

 async function getUsers(){
   let users;
   try{
     const data= await fetch(
       'https://api.openbrewerydb.org/breweries',
       {
         method: "Get",
         headers: {
           "Content-Type": "application/json",
         },
       }
     );
       users= await data.json();
        
    }catch(err){
          console.log(err);
            }

    return users;
 }



 async function displayUser(){
   let users = await getUsers();

   const userList = document.querySelector(".user-list");
   userList.innerHTML="";

   users.forEach(user) => {
          
    userList.innerHTML += `
    `
    
   }
   
   
   

 }