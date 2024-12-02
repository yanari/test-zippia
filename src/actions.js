export async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await res.json()
    
    if (!res.ok) {
        return { message: res.text }
    }
    
    return json;
}

export async function filterUsers(formData) {
    const rawFormData = {
        name: formData.get('name')
    }
    
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await res.json()
    
    if (!res.ok) {
        return { message: res.text }
    }
    
    return json;
}