<template>
    <div class="container">
        <form @submit.prevent="update">
            <div class="edit-menu">
                <input type="text" v-model="category.title" placeholder="Название раздела">
                <button class="save-button" type="submit">Сохранить</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name:"update-category",
    data(){
        return {
            category:{
                title:"",
                _method:"patch"
            }
        }
    },
    mounted(){
        this.showCategory()
    },
    methods:{
        async showCategory(){
            await this.axios.get(`/api/category/${this.$route.params.id}`).then(response=>{
                const { title } = response.data
                this.category.title = title
            }).catch(error=>{
                console.log(error)
            })
        },
        async update(){
            await this.axios.post(`/api/category/${this.$route.params.id}`,this.category).then(response=>{
                this.$router.push({name:"categoryList"})
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>
