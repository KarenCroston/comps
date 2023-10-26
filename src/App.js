import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: "1114sss",
      label: "Can I use React on a project?",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want",
    },
    {
      id: ";dlii,kd2",
      label: "Can I use Javascript on a project?",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want",
    },
    {
      id: "kkdl776",
      label: "Can I use CSS on a project?",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want",
    },
  ];

  return <Accordion items={items} />;
}

export default App;
