import { defineStore } from 'pinia'

export const useUserStore = defineStore('useUserStore', {
    state: () => ({
        name: '',
        role: 0,        // 1: admin, 0: normal user
    }),
    getters: {},
    actions: {
        setName(name: string) {
            this.name = name
        },
        setRole(role: number) {
            this.role = role
        },
    },
})