// import { removeProduct } from "../../actionCreators/productAction";

import { removeProduct } from "../../actionCreators/productAction";

// const deleteProduct = (id) => {
//   console.log(id);
//   return async (dispatch, getState) => {
//     const res = await fetch(`http://localhost:5000/product/${id}`, {
//       method: "DELETE",
//       headers: {
//         "content-type": "application/json",
//       },
//     });
//     const data = await res.json();

//     if (data.acknowledged) {
//       dispatch(removeProduct(id));
//     }
//   };
// };

// export default deleteProduct;
const deleteProduct = (id) => {
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:5000/product/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();
    if (data.acknowledged) {
      dispatch(removeProduct(id));
    }
  };
};
export default deleteProduct;
