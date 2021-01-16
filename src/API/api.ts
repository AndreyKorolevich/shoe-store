const api = {
  fetchSalesHitApi: async () => {
    try {
      const response = await fetch("http://localhost:7070/api/top-sales");
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    } catch (e) {
      throw new Error(e);
    }
  },
  fetchCatalogApi: async () => {
    try {
      const response = await fetch("http://localhost:7070/api/top-sales");
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    } catch (e) {
      throw new Error(e);
    }
  },
};

export default api;
