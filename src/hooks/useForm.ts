import {ChangeEvent, FormEvent, useState} from 'react'

interface Validation {
  required?: {
    value: boolean
    message: string
  }
  pattern?: {
    value: string
    message: string
  }
  custom?: {
    isValid: (value: string) => boolean
    message: string
  }
}

type ErrorRecord<T> = Partial<Record<keyof T, string>>

// eslint-disable-next-line @typescript-eslint/ban-types
type Validations<T extends {}> = Partial<Record<keyof T, Validation>>

// eslint-disable-next-line @typescript-eslint/ban-types
const useForm = <T extends Record<keyof T, any> = {}>(options?: {
  validations?: Validations<T>
  initialValues?: Partial<T>
  onSubmit?: (fn?: any) => void
}) => {
  const [data, setData] = useState<T>((options?.initialValues || {}) as T)
  // const [data, setData] = useState<DataProps>(options?.initialValues || {})
  const [errors, setErrors] = useState<ErrorRecord<T>>({})

  // Needs to extend unknown so we can add a generic to an arrow function
  // Needs to extend unknown so we can add a generic to an arrow function
  const handleChange =
    <S>(key: keyof T, sanitizeFn?: (value: string) => S) =>
    (e: ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
      const value = sanitizeFn ? sanitizeFn(e.target.value) : e.target.value
      setData({
        ...data,
        [key]: value,
      })
    }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const validations = options?.validations
    if (validations) {
      let valid = true
      const newErrors: ErrorRecord<T> = {}
      // eslint-disable-next-line guard-for-in,no-restricted-syntax
      for (const key in validations) {
        const value = data[key]
        const validation = validations[key]
        if (validation?.required?.value && !value) {
          valid = false
          newErrors[key] = validation?.required?.message
        }

        const pattern = validation?.pattern
        if (pattern?.value && !RegExp(pattern.value).test(value)) {
          valid = false
          newErrors[key] = pattern.message
        }

        const custom = validation?.custom
        if (custom?.isValid && !custom.isValid(value)) {
          valid = false
          newErrors[key] = custom.message
        }
      }

      if (!valid) {
        setErrors(newErrors)
        return
      }
    }

    setErrors({})

    if (options?.onSubmit) {
      options.onSubmit(setData)
    }
  }

  return {
    data,
    handleChange,
    handleSubmit,
    errors,
  }
}

export default useForm
