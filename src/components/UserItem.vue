<script setup lang="ts">
import { useUsersStore } from '@/stores/users'
import { storeToRefs } from 'pinia'
import ImgAvatar from '@/components/ImgAvatar.vue'

const store = useUsersStore()
const { viewedUser: user } = storeToRefs(store)

</script>

<template>
  <div class="user" v-if="user">
    <div class="user__name">
      <input disabled type="text" name="username" id="username" :value="user.name">
<!--      {{user.name}}-->
    </div>
    <div class="user__info user-info">
      <div class="user-info__avatar" :class="{'user-info__avatar--active': !user.active}">
        <ImgAvatar :key="user.id" :src="user.avatar"/>
      </div>
      <div class="user-info__data user-info-data">
        <div class="user-info-data__row">
          <div class="user-info-data__label">Должность</div>
          <input class="user-info-data__input" disabled type="text" name="position" id="position" :value="user.position.title">
        </div>
        <div class="user-info-data__row">
          <div class="user-info-data__label">Отдел</div>
          <input class="user-info-data__input" disabled type="text" name="department" id="department" :value="user.department.title">
        </div>
        <div class="user-info-data__row">
          <div class="user-info-data__label">Компания</div>
          <input class="user-info-data__input" disabled type="text" name="company" id="company" :value="user.company.title">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user {
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__name {
    background: cornflowerblue;
    padding: 10px;

    input {
      background: transparent;
      padding: 5px;
      border: 1px solid blue;

      color: black;
    }
   }
}

.user-info {
  display: flex;
  align-items: center;
  gap: 10px;

  &__avatar {
    display: flex;
    position: relative;
    border-radius: 50px;
  }
}

.user-info-data {
  display: flex;
  flex: 1;
  flex-direction: column;

  &__row {
    display: flex;
  }

  &__label {
    color: grey;
    width: 100px;
  }

  &__input {
    flex: 1;
  }
}
</style>
