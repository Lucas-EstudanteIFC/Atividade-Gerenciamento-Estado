<script setup>
import { useRouter } from 'vue-router';
import { useProductStore } from '@/stores/product';
const productStore = useProductStore();
const router = useRouter();

function visualizar(id) {
  router.push(`/produto/${id}`)
}

const ultimoId = ref(6);
const novoProduto = ref({
  id: 0, name: " ", price: 0, qty: 0
})

function adicionarProduto() {
  novoProduto.value.id = ultimoId;
  productStoreproducts.value.push(novoProduto.value);
}

</script>

<template>
  <h1>Formulario de produto</h1>
  <form action="@submit.prevent">
    <label for="">Nome</label>
    <input type="text" v-model="novoProduto.value.name">

    <label for="">Preço</label>
    <input type="number" v-model="novoProduto.value.price">

    <label for="">Quantidade</label>
    <input type="number" v-model="novoProduto.value.qty">
    <button @click="adicionarProduto"></button>
  </form>
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
