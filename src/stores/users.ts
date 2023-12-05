import { defineStore } from 'pinia'

export const useUsersStore = defineStore('counter', {
  state: () => {
    return {
      users: [] as TUser[],
      viewedUser: null as TUser | null,
    }
  },
  actions: {
    setViewedUser(user: TUser) {
      this.viewedUser = user
    },
    async getUserList() {
      await fetch('./data.json')
        .then(function(response) {
          return response.json()
        })
        .then(res => this.users = res.data)
        .catch((error) => console.log(error));
    },
  },
  getters: {
    selectedUserId() {
      return this.viewedUser?.id
    },
  }
})
