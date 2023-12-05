<script setup lang="ts">
  import UserListItem from '@/components/UserListItem.vue'
  import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
  import { useUsersStore } from '@/stores/users'

  const store = useUsersStore()

  store.getUserList()

</script>

<template>
  <div class="list">
    <RecycleScroller
        class="scroller"
        :items="store.users"
        :item-size="32"
        key-field="id"
        v-slot="{item}"
    >
      <UserListItem class="user" :user="item"/>
    </RecycleScroller>
  </div>
</template>

<style scoped>
.scroller {
  height: 100%;
}

.user {
  height: 32%;
  display: flex;
  align-items: center;
}
</style>
