<template>

    <img :src="book.cover" :alt="book.title" height="200" width="100">
    <h3>{{ book.title }}</h3>
    <p>{{ book.author }}</p>
</template>

<script lang="ts">
export default {
    props: {
        book: {
            cover: String,
            title: String,
            author: String
        }
    }

}
</script>
