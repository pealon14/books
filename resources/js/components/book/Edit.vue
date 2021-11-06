<template>
    <div class="container">
        <form @submit.prevent="update">
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
    name:"update-book",
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
                const { title } = response.data
                const { description } = response.data
                const { category_id } = response.data
                this.book.title = title
                this.book.description = description
                this.book.category_id = category_id
            }).catch(error=>{
                console.log(error)
            })
        },
        async getCategories(){
            await this.axios.get('/api/category').then(response=>{
                this.categories = response.data
            }).catch(error=>{
                console.log(error)
                this.categories = []
            })
        },
        async update(){
            await this.axios.post(`/api/book/${this.$route.params.id}`,this.book).then(response=>{
                this.$router.push({name:"categoryList"})
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>
