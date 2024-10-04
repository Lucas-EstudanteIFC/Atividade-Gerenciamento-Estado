<script setup>
import { useRouter } from 'vue-router';
import { useProductStore } from '@/stores/product';
import { ref, reactive } from 'vue';
const productStore = useProductStore();
const router = useRouter();

function visualizar(id) {
  router.push(`/produto/${id}`)
}

const newProduct = reactive({ id: 0, name: '', price: 0, qty: 0 });

const lastID = ref(productStore.products.length + 1);
const newId = lastID.value;

function adicionarProduto() {
  newProduct['id'] = newId;
  productStore.products.push(newProduct);
};


</script>

<template>
  <h1>Formulario de produto</h1>
  <form @submit.prevent="adicionarProduto">
    <label for="">Nome</label>
    <input type="text" v-model="newProduct['name']">
    <br>
    <label for="">Preço</label>
    <input type="number" v-model="newProduct['price']">
    <br>
    <label for="">Quantidade</label>
    <input type="number" v-model="newProduct['qty']">
    <br>
    <button type="submit">Adicionar Produto</button>

  </form>
  <p>{{ productStore.products.length }}</p>

  <p> {{ newProduct }}</p>
  <hr>
  <h1>Listagem de Produtos</h1>
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Nome</th>
        <th>Preço</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in productStore.products" :key="product.id">
        <td>{{ product.id }}</td>
        <td>{{ product.name }}</td>
        <td>{{ product.price }}</td>
        <td><button @click="visualizar(product.id)">Ver</button></td>
        <td><button @click="productStore.deleteProductById(product.id)">Excluir</button></td>

      </tr>
    </tbody>

  </table>
</template>
