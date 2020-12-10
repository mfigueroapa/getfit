import axios from 'axios';
let baseURL;

process.env.NODE_ENV === 'production'
  ? (baseURL = '')
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
    return await service.put(`user/update/${id}`, user)
    // return await service.post(`user/update/${id}`, user)
  },
  editInfo: async (userData) => {
    return await service.put("/user/edit-info", userData)
    // return await service.post("/user/edit-info", userData)
  },
  deleteUser: async (id) => {
    return await service.delete(`user/delete/${id}`)
    // return await service.post(`user/delete/${id}`)
  },
  updatePic: async (id, image) => {
    return await service.put(`user/update-pic/${id}`, image)
    // return await service.post(`user/update-pic/${id}`, image)
  },
  getExercises: async () => {
    return await service.get("/api/getExercises")
  },
  getWorkouts: async () => {
    return await service.get("/api/getWorkouts")
  },
  getWorkout: async (id) => {
    return await service.get(`/api/workouts/${id}`)
  },
  createWorkout: async (workoutInfo) => {
    return await service.post('user/create-workout', workoutInfo)
  },
  getRecipesChicken: async () => {
    return await service.get(`https://api.edamam.com/search?q=chicken&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`)
  },
  getRecipes: async (query) => {
    return await service.get(`https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`)
  },
  addWorkoutToFavorites: async (workout) => {
    return await service.post(`user/save-workout-to-favorites`, workout)
  },
  getFavWorkouts: async () => {
    return await service.get(`user/saved-workouts`)
  }
};

export default MY_SERVICE;
