<template>
    <div class="container">
        <div v-if="categories.length > 0">
            <div v-for="(category,key) in categories" :key="key">
                <div class="category">
                    <p class="category-title">Раздел: {{ category.title }}</p>
                    <div class="options">
                        <router-link class="edit-option" :to='{name:"categoryEdit",params:{id:category.id}}'>Редактировать</router-link>
                        <button class="delete-option" @click="deleteCategory(category.id)">Удалить</button>
                    </div>
                </div>
                <div v-for="(book,key) in books" :key="key">
                    <div v-if="category.id == book.category_id">
                        <div class="book">
                            <router-link class="book-title" :to='{name:"bookInfo",params:{id:book.id}}'>Книга: {{ book.title }}</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="not-found" v-else>
            <p>Разделы не найдены.</p>
        </div>
    </div>
</template>

<script>
export default {
    name:"categories",
    data(){
        return {
            categories:[],
            books: []
        }
    },
    mounted(){
        this.getCategories(), this.getBooks()
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
        deleteCategory(id){
            if(confirm("Are you sure to delete this category ?")){
                this.axios.delete(`/api/category/${id}`).then(response=>{
                    this.getCategories()
                }).catch(error=>{
                    console.log(error)
                })
            }
        },
        async getBooks(){
            await this.axios.get('/api/book').then(response=>{
                this.books = response.data
            }).catch(error=>{
                console.log(error)
                this.books = []
            })
        },
    }
}
</script>
