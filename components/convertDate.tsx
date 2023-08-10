import { parseISO, format } from "date-fns"
import ja from 'date-fns/locale/ja'

type ConvertDateProps = {
  dateISO: string,
}

const ConvertDate = ({dateISO}: ConvertDateProps) => {
  return (
    <time dateTime={dateISO}>
      {format(parseISO(dateISO), 'yyyy年MM月dd日', {
        locale: ja,
      })}
    </time>
  )
}

export default ConvertDate