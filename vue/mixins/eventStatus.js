const mixins = {
  data() {
    return {
      eventStatus: {}
    }
  },
  methods: {
    hasEventStatus(key) {
      Boolean(this.eventStatus[key])
    },
    removeEventStatus(key) {
      const eventStatus = { ...this.eventStatus }
      delete eventStatus[key]
    },
    addEventStatus(key) {
      const eventStatus = { ...this.eventStatus }
      eventStatus[key] = true
      this.eventStatus = eventStatus
    }
  }
}
