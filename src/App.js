import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Section from "./components/Section/Section";

function App() {
  let users = [
    {
      number: "1",
      team: "Kaganat",
      level: 2,
      points: 28,
    },
    {
      number: "2",
      team: "Abdysh-Ata",
      level: 3,
      points: 25,
    },
    {
      number: "3",
      team: "Dordoi",
      level: 5,
      points: 19,
    },
    {
      number: "4",
      team: "Alay",
      level: 2,
      points: 18,
    },
  ];
  // const [user, setUser] = useState(users);

  return (
    <div className="App">
      <Header />
      <Section user={users} />
      <Footer />
    </div>
  );
}

export default App;
