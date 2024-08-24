import React from "react";
import './profil.css'
import Header from "../Header/Header";
import { RootState } from "../../features/store";
import { useSelector } from "react-redux";


export default function Profil(){

    const user = useSelector((state: RootState) => state.music.user)
		console.log(user);
    return(
        <section className="profl">
               
        </section>
    )
}