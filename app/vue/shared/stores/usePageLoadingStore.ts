import { defineStore } from 'pinia'

export const usePageLoadingStore = defineStore('pageLoading', {
  state: () => ({
    loading: false,
  }),
})
