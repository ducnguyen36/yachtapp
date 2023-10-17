
import useYachtsStore from '../stores/yachtsStore';

export default function Yacht({ yacht }) {
  const yachtsStore = useYachtsStore(store => {
    return {
      deleteYacht: store.deleteYacht,
      toggleUpdateYachtForm: store.toggleUpdateYachtForm
    }
  });
  return (
    <div key={yacht._id}>
            <h3>{yacht.name}</h3>
            <p>{yacht.make}</p>
            <p>{yacht.year}</p>
            <p>{yacht.lastMaintenanceDate}</p>
            <p>{yacht.nextMaintenanceDate}</p>
            <button onClick={() => yachtsStore.deleteYacht(yacht._id)}>Delete</button>
            <button onClick={() => yachtsStore.toggleUpdateYachtForm(yacht)}>Update</button>
    </div>
  )
}
