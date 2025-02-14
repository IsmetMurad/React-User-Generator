import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: false,
    };
  }

 
  fetchUser = () => {
    this.setState({ loading: false }); 
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          items: response.results,
          loading: true,
        });
      });
  };

  componentDidMount() {
    this.fetchUser(); 
  }

  render() {
    const { items, loading } = this.state;

    if (!loading) {
      return <div className="flex justify-center mt-100 text-[50px] font-bold">Loading...</div>;
    }

    return (
      <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <div className="flex justify-center mb-4">
            {items.map((item, index) => (
              <div key={index} className="text-center">
                <img
                  src={item.picture.large}
                  alt={item.name.first}
                  className="w-32 h-32 rounded-full object-cover mt-2"
                />
                        <h2 id="user-name" className="text-xl font-bold text-center mb-2">
                        {item.name.first} {item.name.last}
        </h2>

              </div>
            ))}
          </div>

          <p className="text-gray-600 text-center mb-2">{items[0]?.email}</p>
          <p className="text-gray-600 text-center">{items[0]?.phone}</p>

          <div className="mt-4 flex justify-center">
            <button
              onClick={this.fetchUser}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            >
              Yeni İstifadəçi
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;