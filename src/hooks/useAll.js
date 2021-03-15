import { useContext } from "react"
import { AllContext } from "../contexts/AllContext"

export function useAll() {
  const context = useContext(AllContext)

  return context
}