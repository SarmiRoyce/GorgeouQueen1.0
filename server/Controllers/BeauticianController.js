const User = require('../Models/Beautician.model');
const bcrypt = require('bcrypt')


// Create
exports.getUser = (req, res) => {
   const user = User.find()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            res.status(500).json({ message: 'Something went wrong' });
        });
};

// Post
exports.createUser = async (req, res) => { 
    try {
        const { name, email, password, shopregisternumber, shopplace } = req.body;
        const courseCertificates = req.file.path;

        // Check if the email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user instance
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            shopregisternumber,
            shopplace,
            coursecertificates: courseCertificates
        });

        // Save the user to the database
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

exports.getUserid = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    }
    catch (error) {
        res.status(400).send(error);
    }
};

// Update
exports.updateUserid = async (req, res) => {
    try {
        const {id} = req.params;
        await User.findByIdAndUpdate(id, req.body);
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete
exports.deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findOneAndDelete({ _id: id });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};

exports.patchUsers = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { $set: { isVerified: true } },
            { new: true, runValidators: true }
        );
        if (!updatedUser) {
            return res.status(404).json({ message: 'No user found with that ID' });
        }
        res.status(200).json({ message: 'Verified successfully', user: updatedUser });
    } catch (error) {
        res.status(500).json({ message: 'Error during verification and fetch', error });
    }
};


