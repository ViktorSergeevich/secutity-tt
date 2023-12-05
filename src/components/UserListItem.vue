<script setup lang="ts">
import IconDocumentation from '@/components/icons/IconProfile.vue'
import { useUsersStore } from '@/stores/users'

const props = defineProps<{ user: TUser }>()

const store = useUsersStore()

function handleClick() {
  store.setViewedUser(props.user)
}
</script>

<template>
    <li class="list-item" :class="{ selected: store.selectedUserId === user.id }" @click="handleClick">
      <div class="list-item__icon">
        <IconDocumentation/>
      </div>
      <div class="list__title">
        Пользователь {{ user.id }}
      </div>
    </li>
</template>

<style lang="scss" scoped>
.list-item {
  display: flex;
  padding: 0 20px;

  &__icon {
    width: 20px;
    height: 20px;
  }

  &__title {
    flex: 1
  }
}

.selected {
  background: cornflowerblue;
}
</style>
