export default class Api {
  static url() {
    return 'http://localhost:7070/api/';
  }

  static async fetchSalesHitApi() {
    try {
      const response = await fetch(`${Api.url()}top-sales`);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    } catch (e: any) {
      throw new Error(e);
    }
  }

  static async fetchCatalogApi(selectCategory: number) {
    try {
      const allElements = await fetch(`${Api.url()}items?categoryId=${selectCategory}`);
      if (!allElements.ok) {
        throw new Error(allElements.statusText);
      }
      return allElements.json();
    } catch (e: any) {
      throw new Error(e);
    }
  }

  static async fetchCategoriesApi() {
    try {
      const categories = await fetch(`${Api.url()}categories`);
      if (!categories.ok) {
        throw new Error(categories.statusText);
      }
      return categories.json();
    } catch (e: any) {
      throw new Error(e);
    }
  }

  static async fetchCertainShoesApi(id: number, search: string) {
    try {
      const shoes = await fetch(`${Api.url()}items?categoryId=${id}&q=${search}`);
      if (!shoes.ok) {
        throw new Error(shoes.statusText);
      }
      return shoes.json();
    } catch (e: any) {
      throw new Error(e);
    }
  }

  static async fetchElseShoesApi(selectCategory: number, offset: number) {
    try {
      let shoes;
      if (selectCategory === 0) {
        shoes = await fetch(`${Api.url()}items?&offset=${offset}`);
      } else {
        shoes = await fetch(`${Api.url()}items?categoryId=${selectCategory}&offset=${offset}`);
      }

      if (!shoes.ok) {
        throw new Error(shoes.statusText);
      }
      return shoes.json();
    } catch (e: any) {
      throw new Error(e);
    }
  }

  static async searchSkillsApi(search: string, selectCategory: number) {
    try {
      let response;
      if (selectCategory === 0) {
        response = await fetch(`${Api.url()}items?q=${search}`);
      } else {
        response = await fetch(`${Api.url()}items?categoryId=${selectCategory}&q=${search}`);
      }

      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    } catch (e: any) {
      throw new Error(e);
    }
  }

  static async fetchCardDetailsApi(id: string) {
    try {
      const response = await fetch(`${Api.url()}items/${id}`);

      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    } catch (e: any) {
      throw new Error(e);
    }
  }

  static async sendFormApi(data) {
    try {
      const response = await fetch(`${Api.url()}order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.ok;
    } catch (e: any) {
      throw new Error(e);
    }
  }
}
