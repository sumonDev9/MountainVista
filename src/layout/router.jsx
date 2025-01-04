import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AuthLayout from "../pages/AuthLayout";
import Login from "../components/Login";
import Register from "../components/Register";
import AdventureDetailes from "../pages/AdventureDetailes";
import PrivateRoute from "../Provider/PrivateRoute";
import ForgetPassword from "../components/ForgetPassword";
import UpdatedProile from "../pages/UpdatedProile";
import Myprofile from "../pages/Myprofile";
import ErrorPage from "../pages/ErrorPage";
import 'animate.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: '/adventer/:id',
    element: <PrivateRoute><AdventureDetailes></AdventureDetailes></PrivateRoute>,
    loader: () => fetch('../adventures.json')
  },
  {
    path: '/profile',
    element: <PrivateRoute><UpdatedProile></UpdatedProile></PrivateRoute>
  },
  {
    path: '/myprofile',
    element: <PrivateRoute> <Myprofile></Myprofile></PrivateRoute>
  },
  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <Login></Login>
      },
      {
        path: '/auth/register',
        element: <Register></Register>
      },
      {
        path: '/auth/forgetpassword',
        element: <ForgetPassword></ForgetPassword>
      }
    ]
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  }
]);

export default router;


app.post("/add-faviroute", async (req, res) => {
     
  const { MoviePoster,Movie_url,ReleaseYear,poster_url,rating,sumary,user_email,Duration,Genre, } = req.body;
  const data = {MoviePoster,Movie_url,ReleaseYear,poster_url,rating,sumary,user_email,Duration,Genre,};
 

 
  console.log(MoviePoster);

  try {

      if (!faviroute_table) {
          faviroute_table = database.collection("user_faviroute");
      }

      const queary = { user_email:user_email ,MoviePoster: MoviePoster};

      //  data check if Exist
      const exit = await faviroute_table.findOne(queary);
      // console.log(exit);
      if (exit) {
          return res.send({ error: "You Can't Add Duplicate Movie To Favorite List !" });

      }

      const result = await faviroute_table.insertOne(data);
      res.send(result);


  } catch (error) {
      res.send(error);
  }


})