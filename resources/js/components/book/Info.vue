<template>
    <div class="container">
        <div class="book-info">
            <label>Название книги</label>
            <p>{{book.title}}</p>
            <label>Описание книги</label>
            <p>{{book.description}}</p>
            <label>Раздел</label>
            <div class="category-info" v-for="category in categories">
                <p v-if="category.id == book.category_id">{{ category.title }}</p>
            </div>
            <div class="options">
                <router-link class="edit-option" :to='{name:"bookEdit",params:{id:book.id}}'>Редактировать</router-link>
                <button class="delete-option" @click="deleteBook(book.id)">Удалить</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"info-book",
    data(){
        return {
            categories:[],
            book:{
                title:"",
                description:"",
                category_id:"",
                _method:"patch"
            }
        }
    },
    mounted(){
        this.showBook(), this.getCategories()
    },
    methods:{
        async showBook(){
            await this.axios.get(`/api/book/${this.$route.params.id}`).then(response=>{
                const { id } = response.data
                const { title } = response.data
                const { description } = response.data
                const { category_id } = response.data
                this.book.id = id
                this.book.title = title
                this.book.description = description
                this.book.category_id = category_id
            }).catch(error=>{
                console.log(error)
            })
        },
        deleteBook(id){
            if(confirm("Are you sure to delete this book ?")){
                this.axios.delete(`/api/book/${id}`).then(response=>{
                    this.$router.push({name:"categoryList"})
                }).catch(error=>{
                    console.log(error)
                })
            }
        },
        async getCategories(){
            await this.axios.get('/api/category').then(response=>{
                this.categories = response.data
            }).catch(error=>{
                console.log(error)
                this.categories = []
            })
        },
    }
}
</script>
