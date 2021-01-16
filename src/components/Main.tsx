import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Preloader from "./Common/Preloader";
import SalesHit from "./SalesHit";
import {FETCH_CATALOG, FETCH_SALES_HIT} from "../redux/actions/actions";
import {
    getLoadingCatalog,
    getLoadingHit,
    getSalesHit,
} from "../redux/selectors/catalog_selectors";

const Main = () => {
  const isLoadingHit: boolean = useSelector(getLoadingHit);
  const isLoadingCatalog: boolean = useSelector(getLoadingCatalog);
  const salesHit = useSelector(getSalesHit);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: FETCH_SALES_HIT,
    });
    dispatch({
          type: FETCH_CATALOG,
      });
  }, [dispatch]);

  return (
    <>
      <section className="top-sales">
        <h2 className="text-center">Хиты продаж!</h2>
        {isLoadingHit ? <Preloader /> : <SalesHit salesHit={salesHit} />}
      </section>
      <section className="catalog">
        <h2 className="text-center">Каталог</h2>
          {isLoadingCatalog ? <Preloader /> : <SalesHit salesHit={salesHit} />}
      </section>
    </>
  );
};

export default Main;
