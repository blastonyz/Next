import { NextResponse } from "next/server";
import {doc, getDoc} from  "firebase/firestore";
import { db } from "@/app/firebase/firebaseConfig";

export async function GET(request,{params}){
    const {id} = params
    console.log('fetch id',id);
    const docRef = doc(db,"productos",id)

    const docSnapshot = await getDoc(docRef)

    return NextResponse.json(docSnapshot.data())
}