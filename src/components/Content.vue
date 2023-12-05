<script setup lang="ts">
import UsersList from '@/components/UsersList.vue'
import UserView from '@/components/UserView.vue'

</script>

<template>
  <Suspense>
    <template #default>
      <div class="content">
        <UsersList class="content__list"/>
        <UserView class="content__view-box"/>
      </div>
    </template>
    <template #fallback>...Loading</template>
  </Suspense>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  max-height: 500px;

  &__list {
    flex: 1;
    border: 1px solid black;
  }

  &__view-box {
    flex: 1;
  }
}
</style>
