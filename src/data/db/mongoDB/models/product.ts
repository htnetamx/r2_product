import mongoose from "mongoose";

export interface ProductMongoDB extends mongoose.Document {
  //Required For Creation in DB
  username: String;
  password: String;
  phoneNumber: String;
  //roles:IRoleDocument['_id'][],

  //Optional
  firstName?: String;
  lastName?: String;
  email?: String;
  zipPostalCode?: String;
  address1?: String;
  company?: String;
  country?: String;
  stateProvince?: String;
  city?: String;
  address2?: String;

  //default_From_Mongoose_Doc
  createdAt: Date;
  updatedAt: Date;
}

export const ProductSchema: mongoose.Schema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      unique: true,
      required: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      sparse: true,
    },
    zipPostalCode: {
      type: String,
    },
    address1: {
      type: String,
    },
    company: {
      type: String,
    },
    country: {
      type: String,
    },
    stateProvince: {
      type: String,
    },
    city: {
      type: String,
    },
    address2: {
      type: String,
    },
    roles: [
      {
        ref: "Role",
        type: mongoose.Schema.Types.ObjectId,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Product = mongoose.model<ProductMongoDB>("Product", ProductSchema);
export { Product };
