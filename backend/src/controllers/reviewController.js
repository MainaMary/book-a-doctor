import ReviewModel from "../models/ReviewModel.js";
import DoctorModel from "../models/DoctorModel.js";
const createReview = async (req, res) => {
  const { doctor, user } = req.body;
  const review = new ReviewModel(...req.body);
  try {
    const saveReview = await review.save();

    //update the Doctor's Model
    await DoctorModel.findByIdAndUpdate(req.body.doctor, {
      $push: {
        reviews: saveReview._id,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Saving review failed" });
  }
};
const getAllReviews = async (req, res) => {
  try {
    const reviews = await ReviewModel.find({});
    res
      .status(200)
      .json({ message: "Reviews found", success: true, data: reviews });
  } catch (error) {
    res.status(500).json({ succes: false, message: "Internal server error" });
  }
};

export { createReview, getAllReviews };
