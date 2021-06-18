import axios from "axios"


export const getBooks = async () => {
      const result = await axios.get("https://openlibrary.org/works/OL45883W.json").catch((err) => console.log(err))
      return result

}

export const search = async (query) => {
        const result = await axios.get(`http://openlibrary.org/search.json?q=${query}`).catch((err) => console.log(err))
       return result

}


export const works = async (query) => {
       const result = await axios.get(`http://openlibrary.org${query}.json`).catch((err) => console.log(err))
       return result

}
