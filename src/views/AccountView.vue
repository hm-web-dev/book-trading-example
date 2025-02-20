<template>
    <div class="account">
        <h1>My Account</h1>
        <div class="profile-section">
            <h2>Profile Information</h2>
            <div class="user-info">
                <p><strong>Name:</strong> {{ userInfo.first_name }} {{ userInfo.last_name }}</p>
                <p><strong>Email:</strong> {{ userInfo.email }}</p>
            </div>
        </div>
        <div class="trades-history">
            <h2>Trade History</h2>
            <div v-for="trade in tradeHistory" :key="trade.id" class="trade-item">
                <p>{{ trade.book.title }} - {{ trade.createdAt }}</p>
                <span :class="trade.status">{{ trade.status }}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import type { Trade } from '../../shared/book';

export default {
    data() {
        return {
            userInfo: {
                first_name: '',
                last_name: '',
                email: '',
            },
        }
    },
    props: {
        account_id: Number,
        tradeHistory: Array<Trade>
    },
    created() {
        this.fetchUserInfo();
    },
    methods: {
        async fetchUserInfo() {
            try {
                // this is how you make a post request
                // const response = await fetch(`http://localhost:3999/user/create`,
                //     {
                //         method: 'POST',
                //         body: JSON.stringify({ first_name: 'asdf', last_name: 'asdf', email: 'asdf' }),
                //         headers: {
                //             'Content-Type': 'application/json'
                //         }
                //     });
                const response = await fetch(`http://localhost:3999/user/${this.account_id}`);
                const data = await response.json();
                this.userInfo = data;
            } catch (error) {
                console.error('Error fetching user info:', error);
            }
        }
    }
}
</script>