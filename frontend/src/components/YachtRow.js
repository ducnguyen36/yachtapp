
import useYachtsStore from '../stores/yachtsStore';

export default function YachtRow({ yacht }) {
  const yachtsStore = useYachtsStore(store => {
    return {
      deleteYacht: store.deleteYacht,
      toggleUpdateYachtForm: store.toggleUpdateYachtForm
    }
  });
  return (
    <tr key={yacht._id}>
      <td>{yacht.name}</td>
      <td>{yacht.make}</td>
      <td>{yacht.year}</td>
      <td>{yacht.lastMaintenanceDate}</td>
      <td>{yacht.nextMaintenanceDate}</td>
      <td>
        <button onClick={() => yachtsStore.deleteYacht(yacht._id)}>Delete</button>
        <button onClick={() => yachtsStore.toggleUpdateYachtForm(yacht)}>Update</button>
      </td> 
    </tr>
  )
}
