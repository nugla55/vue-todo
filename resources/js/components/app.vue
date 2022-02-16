<template>
    <div class="container mt-3">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card mb-3">
                    <div class="card-header text-center">ToDo App</div>
                    <add-item-form v-on:reloadList="getList()" />
                </div>
                <ul class="list-group mt-1" v-for="(item) in items" :key="item.id">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        {{ item.name }}
                        <div>
                        <span @click="updateItem(item.id)" class="badge badge-primary badge-pill">{{item.completed ? 'completed':'incomplate'}}</span>
                        <span @click="deleteItem(item.id)" class="badge badge-danger badge-pill ml-3">remove</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import addItemForm from './addItemForm.vue'

    export default {
        components:{
            addItemForm,
        },
        data: function(){
            return {
                items: []
            }
        },
         methods: {
             getList(){
                 axios.get('api/items',{item: this.item})
                .then(response => {
                    this.items=response.data
                })
                .catch(error => {
                    console.log(error); 
                })
             },
             deleteItem(id){
                 axios.delete('api/item/'+id)
                .then(response => {
                    if(response.status==200){
                        this.getList();
                    }
                })
                .catch(error => {
                    console.log(error); 
                })
             },
             updateItem(id){
                 axios.put('api/item/'+id , { item:this.items.find(x => x.id == id) })
                .then(response => {
                    if(response.status==200){
                        this.getList();
                    }
                })
                .catch(error => {
                    console.log(error); 
                })
             }
         },
         created(){
             this.getList(); 
         }
    }
</script>
