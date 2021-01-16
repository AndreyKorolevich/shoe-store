import React from "react";
import CatalogNavbar from "./CatalogNavbar";
import Card from "./Card";

const Catalog = () => {
  return (
    <>
      <section className="catalog">
        <h2 className="text-center">Каталог</h2>
        <form className="catalog-search-form form-inline">
          <input className="form-control" placeholder="Поиск" />
        </form>
        <CatalogNavbar />
        <div className="row">
          <Card
            price="34 000 руб."
            id={1}
            src="https://cdn-images.farfetch-contents.com/12/93/06/52/12930652_13567910_1000.jpg"
            title="Босоножки 'MYER'"
          />
          <Card
            price="7 600 руб."
            id={2}
            src="https://cdn-images.farfetch-contents.com/12/94/66/72/12946672_13518465_1000.jpg"
            title="Босоножки 'Keira'"
          />
          <Card
            price="1 400 руб."
            id={3}
            src="https://cdn-images.farfetch-contents.com/12/99/04/32/12990432_13705715_1000.jpg"
            title="Супергеройские кеды"
          />
          <Card
            price="34 000 руб."
            id={1}
            src="https://cdn-images.farfetch-contents.com/12/93/06/52/12930652_13567910_1000.jpg"
            title="Босоножки 'MYER'"
          />
          <Card
            price="7 600 руб."
            id={2}
            src="https://cdn-images.farfetch-contents.com/12/94/66/72/12946672_13518465_1000.jpg"
            title="Босоножки 'Keira'"
          />
          <Card
            price="1 400 руб."
            id={3}
            src="https://cdn-images.farfetch-contents.com/12/99/04/32/12990432_13705715_1000.jpg"
            title="Супергеройские кеды"
          />
        </div>
        <div className="text-center">
          <button type="button" className="btn btn-outline-primary">
            Загрузить ещё
          </button>
        </div>
      </section>
    </>
  );
};

export default Catalog;
