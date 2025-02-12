<script lang="ts">
import BookView from '@/components/BookThumbnail.vue'
import type { Book } from '../../shared/book'
export default {
  data() {
    return {
      featuredBooks: [
        {
          id: 1,
          isbn: 9780743273565,
          title: 'The Great Gatsby',
          author: 'F. Scott Fitzgerald',
          cover: 'https://i0.wp.com/americanwritersmuseum.org/wp-content/uploads/2018/02/CK-3.jpg?resize=267%2C400&ssl=1'
        },
        {
          id: 2,
          isbn: "978-0451524935",
          title: '1984',
          author: 'George Orwell',
          cover: 'https://m.media-amazon.com/images/I/61NAx5pd6XL.jpg'
        }
      ] as Book[]
    }
  },
  methods: {
    proposeTrade(bookId: number): void {
      // Implement trade proposal logic
    }
  },
  components: {
    BookView // child component
  }
}
</script>

<template>

  <div class="home">
    <h1>Featured Books</h1>
    <div class="book-grid">
      <div v-for="book in featuredBooks" :key="book.id" class="book-card">
        <BookView :book="book" />
        <button @click="proposeTrade(book.id)">Propose Trade</button>
        <router-link :book="book" :to="{ name: 'book', params: { isbn: book.isbn } }">View Details</router-link>
      </div>
    </div>
  </div>
</template>