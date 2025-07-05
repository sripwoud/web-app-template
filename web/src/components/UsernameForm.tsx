import { useForm } from '@tanstack/react-form'
import { FieldInfo } from 'c/FieldInfo'
import { capitalize } from 'l/format'
import { type UsernameSchema, usernameSchema } from 'l/schemas'
import type { FormEvent } from 'react'

export function UsernameForm() {
  const form = useForm<UsernameSchema>({
    defaultValues: {
      username: '',
    } as UsernameSchema,
    onSubmit: async ({ value: { username } }) => {
      alert(`Submitted - Username: ${username}`)
    },
    validators: { onChange: usernameSchema },
  })

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    e.stopPropagation()
    form.handleSubmit()
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <form.Field
        children={(field) => (
          <>
            <label htmlFor={field.name} style={{ marginRight: '4px' }}>
              {capitalize(field.name)}
            </label>
            <input
              id={field.name}
              name={field.name}
              onChange={(e) => field.handleChange(e.target.value)}
              placeholder={field.name}
              style={{ marginRight: '4px' }}
              type='text'
              value={field.state.value}
            />
            <br />
            <FieldInfo field={field} />
            <br />
          </>
        )}
        name='username'
      />
      <form.Subscribe
        children={({ canSubmit, isSubmitting }) => (
          <button aria-busy={isSubmitting} disabled={!canSubmit} type='submit'>
            Submit
          </button>
        )}
      />
    </form>
  )
}
