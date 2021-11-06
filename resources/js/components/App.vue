<template>
    <main>
        <nav class="navbar">
            <router-link class="navbar-item" :to='{name:"categoryList"}'>Список книг</router-link>
            <router-link class="navbar-item" :to='{name:"categoryAdd"}'>Добавить раздел</router-link>
            <router-link class="navbar-item" :to='{name:"bookAdd"}'>Добавить книгу</router-link>
        </nav>
        <router-view></router-view>
    </main>
</template>

<script>
    export default {}
</script>
