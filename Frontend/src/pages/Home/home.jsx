import { useState } from "react";
import Header from "../../components/Header/header";
import Dashboard from "../../components/Dashboard/dashboard";
import Convidados from "../../components/Convidados/convidados";
import Mesas from "../../components/Mesas/mesas";
import Checkins from "../../components/Checkins/checkins";

const Home = () => {
    const [telaAtiva, setTelaAtiva] = useState('dashboard')
    return (
        <>
            <Header telaAtiva={telaAtiva} setTelaAtiva={setTelaAtiva} />
            <main>
                {telaAtiva === 'dashboard' && <Dashboard/>}
                {telaAtiva === 'convidados' && <Convidados/>}
                {telaAtiva === 'mesas' && <Mesas/>}
                {telaAtiva === 'checkins' && <Checkins/>}
            </main>
        </>
    )
}

export default Home;    