import { useState, useEffect } from 'react';
import { db } from '../../../../firebase';
import { collection, getDocs, onSnapshot, query, where } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import './BuscarCliente.css';

function BuscarCliente() {
    //A continuacion toda la logica para buscar clientes funcional
    const [nit, setNit] = useState(''); //Estado para el NIT
    const [nombre, setNombre] = useState(''); //Estado para el nombre
    const [clientes, setClientes] = useState([]); //Estado para la lista de clientes
    const [loading, setLoading] = useState(true); //Estado para el loading
    const navigate = useNavigate();

    const buscarClientes = async () => {
        setLoading(true);
        try {
            const clientesRef = collection(db, 'clientes');
            let q;

            //Busqueda por NIT y nombre
            if (nit && nombre) {
                q = query(
                    clientesRef,
                    where('nit', '==', nit),
                    where('nombre', '>=', nombre),
                    where('nombre', '<=', nombre + '\uf8ff')
                ); //Si solo hay NIT, busca por NIT
            } else if (nit) {
                q = query(clientesRef, where('nit', '==', nit));
            }
            //Si solo hay nombre, busca por nombre
            else if (nombre) {
                q = query(
                    clientesRef,
                    where('nombre', '>=', nombre),
                    where('nombre', '<=', nombre + '\uf8ff')
                );
            } else {
                q = query(clientesRef); //Si no hay NIT ni nombre, busca todos los clientes
            }

            const snapshot = await getDocs(q);
            const resultados = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setClientes(resultados);
        } catch (error) {
            console.error('Error al buscar clientes:', error);
        } finally {
            setLoading(false);
        }
    };

    //Para buscar en tiempo real 

    useEffect(() => {
        const clientesRef = collection(db, 'clientes');
        let q;

        if (nit && nombre) {
            q = query(
                clientesRef,
                where('nit', '==', nit),
                where('nombre', '>=', nombre),
                where('nombre', '<=', nombre + '\uf8ff')
            );
        } else if (nit) {
            q = query(clientesRef, where('nit', '==', nit));
        } else if (nombre) {
            q = query(
                clientesRef,
                where('nombre', '>=', nombre),
                where('nombre', '<=', nombre + '\uf8ff')
            );
        } else {
            q = query(clientesRef);
        }

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const resultados = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setClientes(resultados);
        });
        return () => unsubscribe();
    }, [nit, nombre]);


    return (
        <div>
            <button
                onClick={() => navigate("/home")}
                className="boton-volver-buscar"
            >Volver</button>

            <h2>Buscar Cliente</h2>
            <div>
                <input
                    type="text"
                    placeholder="Buscar por NIT"
                    value={nit}
                    onChange={(e) => setNit(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Buscar por Nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                <button onClick={buscarClientes}>
                    {loading ? "Buscando..." : "Buscar"}
                </button>
            </div>

            <div>
                <h3>Resultados de la búsqueda</h3>
                {clientes.length === 0 ? (
                    <p>No se encontraron resultados</p>
                ) : (
                    <ul>
                        {clientes.map((cliente) => (
                            <li key={cliente.id}>
                                <strong>{cliente.nombre}</strong> - NIT: {cliente.nit}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}


export default BuscarCliente;
