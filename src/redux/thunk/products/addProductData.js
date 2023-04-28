import { addProduct } from "../../actionCreators/productAction";

const addProductData = (product) => {
  return async (dispatch, getState) => {
    const res = await fetch(
      "https://moon-tech-server-cyan.vercel.app/product",
      {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          "content-type": "application/json",
        },
      }
    );
    const data = await res.json();

    if (data.acknowledged) {
      dispatch(
        addProduct({
          _id: data.insertedId,
          ...product,
        })
      );
    }
  };
};

export default addProductData;
