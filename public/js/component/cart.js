"use strict";

const cart = {
  template: `
    <section ng-repeat="item in $ctrl.cart">
     <input  class="product" ng-blur="$ctrl.updateCart(item);" ng-model="item.product">
     <input  class="quantity" ng-blur="$ctrl.updateCart(item);" ng-model="item.quantity">
     <input class="price"  ng-blur="$ctrl.updateCart(item);" ng-model="item.price">
         <a href="" ng-click="$ctrl.deleteCart(item.id);">Delete</a>
    </section>

     <form ng-submit="$ctrl.addCart($ctrl.newItem);">
      <input class="newProduct" type="text" placeholder="Product"  ng-model="$ctrl.newItem.product">
      <input  class="newQuantity" type="text" placeholder="Quanity"  ng-model="$ctrl.newItem.quanity">
      <input class="newPrice" type="text" placeholder="Price"    ng-model="$ctrl.newItem.price">
      <button> Add Product</button>
     </form>
    `,
  controller: ["CartService", function (CartService) {
    const vm = this;
    CartService.getCart().then((response) => {
      vm.cart = response.data;
    });
    vm.addCart = (newItem) => {
      CartService.addCart(newItem).then((response) => {
        vm.cart = response.data;
      });
      vm.newItem = {};
    };
    vm.deleteCart = (id) => {
      CartService.deleteCart(id).then((response) => {
        vm.cart = response.data;
      });
    };
    vm.updateCart = (item) => {
      CartService.updateCart(item).then((response) => {
        vm.cart = response.data;
      });
    };
  }]
};






angular
  .module("app")
  .component("cart", cart);