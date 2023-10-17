import { useEffect } from 'react';
import Yachts from '../components/Yachts';
import YachtsTable from '../components/YachtsTable';
import UpdateYacht from '../components/UpdateYacht';
import AddYacht from '../components/AddYacht';
import useYachtsStore from '../stores/yachtsStore';

export default function YachtsPage() {
  //store
  const yachtsStore = useYachtsStore();

  //useState

  //useEffect
  useEffect(() => {
    yachtsStore.fetchYachts();
  }, []);
  
  //functions

  return (
    <div className="App">
      {/* yacht list */}
      <YachtsTable />
      {/* <Yachts /> */}
      {/* yacht form */}
      {yachtsStore.updateYachtForm._id? <UpdateYacht /> : <AddYacht />}
      
    </div>
  );
}
