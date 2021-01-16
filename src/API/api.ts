const api = {
  fetchSalesHitApi: async () => {
    try {
      const response = await fetch('http://localhost:7070/api/top-sales')
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json()
    } catch (e) {
      throw new Error(e)
    }
  },
  fetchCatalogApi: async () => {
    try {
      const allElements = await fetch('http://localhost:7070/api/items')
      if (!allElements.ok) {
        throw new Error(allElements.statusText)
      }
      return allElements.json()
    } catch (e) {
      throw new Error(e)
    }
  },
  fetchCategoriesApi: async () => {
    try {
      const categories = await fetch('http://localhost:7070/api/categories')
      if (!categories.ok) {
        throw new Error(categories.statusText)
      }
      return categories.json()
    } catch (e) {
      throw new Error(e)
    }
  },
  fetchCertainShoesApi: async id => {
    try {
      const shoes = await fetch(`http://localhost:7070/api/items?categoryId=${id}`)
      if (!shoes.ok) {
        throw new Error(shoes.statusText)
      }
      return shoes.json()
    } catch (e) {
      throw new Error(e)
    }
  },
  fetchElseShoesApi: async (selectCategory: number, offset: number) => {
    try {
      let soues
      if (selectCategory === 0) {
        soues = await fetch(`http://localhost:7070/api/items?&offset=${offset}`)
      } else {
        soues = await fetch(
          `http://localhost:7070/api/items?categoryId=${selectCategory}&offset=${offset}`
        )
      }

      if (!soues.ok) {
        throw new Error(soues.statusText)
      }
      return soues.json()
    } catch (e) {
      throw new Error(e)
    }
  },
}

export default api
