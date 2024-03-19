import { ProductFilters } from "../../components/ProductFilters/ProductFilters";
import { ProductListing } from "../../components/ProductListing/ProductListing";
import {Header} from '../../components/Header/Header';

export const Products = () => {
  return (
    <div className="mainApp">
    <div className="header">
      <Header />
    </div>
    <div className="h-full grid grid-cols-[1fr_3fr] gap-8 m-4">
      <ProductFilters />
      <ProductListing />
    </div>
    </div>
  );
};
