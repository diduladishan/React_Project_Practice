import React, { useEffect, useState } from "react";

const FetchAndDisplayAPIData = () => {
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Data is not fetched!");
        }

        const data = await response.json();
        setUsers(data);
        console.log(data);
      } catch (error) {
        setErrors(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <p>... Loading</p>;
  }

  if (errors) {
    return <p>Error: {errors}</p>;
  }
  return (
    <div>
      <ul>
        {users.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchAndDisplayAPIData;
