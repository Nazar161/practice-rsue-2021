export default class OurService {
    
    getResource = async (url) => {
        const res = await fetch(`http://localhost:8000${url}`);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`); 
        }

        return await res.json();
    }

    getListItems = async () => {
        const res = await this.getResource('/list/');
        return res;
    }
}