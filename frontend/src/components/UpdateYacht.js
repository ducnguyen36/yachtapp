import useYachtsStore from "../stores/yachtsStore";

export default function UpdateYacht() {
  const yachtsStore = useYachtsStore();

  return (
    <div>
        <h2>Update Yacht</h2>
        <form onSubmit={yachtsStore.updateYacht}>
        <input
            onChange={yachtsStore.handleUpdateYachtField}
            name='name'
            value={yachtsStore.updateYachtForm.name}
            placeholder="Name" />
          <input
            onChange={yachtsStore.handleUpdateYachtField}
            name='make'
            value={yachtsStore.updateYachtForm.make}
            placeholder="Make" />
          <input
            onChange={yachtsStore.handleUpdateYachtField}
            name='year'
            value={yachtsStore.updateYachtForm.year}
            placeholder="Year" />
          <input
            type="date"
            onChange={yachtsStore.handleUpdateYachtField}
            name='lastMaintenanceDate'
            value={yachtsStore.updateYachtForm.lastMaintenanceDate}
            placeholder="Last Maintenance Date" />
          <input
            type="date"
            onChange={yachtsStore.handleUpdateYachtField}
            name='nextMaintenanceDate'
            value={yachtsStore.updateYachtForm.nextMaintenanceDate}
            placeholder="Next Maintenance Date" />
          <button>Update</button>
        </form>
      </div>
  )
}
