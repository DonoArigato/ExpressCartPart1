"use strict";

function CartService($http) {

  const getCart = () => {
    return $http({
      method: "GET",
      url: "/portal/cart"
    });
  };

  const addCart = (newItem) => {
    return $http({
      method: "POST",
      url: "/portal/cart",
      data: newItem
    });
  };

  const updateCart = (cart) => {
    return $http({
      method: "PUT",
      url: "/portal/cart/" + cart.id,
      data: cart
      
    });
  };
  

  const deleteCart = (id) => {
    return $http({
      method: "DELETE",
      url: "/portal/cart/" + id,
    });
  };

  return {
    getCart,
    addCart,
    updateCart,
    deleteCart
  };
}

angular
  .module("app")
  .factory("CartService", CartService);

// This is the end of your funciton declaration. That means you aren't actually assigning the service to angular, since that
// part has to be done OUTSIDE of the declaration (since you pass it as a parameter to the .factory() method.