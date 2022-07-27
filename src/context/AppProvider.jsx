import { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [isUserLogIn, setIsUserLogIn] = useState(false);
  const [menu, setMenu] = useState({
    breakfast: [
      {
        name: "Arepa Asada rellena con Queso Llanero",
        price: 5000,
      },
      {
        name: "Pelua: Arepa asada rellena con Carne Mechada y Queso Amarillo",
        price: 5000,
      },
      {
        name: "Reina Pepiada: Arepa asada rellena con Pollo, Palta, Cilantro, Especias y Mayonesa ",
        price: 5000,
      },
      {
        name: "Empanada: de Queso Llanero",
        price: 4200,
      },
      {
        name: "Empanada: de Pollo",
        price: 4200,
      },
      {
        name: "Empanada: de Carne Mechada",
        price: 4200,
      },
    ],
    lunchs: [
      {
        name: "Pabellon: Arroz Blanco, Porotos Negros, Carne Mechada, Tajadas",
        price: 7500,
      },
      {
        name: "Patacones: Rellenos de Carne Mechada, Ensalada de Repollo, Zanahoria y Salsas a Gusto ",
        price: 6000,
      },
      {
        name: "Hervido Criollo: Sopa de Verduras, carne y Pollo",
        price: 5000,
      },
      {
        name: "Tostones: Dips de Plátano Verde Frito",
        price: 4000,
      },
      {
        name: "Tajadas con Queso LLanero: Dips de Plátanos Maduro Frito y Queso LLanero",
        price: 4200,
      },
      {
        name: ": Tequeños: rellenos con Queso Llanero  ",
        price: 4500,
      },
    ],
    drinks: [
      {
        name: "Cafe Negro",
        price: 1500,
      },
      {
        name: "Cafe con Leche",
        price: 2000,
      },
      {
        name: "Té",
        price: 1500,
      },
      {
        name: "Jugo de guayaba",
        price: 6500,
      },
      {
        name: "Jugo de lechoza",
        price: 2500,
      },
      {
        name: "Agua",
        price: 1000,
      },
    ],
  });
  const [currentMenu, setCurrentMenu] = useState([]);

  return (
    <AppContext.Provider
      value={{
        email,
        password,
        userType,
        isUserLogIn,
        menu,
        currentMenu,
        setEmail,
        setPassword,
        setUserType,
        setIsUserLogIn,
        setMenu,
        setCurrentMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
