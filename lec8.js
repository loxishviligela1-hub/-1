1
// function debounce(func, delay) {
//     let timeoutId;
//     return function(...args) {
//         clearTimeout(timeoutId);
//         timeoutId = setTimeout(() => {
//             func.apply(this, args);
//         }, delay);
//     };
// }


// function logMousePosition(e) {
//     console.log(e.clientX, e.clientY);
// }


// const debouncedMouseMove = debounce(logMousePosition, 300);


// window.addEventListener('mousemove', debouncedMouseMove);




3
// async function fetchUsers(page = 1, limit = 30) {
//     try {
        
//         const skip = (page - 1) * limit;

        
//         const response = await fetch(`https://dummyjson.com/users?limit=${limit}&skip=${skip}`);
//         const data = await response.json();

        
//         console.log(`Page ${page} of users:`);
//         data.users.forEach(user => {
//             console.log(`${user.id}: ${user.firstName} ${user.lastName} - ${user.email}`);
//         });

        
//         console.log(`Total users: ${data.total}`);
      
//         const totalPages = Math.ceil(data.total / limit);
//         console.log(`Total pages: ${totalPages}`);

//         return data.users;
//     } catch (error) {
//         console.error('Error fetching users:', error);
//     }
// }


// fetchUsers(1);
// fetchUsers(2);



