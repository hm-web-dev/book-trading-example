<template>
    <img :src="book.cover" :alt="book.title" height="400" width="200">
    <h3>{{ book.title }}</h3>
    <p>{{ book.author }}</p>
    <p>ISBN: {{ isbn }}</p>

</template>

<script lang="ts">
import type { Book } from '@shared/book';

// 1. fetch information about the book from the server
export default {
    props: {
        isbn: String,
    },
    data() {

        return {
            book: {
                cover: '',
                title: '',
                author: '',
                isbn: this.$props.isbn
            } as Book
        }
    },
    created() {
        if (this.$props.isbn) {
            this.fetchBook(this.$props.isbn);
        }
    },
    methods: {
        async fetchBook(isbn: string) {
            try {
                const response = await fetch(`https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`);
                // is a jpg file 
                this.book.cover = response.url;
                console.log(response.url);
                console.log(response.body);

            } catch (error) {
                console.error('Error fetching book:', error);
            }
        }
    }
}
</script>
