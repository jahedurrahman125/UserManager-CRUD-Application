import User from '../model/users.js';

export const getData = async(req, res) => {
    try {
        let user = await User.find();
        res.json(user)
    } catch (error) {
        return res.status(400).json({ message: 'Loading fail' });
    }
};

export const addUser = async(req, res) => {
    const user = req.body;
    const newUser = new User(user);
    try {
        await newUser.save();
        res.send('data stored in Mondodb')
    } catch (error) {
        return res.status(400).json({ message: 'post data fail' });
    }
};

export const getUserById = async(req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findById(id);
        res.json(user);
    } catch (error) {
        return res.status(400).json({ message: "cannot get data" })
    }
};

export const updateUser = async(req, res) => {
    const _id = req.params.id;
    const users = req.body;
    const updateUser = new User(users);
    try {
        const user = await User.updateOne({_id }, updateUser);
        res.json(user);
    } catch (error) {
        return res.status(400).json({ message: "data cannot updated" });
    }
};

export const deleteUser = async(req, res) => {
   /*  const _id = req.params.id;
    console.log(_id) */
    try {
        await User.deleteOne({ _id: req.params.id });
        res.json('deleted');
    } catch (error) {
        return res.status(400).json({ message: "data cannot deleted" })
    }
};

