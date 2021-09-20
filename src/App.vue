<template>
  <div id="app">

    <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#" class="brand-logo center">Produtos</a>
      </div>
    </nav>

    <div class="container">

      <form @submit.prevent="save">

          <label>Nome</label>
          <input type="text" placeholder="Nome" v-model="createProduct.nome" required>
          <label>Quantidade</label>
          <input type="number" placeholder="QTD"  v-model="createProduct.quantidade" required>
          <label>Valor</label>
          <input type="text" placeholder="Valor"  v-model="createProduct.valor" required>

          <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>

      </form>

      <table>

        <thead>

          <tr>
            <th>NOME</th>
            <th>QTD</th>
            <th>VALOR</th>
            <th>OPÇÕES</th>
          </tr>

        </thead>

        <tbody>

          <tr v-for="product of products" :key="product.id">

            <td>{{product.nome}}</td>
            <td>{{product.quantidade}}</td>
            <td>R${{product.valor}}</td>
            <td>
              <button @click='updateProductById(product)' class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
              <button @click='removeProduct(product)' class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
            </td>

          </tr>

        </tbody>
      
      </table>

    </div>

  </div>
</template>

<script>

import Produto from './service/products'

export default {

  data(){
    return{
      createProduct: {
        id: '',
        nome: '',
        quantidade: '',
        valor: ''
      },
      products: []
    }
  },

  mounted(){
    this.list()
  },

  methods:{

    list(){
      Produto.list().then(res => {
        this.products = res.data
      })
    },

    save(){

      if(!this.createProduct.id){
        Produto.save(this.createProduct)
          this.createProduct = {}
          alert('salvo com sucesso!')
          this.list()
      }else{
        Produto.update(this.createProduct)
          this.createProduct = {}
          alert('Atualizado com sucesso!')
          this.list()
      }
    },

    updateProductById(updateProduct){
        this.createProduct = updateProduct
    },

    removeProduct(remove){
      if(confirm('Deseja excluir o produto')){
        Produto.delete(remove)
        this.list()
      }

    }
  }

}

</script>

<style>

</style>
