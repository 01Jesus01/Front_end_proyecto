import React, {useState} from "react";
import Componente1 from '../Components/componente1';
import Componente2 from '../Components/componente2';
import Componente3 from '../Components/componente3';
import mascotas from "./Mascotas";

function App() {
  const [componenteActual, setComponenteActual] = useState(1);
  const [mascotaList, setMascotaList] = React.useState(mascotas);

  const cambiarComponente = (numeroComponente) => {
    setComponenteActual(numeroComponente);
  };

  let componenteMostrado;
  switch (componenteActual) {
    case 1:
      componenteMostrado = <Componente1 titulo="Componente 1" descripcion="Este es el Componente 1" />;
      break;
    case 2:
      componenteMostrado = mascotaList.map(createCard);
      break;
    case 3:
        componenteMostrado = <Componente3
        nombre={nombre}
        apellido={apellido}
        numero_control={numero_control} />;
      break;
    default:
      componenteMostrado = <Componente1 titulo="Componente 1" descripcion="Este es el Componente 1" />;
      break;
  }

  function createCard(mascotas){
    return(
        <Componente2 
            key={mascotas.id}
            namemascota={mascotas.namemascota} 
            image={mascotas.image} 
            especie={mascotas.especie}
            raza={mascotas.raza}
            color={mascotas.color} 
            peso={mascotas.peso}
            tamaño={mascotas.tamaño}
            edad={mascotas.edad}
        />
    );
}
let isLogged = true;
  return(
    
    <div>
    <div className="inicio">
      <button onClick={() => cambiarComponente(1)} className="btninicio">Mostrar Componente 1</button>
      <button onClick={() => cambiarComponente(2)} className="btninicio">Mostrar Componente 2</button>
      <button onClick={() => cambiarComponente(3)} className="btninicio">Mostrar Componente 3</button>
    </div>

    {componenteMostrado}
    
    
  </div>
);

}
let nombre="Axel Felipe"
let apellido="Reyes Valadez"
let numero_control="21550156"
export default App;







/*
function App() {
    const [contactList, setContactList] = React.useState(contacs);
    const [newName, setNewName] = React.useState("");
    const [newTel, setNewTel] = React.useState("6143633317");
    const [newMail, setNewMail] = React.useState("algo@gmail.com");

    function createCard(contact){

        function deleteCardApp() {
            setContactList((prevValue) => {
                return prevValue.filter((item, index) => {
                    return item.id !== contact.id;
                });
        });
        }

        return(
            <Card 
                key={contact.id}
                namecontact={contact.namecontact} 
                image={contact.image} 
                tel={contact.tel} 
                email={contact.email}
                deleteCard={deleteCardApp}
            />
        );
    }

    function nameHandlerApp(event) {
        setContact.id(event.target.value);
        console.log(contact.id);

    }


    
    function nameHandlerApp(event) {
        setNewName(event.target.value);
        console.log(newName);

    }
    function telHandlerApp(event) {
        setNewTel(event.target.value);
        console.log(newTel);

    }

    function mailHandlerApp(event) {
        setNewMail(event.target.value);
        console.log(newMail);

    }

    function addContactApp() {
        setContactList((prevValue) => [
            ...prevValue,
            {id: new,namecontact: newName, image: "", tel: newTel, email: newMail}
        ]);
    }


    let isLogged = true;

    return(
        <div>
            <FormTarjetas 
            nameHandler={nameHandlerApp}
            telHandler={telHandlerApp}
            mailHandler={mailHandlerApp}
            addContact={addContactApp}
            />
            {isLogged && contactList.map(createCard)}
            <Counter/>
                <h1>Cualquier cosa</h1>
            <List 
                book1="Mujercitas."
                book2="Harry Potter."
                book3="It."
            />
            <List
                book1="Maze Runner."
                book2="Resplandor."
                book3="El Perfume."
            />
        </div>
            
    );
}

function App() {

    function createCard(contact){
        return(
            <Card 
                namecontact={contact.namecontact} 
                image={contact.image} 
                tel={contact.tel} 
                email={contact.email}
            />
        );
    }
    return(
        <div>
            --
            <Card 
                namecontact={contacts[0].namecontact} 
                image={contacts[0].image} 
                tel={contacts[0].tel} 
                email={contacts[0].email}
            />
            <Card 
                namecontact={contacts[1].namecontact} 
                image={contacts[1].image} 
                tel={contacts[1].tel} 
                email={contacts[1].email}
            />
            <Card 
                namecontact={contacts[2].namecontact} 
                image={contacts[2].image} 
                tel={contacts[2].tel} 
                email={contacts[2].email}
            />
            <Counter/>
                <h1>Cualquier cosa</h1>
            <List 
                book1="Mujercitas."
                book2="Harry Potter."
                book3="It."
            />
            <List
                book1="Maze Runner."
                book2="Resplandor."
                book3="El perfume."
            />
        </div>
            
    );
}

export default App;
*/