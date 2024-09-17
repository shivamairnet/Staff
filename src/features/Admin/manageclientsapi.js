export function fetchAllclients(){
    return new Promise(async(resolve, reject)=>{
        try {
            const response=await fetch(`http://localhost:8000/clients`)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data=await response.json()
            resolve({data})
        } catch (error) {
            console.error('Fetch Error:', error);
            reject(error);
        }
    })
}

export function createClient(client){
    return new Promise(async(resolve)=>{
        const response=await fetch(`http://localhost:8000/clients`,{
            method:'POST',
            body:JSON.stringify(client),
            headers:{
                'Content-Type':'application/json'}
        });
        const data=await response.json();
        resolve({data})
    })
}