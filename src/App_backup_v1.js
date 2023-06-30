import Blog from './components/Blog';

function App() {
  // const isLogin = true;
  // let content;
  // if(isLogin){
  //   content = <Blog title="Javascript Learning" body="blog content 1" styles="text-primary" />
  // }else{
  //   content = 'Not loggedin'
  // }
  const drinks = ['Tea','Water','Coffee','Milk'];
  const numbers = [1,2,3,4,5,6,7,8,9,10];
  const data = [
    {id: 1, name: 'Sannati', desg: 'PHP Developer', age: 23},
    {id: 2, name: 'Soumyadeep', desg: 'Software Engineer', age: 25},
    {id: 3, name: 'John', desg: 'Analyst', age: 32}
  ]
  // const test = {a:1,b:2,c:5};
  // const {a,b,c} = test;
  // console.log(a,b,c)
  return (
    <div className='container'>
      <Blog title="Javascript Learning" body="blog content 1" styles="text-primary" />
      <ul>
        { drinks && drinks.map(drink => <li>{drink}</li>) }
      </ul>
      { numbers && numbers.filter(n => n%2 === 0).map(number => <h5>{number}</h5>) }

      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {
            data && data.map(({id,name,desg,age}) => {
              return (
              <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{desg}</td>
                <td>{age}</td>
              </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
