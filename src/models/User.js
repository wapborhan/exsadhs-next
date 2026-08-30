"use server";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema(
  {
    name: String,
    username: String,
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      minlength: 6, // good practice
    },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    provider: { type: String, default: "credentials" },
    providerAccountId: String,
    image: String,
  },
  { timestamps: true }
);

/**
 * 🔹 Pre-save hook: Hash password before saving
 */
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); // only hash if modified
  try {
    const saltRounds = 12; // secure but still performant
    this.password = await bcrypt.hash(this.password, saltRounds);
    next();
  } catch (err) {
    next(err);
  }
});

/**
 * 🔹 Instance method: Compare password
 */
UserSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Prevent model overwrite in Next.js (hot reload issue)
const User = mongoose.models?.User || mongoose.model("User", UserSchema);

export default User;
