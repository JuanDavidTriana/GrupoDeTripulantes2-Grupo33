<template>
  <div class="cart-body" v-if="products">
    <div class="producto" v-for="product in products" :key="product.id">
      <img
        class="ui image fluid"
        :src="API_URL + product.image.url"
        :alt="product.name"
      />
      <div class="info">
        <p>{{ product.name }}</p>
        <div class="price">
          <p>{{ product.price }} $</p>

          <div class="quantity">
            <button
              class="ui button"
              size="large"
              @click="increaseProductsCart(product.id)"
            >
              +
            </button>
            <p>{{ product.quantity }}</p>
            <button
              class="ui button"
              size="large"
              @click="decreaseProductsCart(product.id)"
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { addProductCartApi, deleteProductCartApi } from '../../api/cart';
import { API_URL } from '../../utils/constants';
export default {
  name: 'CartBody',
  props: {
    products: Array,
    realoadCartFn: Function,
  },
  setup(props) {
    const increaseProductsCart = (id) => {
      addProductCartApi(id);
      props.realoadCartFn();
    };

    const decreaseProductsCart = (id) => {
      deleteProductCartApi(id);
      props.realoadCartFn();
    };

    return {
      API_URL,
      increaseProductsCart,
      decreaseProductsCart,
    };
  },
};
</script>

<style lang="scss" scoped>
.cart-body {
  padding: 20px 10px;
  overflow-y: scroll;
  height: calc(100vh - 50px - 90px);
  &::-webkit-scrollbar {
    display: none;
  }
  .producto {
    display: flex;
    height: 100px;
    margin: 1.5rem 0;
    .ui.image.fluid {
      width: 100px !important;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
    }
    .price {
      display: flex;
      justify-content: space-between;
      p {
        margin: 0;
      }
    }
    .quantity {
      display: flex;
      align-items: center;
      p {
        margin: 0 10px;
      }
      button {
        padding: 4px 10px;
      }
    }
  }
}
</style>
