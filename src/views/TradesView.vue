<template>
    <div class="trades=container">
        <div class="trades-section">

            <h1>Incoming Trades</h1>
            <div class="trades-list">
                <div v-for="trade in incomingTrades" :key="trade.id" class="trade-card">
                    <div class="trade-details">
                        <h3>{{ trade.book.title }}</h3>
                        <p>Offered by: {{ trade.offeredBy }}</p>
                        <p>Status: {{ trade.status }}</p>
                    </div>
                    <div class="trade-actions">
                        <button class="accept-btn" @click="acceptTrade(trade)">Accept</button>
                        <button class="decline-btn" @click="declineTrade(trade.id)">Decline</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="trades-section">
            <h1>Your Pending Trade Requests</h1>
            <div class="trades-list">
                <div v-for="trade in outgoingTrades" :key="trade.id" class="trade-card">

                    <div class="trade-details">
                        <h3>{{ trade.book.title }}</h3>
                        <p>Sending to: {{ trade.offeredTo }}</p>
                        <p>Status: {{ trade.status }}</p>
                    </div>
                    <div class="trade-actions" v-if="trade.status === 'pending'">
                        <button @click="cancelTrade(trade.id)" class="cancel-btn">Cancel Request</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import type { Trade, OutgoingTrade } from '../../shared/book';
import BookView from '@/components/BookView.vue';

export default {
  components: {
      BookView
    },
  data() {
        return {
        }
    },
    props: {
        incomingTrades: Array<Trade>,
        outgoingTrades: Array<OutgoingTrade>,
    },
    emits: ['trade-accepted'],
    methods: {
        acceptTrade(tradeId: Trade): void {
          this.$emit('trade-accepted', tradeId);
        },

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        declineTrade(tradeId: number): void {
            // Implement decline logic
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        cancelTrade(tradeId: number): void {

        }
    },

}
</script>

<style scoped>
.trades-container {
    display: grid;
    gap: 2rem;
    padding: 1rem;
}

.trades-section {
    padding: 1rem;
    border-radius: 8px;
}

.trades-list {
    display: grid;
    gap: 1rem;
}

.trade-card {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 1rem;
    padding: 1rem;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.book-cover {
    width: 100px;
    height: 150px;
    object-fit: cover;
    border-radius: 4px;
}

.trade-actions {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

button {
    padding: 0.5rem 1rem;
    border-radius: 4px;
    border: none;
    cursor: pointer;
}

.accept-btn {
    background: #4CAF50;
    color: white;
}

.decline-btn {
    background: #f44336;
    color: white;

}

.cancel-btn {

    background: #aaaaaa;
    color: white;
}
</style>
