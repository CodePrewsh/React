import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Importing axios for making HTTP requests
import ReactLoading from 'react-loading'; // Importing ReactLoading for loading spinner
import { Media } from 'react-bootstrap'; // Importing Media component from react-bootstrap for displaying user information

function GitHub() {
    // State variables for storing data, search term, loading state, and error
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // useEffect hook to fetch data when the component mounts
    useEffect(() => {
        getData();
    }, []);

    // Function to fetch data from GitHub API
    const getData = async () => {
        try {
            const res = await axios.get(`https://api.github.com/search/users?q=${searchTerm}`);
            setData(res.data.items);
            setIsLoading(false); // Set loading to false after data is fetched
        } catch (error) {
            setError(error); // Set error if request fails
            setIsLoading(false); // Set loading to false if request fails
        }
    };

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true); // Set loading to true when form is submitted
        getData(); // Fetch data based on search term
    };

    // Mapping over the data to display each user
    const listUsers = data.map((user) => (
        <Media key={user.id}>
            <a href={user.html_url}>
                <img
                    width={64}
                    height={64}
                    className="mr-3"
                    src={user.avatar_url}
                    alt="Generic placeholder"
                />
            </a>
            <Media.Body>
                <h5>Login: {user.login}</h5>
                <p>Id: {user.id}</p>
            </Media.Body>
        </Media>
    ));

    return (
        <div>
            {/* Form for entering search term */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={(event) => setSearchTerm(event.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            <h3>GitHub Users Results</h3>
            {/* Display loading spinner while data is being fetched */}
            {isLoading && (
                <ReactLoading type="spinningBubbles" color="#444" />
            )}
            {/* Display list of users */}
            {listUsers}
            {/* Display error message if request fails */}
            {error && (
                <div className="text-red-font-bold">{error.message}</div>
            )}
        </div>
    );
}

export default GitHub;
