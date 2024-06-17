// const User = require('../Models/Booking.model');



// // Create
// exports.getUser = (req, res) => {
//    const user = User.find()
//         .then(users => {
//             res.status(200).json(users);
//         })
//         .catch(err => {
//             res.status(500).json({ message: 'Something went wrong' });
//         });
// };

// // Post
// exports.createUser = async (req, res) => { 
//     const user = new User (req.body) 
//     user.save()
//     .then(() => {
//         res.status(201).send(user);
//     })
//     .catch(err => {
//         res.status(500).send(err);
//     });
// };


// exports.getUserid = async (req, res) => {
//     try {
//         const user = await User.findById(req.params.id);
//         res.status(200).json(user);
//     }
//     catch (error) {
//         res.status(400).send(error);
//     }
// };


// // Update
// exports.updateUserid = async (req, res) => {
//     try {
//       const {id} = req.params
//       await User.findByIdAndUpdate(id, req.body);
//       const user = await User.findById(id);
//       res.status(200).json(user);
//     } catch (error) {
//       res.status(400).send(error);
//     }
// };


// // Delete
// exports.deleteUser = async (req, res) => {
//     const id = req.params.id;
//     try {
//         const user = await User.findOneAndDelete({ _id: id });
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }
//         res.status(200).json({ message: 'User deleted successfully' });
//     } catch (err) {
//         res.status(500).json({ message: 'Something went wrong' });
//     }
// };




// bookingController.js

// const Booking = require('../Models/Booking.model');

// exports.createBooking = async (req, res) => {
//   try {
//     const { beauticianName, customerName, packages, date, time } = req.body;
//     const newBooking = new Booking({
//       beauticianName,
//       customerName,
//       packages,
//       date,
//       time
//     });
//     const savedBooking = await newBooking.save();
//     res.status(201).json(savedBooking);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };



// exports.getBooking = async (req,res)=>{
//   try {
//     const bookings = await Booking.find();
//     res.json(bookings);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// }


const Booking = require('../Models/Booking.model');

exports.createBooking = async (req, res) => {
  try {
    const { beauticianName, customerName, packages, date, time } = req.body;
    const newBooking = new Booking({
      beauticianName,
      customerName,
      packages,
      date,
      time
    });
    const savedBooking = await newBooking.save();
    res.status(201).json(savedBooking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getBooking = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateBookingStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updatedBooking = await Booking.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedBooking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    res.json(updatedBooking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
