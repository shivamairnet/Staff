export function fetchAllstaffs(){
    return new Promise(async(resolve, reject)=>{
        try {
            const response=await fetch(`http://localhost:8000/staffs`)
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

export function createStaff(staff){
    return new Promise(async(resolve)=>{
        const response=await fetch(`http://localhost:8000/staffs`,{
            method:'POST',
            body:JSON.stringify(staff),
            headers:{
                'Content-Type':'application/json'}
        });
        const data=await response.json();
        resolve({data})
    })
}

export function updatestaffById(update){
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

export function fetchStaffbyId(id){
    return new Promise(async(resolve, reject)=>{
        try {
            const response=await fetch(`http://localhost:8000/staffs/${id}`)
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

export function deletestaffById(staffid){
    return new Promise(async(resolve, reject)=>{
        const response=await fetch(`http://localhost:8000/staffs/${staffid}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        })
        const data=await response.json()
        resolve({data:{id:staffid}})
    })
}
