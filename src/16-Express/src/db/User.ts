import mongoose, { Schema } from "mongoose"
const UserScheme = new mongoose.Schema({
    username: { type: String, require: true },
    email: { type: String, require: true },
    authentication: {
        password: { type: String, select: false },
        salt: { type: String, select: false },
        sessionToken: { type: String, select: false }
    }
})

export const UserModel = mongoose.model('User', UserScheme);

export const getUsers = () => UserModel.find()
export const getUserByEmail = (email: string) => UserModel.findOne({ email })
export const getUserBySessionToken = (sessionToken: string) => UserModel.findOne(
    { 'authentication.sessionToken': sessionToken }
)
export const getUserById = (id: String) => UserModel.findById(id)
export const createUser = (jsonData: Record<string, any>) =>
    new UserModel(jsonData).save().then(user => user.toObject())
export const deleteUser = (id:string) => UserModel.findOneAndDelete({_id : id})
export const updateUser = (id:string , values : Record<string , any>) => UserModel.findOneAndUpdate({id , values})