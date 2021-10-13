<template>
    <BasicLayouts>
    <div class="ui container">
  <br/>
  <div class="ui segment">


  <h3>Contactenos </h3>
  <form id="my_form" class="ui form" method="post" action="mailto:treesa.mary@innocellence.com?subject=Feedback&body=Name:">
        <div class="field">
          <label class="label" >Nombre</label>
          <input type="text" name="name" placeholder="Nombre completo">
        </div>
        <div class="field">
          <label class="label" >Correo electronico</label>
          <input type="text" name="email" placeholder="Correo">
        </div>
         <div class="field">
          <label class="label" >Cuentanos</label>
          <textarea name="comments"></textarea>
        </div>
        <div class="ui error message"></div>
        <button id="form_button" class="ui button" type="submit">Enviar</button>
      </form>
  </div>
</div>
    </BasicLayouts>
</template>

<script>
    import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import BasicLayouts from '../layouts/BasicLayouts.vue';
import Product from '../components/Product.vue';
import { getCategoriesApi, getProductsCategory } from '../api/products';

export default {
  name: 'ContactUs',
  components: {
    BasicLayouts,
    Product,
  },
  watch: {
    $route(to, from) {
      this.getProduts(to.params.category);
    },
  },

  setup() {
    let products = ref(null);
    const { params } = useRoute();

    onMounted(() => {
      getProduts(params.category);
    });

    const getProduts = async (category) => {
      const response = await getProductsCategory(category);
      products.value = response;
    };

    return {
      getProduts,
      products,
    };
  },
};
</script>

<style lang="scss" scoped>
 .ui.container{
     color: #fff;
     .ui.segment{
         background: linear-gradient(90deg, rgba(159,55,203,1) 0%, rgba(225,190,231,1) 100%);
     }
 }
 .label{
     color:#fff !important;
 }
</style>