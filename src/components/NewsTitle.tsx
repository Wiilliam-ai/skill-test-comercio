import { Note } from "../interfaces/News"

interface Props {
  note: Note
}

const NewsTitle = ({ note } : Props) => {
  return (
    <>
      <li className="card_news-title">
        {note.title}
      </li>
    </>
  )
}

export default NewsTitle