1
// async function delay(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function fetchWithRetries(url, {
//   fetchOptions = {},
//   maxRetries = 5,
//   baseDelay = 300 
// } = {}) {
//   let attempt = 0;
//   let lastError = null;

//   while (attempt <= maxRetries) {
//     try {
//       attempt++;
      
//       const res = await fetch(url, fetchOptions);

      
//       if (!res.ok) {
//         const text = await res.text().catch(() => '');
//         throw new Error(`HTTP ${res.status} ${res.statusText} - ${text}`);
//       }

      
//       const data = await res.json();
//       return { success: true, attempt, data };
//     } catch (err) {
//       lastError = err;
      
//       if (attempt > maxRetries) break;

 
//       const backoff = baseDelay * (2 ** (attempt - 1));
//       const jitter = Math.floor(Math.random() * 100);
//       const wait = backoff + jitter;

//       console.warn(`Fetch attempt ${attempt} failed: ${err.message}. retrying in ${wait}ms...`);
//       await delay(wait);
      
//     }
//   }

//   return { success: false, attempts: attempt, error: lastError };
// }


// (async () => {
//   const badUrl = "https://jsonplaceholde.typicode.com";
//   const result = await fetchWithRetries(badUrl, { maxRetries: 5 });

//   if (result.success) {
//     console.log("Fetched after", result.attempt, "attempt(s):", result.data);
//   } else {
//     console.error(`All retries failed (${result.attempt} attempts). Last error:`, result.error);
//   }
// })();




2
// const urls = [
//   'https://dummyjson.com/users',
//   'https://jsonplaceholder.typicode.com/users'
// ];

// async function logFirstResolved(urls) {
//   const controllers = urls.map(() => new AbortController());

//   const fetchPromises = urls.map((url, i) =>
//     fetch(url, { signal: controllers[i].signal })
//       .then(res => {
//         if (!res.ok) throw new Error(`${url} returned ${res.status}`);
//         return res.json();
//       })
//       .then(data => {
        
//         controllers.forEach((c, idx) => {
//           if (idx !== i) c.abort();
//         });
//         return { url, data };
//       })
//   );

//   try {
//     const { url, data } = await Promise.any(fetchPromises);
//     console.log('First resolved from:', url);

    
//     if (Array.isArray(data)) {
//       console.log(data.map(u => ({ id: u.id, name: u.name })));
//     } else if (Array.isArray(data.users)) {
//       console.log(data.users.map(u => ({ id: u.id, name: `${u.firstName} ${u.lastName}` })));
//     } else {
//       console.log(data);
//     }
//   } catch (err) {
//     console.error('All requests failed or were aborted:', err);
//   }
// }

// logFirstResolved(urls);




3
// async function logproductsover10() {
//   try {
//     const res = await fetch('https://dummyjson.com/products');
//     if (!res.ok) throw new Error('Failed to fetch products');
//     const data = await res.json();

    
//     const filtered = data.products.filter(p => p.price > 10);

//     console.log("Products with price > 10:");
//     filtered.forEach(p => {
//       console.log(`ID: ${p.id}, Title: ${p.title}, Price: ${p.price}`);
//     });
//   } catch (err) {
//     console.error("Error:", err.message);
//   }
// }


// logproductsover10();




4
// async function logwebdevelopers() {
//   try {
//     const res = await fetch("https://dummyjson.com/users");
//     if (!res.ok) throw new Error("Failed to fetch users");

//     const data = await res.json();

 
//     const webDevs = data.users.filter(user => 
//       user.company?.title?.toLowerCase() === "web developer"
//     );

//     console.log("Web Developers:");
//     webDevs.forEach(user => {
//       console.log({
//         firstName: user.firstName,
//         lastName: user.lastName,
//         city: user.address?.city,
//         email: user.email,
//         phone: user.phone
//       });
//     });
//   } catch (err) {
//     console.error("Error:", err.message);
//   }
// }


// logwebdevelopers();




5
// async function fetchalldata() {
//   const urls = [
//     "https://dummyjson.com/recipes",
//     "https://dummyjson.com/comments",
//     "https://dummyjson.com/todos",
//     "https://dummyjson.com/quotes"
//   ];

//   try {
    
//     const responses = await Promise.all(
//       urls.map(url => fetch(url))
//     );

    
//     const data = await Promise.all(
//       responses.map(res => {
//         if (!res.ok) throw new Error(`${res.url} failed with ${res.status}`);
//         return res.json();
//       })
//     );

    
//     console.log("Recipes:", data[0]);
//     console.log("Comments:", data[1]);
//     console.log("Todos:", data[2]);
//     console.log("Quotes:", data[3]);

//   } catch (err) {
//     console.error("Error:", err.message);
//   }
// }


// fetchalldata();
