import axios from 'axios';
let baseURL;

process.env.NODE_ENV === 'production'
  ? (baseURL = 'here should be your production endpoint')
  : (baseURL = 'http://localhost:3000');

const service = axios.create({ withCredentials: true, baseURL });

const MY_SERVICE = {
  test: async () => {
    return await service.get("/")
  },
  signup: async (user) => {
    return await service.post("/signup", user)
  },
  login: async (user) => {
    return await service.post("/login", user)
  },
  logOut: async () => {
    return await service.get("/logout")
  },
  isAuth: async () => {
    return await service.get('/profile')
  },
  updateUser: async (id, user) => {
    return await service.post(`user/update/${id}`, user)
  },
  editInfo: async (userData) => {
    return await service.post("/user/edit-info", userData)
  },
  deleteUser: async (id) => {
    return await service.post(`user/delete/${id}`)
  },
  updatePic: async (id, image) => {
    return await service.post(`user/update-pic/${id}`, image)
  },
  getExercises: async () => {
    return await service.get("/getExercises")
  },
  getWorkouts: async () => {
    return await service.get("/getWorkouts")
  },
  searchExercise: async (query) => {
    return await service.get(`/getExercises/search?q=${query}`)
  },
  getWorkout: async (id) => {
    return await service.get(`workouts/${id}`)
  },
  createWorkout: async (workoutInfo) => {
    return await service.post('user/create-workout', workoutInfo)
  }
};

export default MY_SERVICE;
