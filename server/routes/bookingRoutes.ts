import {Router} from "express";
import { cancelBooking, getMyBooking, createBooking } from "../controllers/bookingControllers.js";
import { protect } from "../middlewares/auth.js";


const bookingRouter = Router();

bookingRouter.post("/",protect,createBooking);
bookingRouter.get("/my",protect,getMyBooking);
bookingRouter.put("/:id/cancel",protect,cancelBooking);

export default bookingRouter;
