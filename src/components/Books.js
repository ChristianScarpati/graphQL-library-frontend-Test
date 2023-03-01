import { useQuery } from "@apollo/client";
import { GET_ALL_BOOKS_WITHOUT_GENRES } from "../queries";


const Books = (props) => {

  const getBooks = useQuery(GET_ALL_BOOKS_WITHOUT_GENRES);
  const getAllBooks = getBooks?.data?.AllBooks || [];

  if (!props.show) {
    return null
  }

  return (
    <div>
      <h2>books</h2>

      <table>
        <tbody>
          <tr>
            <th></th>
            <th>author</th>
            <th>published</th>
          </tr>
          {getAllBooks.map((a) => (
            <tr key={a.title}>
              <td>{a.title}</td>
              <td>{a.author}</td>
              <td>{a.published}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Books
