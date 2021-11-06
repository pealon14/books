<template>
    <div class="container">
        <form @submit.prevent="create">
            <div class="edit-menu">
                <input type="text" v-model="book.title" placeholder="Название книги">
                <textarea type="text" v-model="book.description" placeholder="Описание книги"></textarea>
                <select v-model="book.category_id">
                    <option value="" disabled selected>Выберите раздел</option>
                    <option v-for="category in categories" v-bind:value="category.id">{{category.title}}</option>
                </select>
                <button class="save-button" type="submit">Сохранить</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name:"add-book",
    data(){
        return {
            categories:[],
            book:{
                title:"",
                description:"",
                category_id:""
            }
        }
    },
    mounted() {
        this.getCategories()
    },
    methods:{
        async getCategories(){
            await this.axios.get('/api/category').then(response=>{
                this.categories = response.data
            }).catch(error=>{
                console.log(error)
                this.categories = []
            })
        },
        async create(){
            await this.axios.post('/api/book',this.book).then(response=>{
                this.$router.push({name:"categoryList"})
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>
