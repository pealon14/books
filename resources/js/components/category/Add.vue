<template>
    <div class="container">
        <form @submit.prevent="create">
            <div class="edit-menu">
                <input type="text" v-model="category.title" placeholder="Название раздела">
                <button class="save-button" type="submit">Сохранить</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name:"add-category",
    data(){
        return {
            category:{
                title:"",
            }
        }
    },
    methods:{
        async create(){
            await this.axios.post('/api/category',this.category).then(response=>{
                this.$router.push({name:"categoryList"})
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>
