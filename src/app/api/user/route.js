import { User } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        connectToDb();
        const users = await User.find();
        return NextResponse.json(users);
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch users!");
    }
};