import useYachtsStore from '../stores/yachtsStore';
import Yacht from './Yacht';

export default function Yachts() {
  const yachtsStore = useYachtsStore();

  return (
    <div>
        {yachtsStore.yachts && yachtsStore.yachts.map(yacht => (
          <Yacht key={yacht._id} yacht={yacht} />
        ))}
    </div>
  )
}
