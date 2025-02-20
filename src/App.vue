<script lang="ts">
import NavBar from './components/NavBar.vue'
import type { Trade, OutgoingTrade } from '../shared/book'

export default {
  components: { NavBar },
  data() {
    return {
      incomingTrades: [] as Trade[],
      outgoingTrades: [] as OutgoingTrade[],
      tradeHistory: [] as Trade[],
    }
  },
  created() {
    // TODO: make a request to the server to get the active trades
    this.incomingTrades = [
      {
        id: 1,
        book: {
          cover: 'https://m.media-amazon.com/images/I/8125BDk3l9L._SL1500_.jpg',
          id: 3,
          title: 'The Catcher in the Rye',
          author: 'J.D. Salinger'
        },
        offeredBy: 'Jane Smith',
        status: 'pending',
        createdAt: '2025-01-31'
      }
    ];
    this.outgoingTrades = [
      {
        id: 2,
        book: {
          id: 4,
          title: '1984',
          author: 'George Orwell',
          cover: 'https://m.media-amazon.com/images/I/61NAx5pd6XL.jpg'
        },
        offeredBy: 'John Doe',
        offeredTo: 'Jane Smith',
        status: 'pending',
        createdAt: '2025-01-30'
      }
    ]
    this.tradeHistory = [
      {
        id: 1,
        book: {
          id: 1,
          title: 'The Great Gatsby',
          author: 'F. Scott Fitzgerald',
          cover: 'https://i0.wp.com/americanwritersmuseum.org/wp-content/uploads/2018/02/CK-3.jpg?resize=267%2C400&ssl=1'
        },
        createdAt: '2025-01-10',
        status: 'accepted',
        offeredBy: 'Someone'
      }
    ]
  },
  methods: {
    createTrade(trade: OutgoingTrade) {
      this.outgoingTrades.push(trade)
    },
    acceptTrade(trade: Trade) {
      this.tradeHistory.push(trade);
      this.incomingTrades = this.incomingTrades.filter(t => t.id !== trade.id);
    }
  }
}
</script>


<template>

  <NavBar></NavBar>


  <RouterView @trade-accepted="acceptTrade" @create-trade="createTrade" :tradeHistory="tradeHistory"
    :outgoingTrades="outgoingTrades" :incomingTrades="incomingTrades" :account_id="2" />
</template>
