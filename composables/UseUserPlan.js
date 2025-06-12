import { reactive, readonly } from 'vue'

const state = reactive({
  plan: null // 'training' ou 'trainer'
})

export function useUserPlan() {
  function setPlan(newPlan) {
    state.plan = newPlan
  }
  return {
    plan: readonly(state).plan,
    setPlan
  }
}