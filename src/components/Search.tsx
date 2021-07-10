import s from './Search.module.css'
type SearchType = {
  inputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export const Search: React.FC<SearchType> = ({ inputHandler }) => {
  return (
    <div className={s.group}>
      <input onChange={inputHandler} type={s.text} required />
      <span className={s.highlight}></span>
      <span className={s.bar}></span>
      <label>Character name</label>
    </div>
  )
}
