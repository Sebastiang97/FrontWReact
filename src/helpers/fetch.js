export const queryEmpleos = async (query)=>{
    const url = 'https://jsonplaceholder.typicode.com/users';
    const data = await fetch(`${url}`)
    const user = await data.json()
    return user;
}

export const data = [
  {
    name: "Santa Monica",
    number: 1995,
    amount: "$10,800",
    due: "12/05/1995",
  },
  {
    name: "Stankonia",
    number: 2000,
    amount: "$8,000",
    due: "10/31/2000",
  },
  {
    name: "Ocean Avenue",
    number: 2003,
    amount: "$9,500",
    due: "07/22/2003",
  },
  {
    name: "Tubthumper",
    number: 1997,
    amount: "$14,000",
    due: "09/01/1997",
  },
  {
    name: "Wide Open Spaces",
    number: 1998,
    amount: "$4,600",
    due: "01/27/2998",
  },
]; 

export const buscarId = (id = '') => {
    return data.filter(d => d.id === id)
}

export const buscarCategoria = (categoria = '') => {
    //return data.filter(d => d.id == id)
}

export const buscarEmplobyName = (name = '') => {
    //let query = name.toLocaleLowerCase
    return data.find(d => d.name === name)
}