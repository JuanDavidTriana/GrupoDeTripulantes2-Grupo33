<template>
  <div class="ui card product">
    <div class="image">
      <img :src="API_URL + product.image.url" :alt="product.name" />
    </div>
    <div class="content">
      <div class="header">{{ product.name }}</div>
      <div class="description">{{ product.price }} $</div>
    </div>
    <div class="ui button" @click="addProductCart(product.id)">
      Comprar
    </div>
  </div>
</template>

<script>
import { API_URL } from '../utils/constants';
import { addProductCartApi } from '../api/cart';

export default {
  name: 'Product',
  props: {
    product: Object,
  },
  setup(props) {
    const addProductCart = (idProduct) => {
      addProductCartApi(idProduct);
    };

    return {
      API_URL,
      addProductCart,
    };
  },
};
</script>

<style lang="scss" >
.product {
  height: 436px;
  .image{
  height: 300px;
  box-sizing: border-box;
    img{
      width: 100% !important;
      height: 100% !important;
      margin: auto;
      box-sizing: border-box;
    }

  }
  &:hover {
    .ui.button {
      min-height: 36px;
    }
  }
  .ui.button {
    background: #7C4DFF;
    color: #FFFFFF;
    max-height: 0;
    min-height: 0;
    overflow: hidden;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: min-height 0.6s ease;

    &:hover{
    background: #9C27B0;
    color: #FFFFFF;
    }
  }
}
</style>
