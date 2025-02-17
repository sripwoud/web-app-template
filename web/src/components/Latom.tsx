import { useLatom } from 'h/useLatom'

export const Latom = () => {
  const { latom, reset, set } = useLatom()

  return latom.mapOrElseSync(
    () => (
      <button type='button' onClick={() => set('some value')}>
        Set
      </button>
    ),
    (value) => (
      <>
        <span>{value}</span>
        <button type='button' onClick={reset}>
          Reset
        </button>
      </>
    ),
  )
}
