import TableComponent from "./table";
import './Style.css';

const status = [
      {First:'ravi',
      Last:'kumar',
      Handle:'java',},
      {
        First:'kamal',
        Last:'viaj',
        Handle:'c#',
      },
      {
        First:'manoj',
        Last:'kumar',
        Handle:'Angular',
      }

    ];





function App() {
  return (
    <div>
      <h1>Table 1</h1>
      <TableComponent appData={status}/>
              
    </div>
    
    
  );
}

export default App;
