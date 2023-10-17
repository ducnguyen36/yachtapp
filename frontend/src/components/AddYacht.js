import useYachtsStore from "../stores/yachtsStore";

export default function AddYacht() {
  const yachtsStore = useYachtsStore();

  return (
    <div>
        <h2>Add Yacht</h2>
        <form onSubmit={yachtsStore.addYacht}>
            <input
            onChange={yachtsStore.handleCreateYachtField}
            name='name'
            value={yachtsStore.createYacht.name}
            placeholder="Name" />
            <input
            onChange={yachtsStore.handleCreateYachtField}
            name='make'
            value={yachtsStore.createYacht.make}
            placeholder="Make" />
            <input
            onChange={yachtsStore.handleCreateYachtField}
            name='year'
            value={yachtsStore.createYacht.year}
            placeholder="Year" />
            <input
              type="date"
              onChange={yachtsStore.handleCreateYachtField}
              name='lastMaintenanceDate'
              value={yachtsStore.createYacht.lastMaintenanceDate}
              placeholder="Last Maintenance Date" />
            <input
              type="date"
              onChange={yachtsStore.handleCreateYachtField}
              name='nextMaintenanceDate'
              value={yachtsStore.createYacht.nextMaintenanceDate}
              placeholder="Next Maintenance Date" />
            <button>Submit</button>
        </form>
    </div>
  )
}
