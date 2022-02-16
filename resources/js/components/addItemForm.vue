<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                    <div class="form-group">
                        <label for="todo">Add ToDo</label>
                         <div class="input-group mb-3">
                            <input type="text" v-model="item.name" class="form-control">
                            <div class="input-group-append">
                                <button class="btn btn-outline-secondary" @click="addItem() " :disabled="item.name == ''" type="button">add</button>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data: function(){
            return {
                item: {
                    name:""
                }
            }
        },
        methods: {
            addItem(){
                if(this.item.name==''){
                    return;
                }

                axios.post('api/item/store',{item: this.item})
                .then(response => {
                    if(response.status==201){
                        this.item.name="";
                        this.$emit('reloadList');
                    }
                })
                .catch(error => {
                    console.log(error); 
                })

            }
        }
    }
</script>
