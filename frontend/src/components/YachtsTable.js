import useYachtsStore from '../stores/yachtsStore';
import YachtRow from './YachtRow';
import "./YachtsTable.css"

export default function YachtsTable() {
  const yachtsStore = useYachtsStore();

  return (
    <div>
        <table>
          <tr>
            <th>Name</th>
            <th>Make</th>
            <th>Year</th>
            <th>Last Maintenance Date</th>
            <th>Next Maintenance Date</th>
            <th>action</th>
          </tr>
          {yachtsStore.yachts && yachtsStore.yachts.map(yacht => (
            <YachtRow yacht={yacht} key={yacht._id} />
          ))}
        </table>
    </div>
  )
}
