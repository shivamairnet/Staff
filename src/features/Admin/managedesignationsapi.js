export function fetchAlldesignations(){
    return new Promise(async(resolve, reject)=>{
        try {
            const response=await fetch(`http://localhost:8000/designations`)
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

export function createDesignation(designation){
    return new Promise(async(resolve)=>{
        const response=await fetch(`http://localhost:8000/designations`,{
            method:'POST',
            body:JSON.stringify(designation),
            headers:{
                'Content-Type':'application/json'}
        });
        const data=await response.json();
        resolve({data})
    })
}

export function updatedesignationById(update){
    return new Promise(async (resolve )=> {
        const response=await fetch(`http://localhost:8000/staffs/${update.id}`,{
            method:'PATCH',
            body:JSON.stringify(update),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const data=await response.json()
        resolve({data})
    });
}

export function fetchDesignationbyId(id){
    return new Promise(async(resolve, reject)=>{
        try {
            const response=await fetch(`http://localhost:8000/designations/${id}`)
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

export function deletedesignationById(designationid){
    return new Promise(async(resolve, reject)=>{
        const response=await fetch(`http://localhost:8000/designations/${designationid}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        })
        const data=await response.json()
        resolve({data:{id:designationid}})
    })
}
