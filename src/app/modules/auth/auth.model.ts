import { Schema, model } from "mongoose";
import { TUser } from "./auth.interface";
import bcryptjs from "bcryptjs";
import config from "../../config";

const authSchema = new Schema<TUser>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

// hashing password before it save to our database
authSchema.pre("save", async function (next) {
  const user = this;

  user.password = await bcryptjs.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );

  next();
});

// after saving the user in the response we are sending empty string in the password field
authSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});

export const Auth = model<TUser>("Auth", authSchema);
