import { ref} from 'vue';
import { defineStore } from 'pinia';

export const useProductStore = defineStore('Product', () => {
  const products = ref([
    {id: 1, name: 'Harry Potter e a Pedra Filosofal', price: 59.9, qty: 100},
    {id: 2, name: 'A Divina Comédia', price: 79.9, qty: 77},
    {id: 3, name: 'Senhor dos Anéis: A Sociedade do Anel', price: 119.9, qty: 50},
    {id: 4, name: 'Vinte mil léguas submarinas', price: 69.9, qty: 20},
    {id: 5, name: 'O Zorro', price: 49.9, qty: 90},
  ]);


  function getProductById(id) {
    for (let product of products.value) {
      if (product.id == id) {
        return product
      }
      
    }
    return null;
    // return products.value.find((product) => product.id == id);
  }

  function deleteProductById(id) {
   const position = products.value.findIndex((product) => product.id == id);
   products.value.splice(position, 1);
  }

  return { products, getProductById, deleteProductById};
})
