import { create } from 'zustand';
import axios from 'axios';

//create yacht store
const useYachtsStore = create((set) => ({
    yachts: [],
    
    createYacht: {
      name: '',
      make: '',
      year: '',
      lastMaintenanceDate: '',
      nextMaintenanceDate: ''
    },

    updateYachtForm: {
      _id: null,
      name: '',
      make: '',
      year: '',
      lastMaintenanceDate: '',
      nextMaintenanceDate: ''
    },

    fetchYachts: async () => {
        try {
            const res = await axios.get('/yachts');
            set({yachts: res.data});
            console.log(res.data);
          } catch (error) {
            console.log(error);
          }
    },

    handleCreateYachtField: async (e) => {
        const { name, value } = e.target;
    
       
        set( state =>  ({
            createYacht: {
                ...state.createYacht,
                [name]: value
            }
        }))
    },

    addYacht: async (e) => {
        e.preventDefault();
        try {
          const { createYacht, yachts } = useYachtsStore.getState();
          const res = await axios.post('/yachts', createYacht);
          console.log(res.data);
          //update state and clear form
          set({
            yachts: [...yachts, res.data.newYacht],
            createYacht: {
                name: '',
                make: '',
                year: '',
                lastMaintenanceDate: '',
                nextMaintenanceDate: ''
            }
          });
    
        } catch (error) {
          console.log(error);
        }
      },

      handleUpdateYachtField: async (e) => {
        const { name, value } = e.target;
    
        
        set( state =>  ({
          updateYachtForm: {
              ...state.updateYachtForm,
              [name]: value
          }
      }))

      },
    
    
    
      deleteYacht: async (id) => {
        try {
          //delete yacht from db
          await axios.delete(`/yachts/${id}`);
          
          //update state
          const { yachts } = useYachtsStore.getState();
          const filteredYachts = yachts.filter(yacht => yacht._id !== id);
          set({yachts: filteredYachts});

        } catch (error) {
          console.log(error);
        }
      },
    
      toggleUpdateYachtForm: (yacht) => {
        set({
          updateYachtForm: {
            _id: yacht._id,
            name: yacht.name,
            make: yacht.make,
            year: yacht.year,
            lastMaintenanceDate: yacht.lastMaintenanceDate,
            nextMaintenanceDate: yacht.nextMaintenanceDate
          }
        });
      },
    
      updateYacht: async (e) => {
        e.preventDefault();
        try {
          const { updateYachtForm, yachts } = useYachtsStore.getState();
          const res = await axios.put(`/yachts/${updateYachtForm._id}`, updateYachtForm);
          console.log(res.data);
          //update state
          const updatedYachts = yachts.map(yacht => yacht._id === updateYachtForm._id ? res.data.updatedYacht : yacht);
          set({
            yachts: updatedYachts,
            updateYachtForm: {
              _id: null,
              name: '',
              make: '',
              year: '',
              lastMaintenanceDate: '',
              nextMaintenanceDate: ''
            }
          });
        } catch (error) {
          console.log(error);
        }
      }

}));

export default useYachtsStore;